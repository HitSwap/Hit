(this["webpackJsonphit-frontend"]=this["webpackJsonphit-frontend"]||[]).push([[6],{1085:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return X}));var i=n(35),a=n(5),c=n.n(a),r=n(12),o=n(13),l=n(8),s=n(6),d=n(1),u=n(4),b=n(7),j=n(9),O=n(3),v=n(39),x=n(58),m=n(14),p=n(37),h=n(179),C=n(203),f=n(363),y=n(189),R=n(28),E=n(115),I=n(109),g=n(65),T=n(41),U=n(19),w=n(60),Y=n(43),N=n(263),_=n(105),S=n(807),k=n(38),P=n(161);var A=n(61),D=n(67),L=n(217),B=n(33),q=n(131),Q=n(224),H=n(118),V=n(100),z=n(336);function M(){return Object(B.c)((function(e){return e.burn}))}var F,W=n(51),G=n(243),J=n(0),K=u.e.div(F||(F=Object(s.a)(["\n  border: solid 1px ",";\n  border-radius: 16px;\n  padding: 16px;\n"])),(function(e){return e.theme.colors.cardBorder}));function X(e){var t,n,a,s,u,F,X,Z,$,ee,te,ne,ie,ae,ce,re,oe,le,se,de=e.history,ue=e.match.params,be=ue.currencyIdA,je=ue.currencyIdB,Oe=null!==(t=Object(w.c)(be))&&void 0!==t?t:void 0,ve=null!==(n=Object(w.c)(je))&&void 0!==n?n:void 0,xe=Object(U.a)(),me=xe.account,pe=xe.chainId,he=xe.library,Ce=Object(d.useMemo)((function(){return[Object(A.b)(Oe,pe),Object(A.b)(ve,pe)]}),[Oe,ve,pe]),fe=Object(l.a)(Ce,2),ye=fe[0],Re=fe[1],Ee=Object(m.b)().t,Ie=Object(W.e)(),ge=M(),Te=ge.independentField,Ue=ge.typedValue,we=function(e,t){var n,i,a,c,r,s=Object(U.a)(),d=s.account,u=s.chainId,b=M(),O=b.independentField,v=b.typedValue,x=Object(q.b)(e,t),m=Object(l.a)(x,2)[1],p=Object(V.e)(null!==d&&void 0!==d?d:void 0,[null===m||void 0===m?void 0:m.liquidityToken]),h=null===p||void 0===p?void 0:p[null!==(n=null===m||void 0===m||null===(i=m.liquidityToken)||void 0===i?void 0:i.address)&&void 0!==n?n:""],C=[Object(A.b)(e,u),Object(A.b)(t,u)],f=C[0],y=C[1],R=(a={},Object(o.a)(a,z.a.CURRENCY_A,f),Object(o.a)(a,z.a.CURRENCY_B,y),Object(o.a)(a,z.a.LIQUIDITY,null===m||void 0===m?void 0:m.liquidityToken),a),E=Object(Q.a)(null===m||void 0===m?void 0:m.liquidityToken),I=m&&E&&h&&f&&j.e.greaterThanOrEqual(E.raw,h.raw)?new j.k(f,m.getLiquidityValue(f,E,h,!1).raw):void 0,g=m&&E&&h&&y&&j.e.greaterThanOrEqual(E.raw,h.raw)?new j.k(y,m.getLiquidityValue(y,E,h,!1).raw):void 0,T=(c={},Object(o.a)(c,z.a.CURRENCY_A,I),Object(o.a)(c,z.a.CURRENCY_B,g),c),w=new j.g("0","100");if(O===z.a.LIQUIDITY_PERCENT)w=new j.g(v,"100");else if(O===z.a.LIQUIDITY){if(null===m||void 0===m?void 0:m.liquidityToken){var Y=Object(H.a)(v,m.liquidityToken);Y&&h&&!Y.greaterThan(h)&&(w=new j.g(Y.raw,h.raw))}}else if(R[O]){var N=Object(H.a)(v,R[O]),_=T[O];N&&_&&!N.greaterThan(_)&&(w=new j.g(N.raw,_.raw))}var S,k,P=(r={},Object(o.a)(r,z.a.LIQUIDITY_PERCENT,w),Object(o.a)(r,z.a.LIQUIDITY,h&&w&&w.greaterThan("0")?new j.k(h.token,w.multiply(h.raw).quotient):void 0),Object(o.a)(r,z.a.CURRENCY_A,f&&w&&w.greaterThan("0")&&I?new j.k(f,w.multiply(I.raw).quotient):void 0),Object(o.a)(r,z.a.CURRENCY_B,y&&w&&w.greaterThan("0")&&g?new j.k(y,w.multiply(g.raw).quotient):void 0),r);return d||(S="Connect Wallet"),P[z.a.LIQUIDITY]&&P[z.a.CURRENCY_A]&&P[z.a.CURRENCY_B]||(S=null!==(k=S)&&void 0!==k?k:"Enter an amount"),{pair:m,parsedAmounts:P,error:S}}(null!==Oe&&void 0!==Oe?Oe:void 0,null!==ve&&void 0!==ve?ve:void 0),Ye=we.pair,Ne=we.parsedAmounts,_e=we.error,Se=function(){var e=Object(B.b)();return{onUserInput:Object(d.useCallback)((function(t,n){e(Object(z.b)({field:t,typedValue:n}))}),[e])}}().onUserInput,ke=!_e,Pe=Object(d.useState)(!1),Ae=Object(l.a)(Pe,2),De=Ae[0],Le=Ae[1],Be=Object(d.useState)(!1),qe=Object(l.a)(Be,2),Qe=qe[0],He=qe[1],Ve=Object(d.useState)(""),ze=Object(l.a)(Ve,2),Me=ze[0],Fe=ze[1],We=Object(N.a)(),Ge=Object(W.n)(),Je=Object(l.a)(Ge,1)[0],Ke=($={},Object(o.a)($,z.a.LIQUIDITY_PERCENT,Ne[z.a.LIQUIDITY_PERCENT].equalTo("0")?"0":Ne[z.a.LIQUIDITY_PERCENT].lessThan(new j.g("1","100"))?"<1":Ne[z.a.LIQUIDITY_PERCENT].toFixed(0)),Object(o.a)($,z.a.LIQUIDITY,Te===z.a.LIQUIDITY?Ue:null!==(a=null===(s=Ne[z.a.LIQUIDITY])||void 0===s?void 0:s.toSignificant(6))&&void 0!==a?a:""),Object(o.a)($,z.a.CURRENCY_A,Te===z.a.CURRENCY_A?Ue:null!==(u=null===(F=Ne[z.a.CURRENCY_A])||void 0===F?void 0:F.toSignificant(6))&&void 0!==u?u:""),Object(o.a)($,z.a.CURRENCY_B,Te===z.a.CURRENCY_B?Ue:null!==(X=null===(Z=Ne[z.a.CURRENCY_B])||void 0===Z?void 0:Z.toSignificant(6))&&void 0!==X?X:""),$),Xe=null===(ee=Ne[z.a.LIQUIDITY_PERCENT])||void 0===ee?void 0:ee.equalTo(new j.g("1")),Ze=Object(Y.l)(null===Ye||void 0===Ye||null===(te=Ye.liquidityToken)||void 0===te?void 0:te.address),$e=Object(d.useState)(null),et=Object(l.a)($e,2),tt=et[0],nt=et[1],it=Object(D.b)(Ne[z.a.LIQUIDITY],T.t),at=Object(l.a)(it,2),ct=at[0],rt=at[1];function ot(){return(ot=Object(r.a)(c.a.mark((function e(){var t,n,i,a,r,o,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ze&&Ye&&he&&We){e.next=2;break}throw new Error("missing dependencies");case 2:if(t=Ne[z.a.LIQUIDITY]){e.next=5;break}throw new Error("missing liquidity amount");case 5:return e.next=7,Ze.nonces(me);case 7:n=e.sent,i=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],a={name:"HitSwapSwap LPs",version:"1",chainId:pe,verifyingContract:Ye.liquidityToken.address},r=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],o={owner:me,spender:T.t,value:t.raw.toString(),nonce:n.toHexString(),deadline:We.toNumber()},l=JSON.stringify({types:{EIP712Domain:i,Permit:r},domain:a,primaryType:"Permit",message:o}),he.send("eth_signTypedData_v4",[me,l]).then(b.splitSignature).then((function(e){nt({v:e.v,r:e.r,s:e.s,deadline:We.toNumber()})})).catch((function(e){4001!==(null===e||void 0===e?void 0:e.code)&&rt()}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var lt=Object(d.useCallback)((function(e,t){return nt(null),Se(e,t)}),[Se]),st=Object(d.useCallback)((function(e){return lt(z.a.LIQUIDITY,e)}),[lt]),dt=Object(d.useCallback)((function(e){return lt(z.a.CURRENCY_A,e)}),[lt]),ut=Object(d.useCallback)((function(e){return lt(z.a.CURRENCY_B,e)}),[lt]),bt=Object(_.d)();function jt(){return Ot.apply(this,arguments)}function Ot(){return(Ot=Object(r.a)(c.a.mark((function e(){var t,n,a,r,l,s,d,u,b,O,v,m,p,h;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(pe&&he&&me&&We){e.next=2;break}throw new Error("missing dependencies");case 2:if(n=Ne[z.a.CURRENCY_A],a=Ne[z.a.CURRENCY_B],n&&a){e.next=5;break}throw new Error("missing currency amounts");case 5:if(r=Object(k.g)(pe,he,me),t={},Object(o.a)(t,z.a.CURRENCY_A,Object(k.c)(n,Je)[0]),Object(o.a)(t,z.a.CURRENCY_B,Object(k.c)(a,Je)[0]),l=t,Oe&&ve){e.next=9;break}throw new Error("missing tokens");case 9:if(s=Ne[z.a.LIQUIDITY]){e.next=12;break}throw new Error("missing liquidity amount");case 12:if(d=ve===j.d,u=Oe===j.d||d,ye&&Re){e.next=16;break}throw new Error("could not wrap");case 16:if(ct!==D.a.APPROVED){e.next=20;break}u?(b=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],O=[d?ye.address:Re.address,s.raw.toString(),l[d?z.a.CURRENCY_A:z.a.CURRENCY_B].toString(),l[d?z.a.CURRENCY_B:z.a.CURRENCY_A].toString(),me,We.toHexString()]):(b=["removeLiquidity"],O=[ye.address,Re.address,s.raw.toString(),l[z.a.CURRENCY_A].toString(),l[z.a.CURRENCY_B].toString(),me,We.toHexString()]),e.next=25;break;case 20:if(null===tt){e.next=24;break}u?(b=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],O=[d?ye.address:Re.address,s.raw.toString(),l[d?z.a.CURRENCY_A:z.a.CURRENCY_B].toString(),l[d?z.a.CURRENCY_B:z.a.CURRENCY_A].toString(),me,tt.deadline,!1,tt.v,tt.r,tt.s]):(b=["removeLiquidityWithPermit"],O=[ye.address,Re.address,s.raw.toString(),l[z.a.CURRENCY_A].toString(),l[z.a.CURRENCY_B].toString(),me,tt.deadline,!1,tt.v,tt.r,tt.s]),e.next=25;break;case 24:throw new Error("Attempting to confirm without approval or a signature. Please contact support.");case 25:return e.next=27,Promise.all(b.map((function(e){var t;return(t=r.estimateGas)[e].apply(t,Object(i.a)(O)).then(k.b).catch((function(t){console.error("estimateGas failed",e,O,t)}))})));case 27:if(v=e.sent,-1!==(m=v.findIndex((function(e){return x.a.isBigNumber(e)})))){e.next=33;break}console.error("This transaction would fail. Please contact support."),e.next=38;break;case 33:return p=b[m],h=v[m],He(!0),e.next=38,r[p].apply(r,Object(i.a)(O).concat([{gasLimit:h,gasPrice:Ie}])).then((function(e){var t,n;He(!1),bt(e,{summary:"Remove ".concat(null===(t=Ne[z.a.CURRENCY_A])||void 0===t?void 0:t.toSignificant(3)," ").concat(null===Oe||void 0===Oe?void 0:Oe.symbol," and ").concat(null===(n=Ne[z.a.CURRENCY_B])||void 0===n?void 0:n.toSignificant(3)," ").concat(null===ve||void 0===ve?void 0:ve.symbol)}),Fe(e.hash)})).catch((function(e){He(!1),console.error(e)}));case 38:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function vt(){var e,t;return Object(J.jsxs)(p.a,{gap:"md",children:[Object(J.jsxs)(R.b,{align:"flex-end",children:[Object(J.jsx)(O.lb,{fontSize:"24px",children:null===(e=Ne[z.a.CURRENCY_A])||void 0===e?void 0:e.toSignificant(6)}),Object(J.jsxs)(R.c,{gap:"4px",children:[Object(J.jsx)(g.a,{currency:Oe,size:"24px"}),Object(J.jsx)(O.lb,{fontSize:"24px",ml:"10px",children:null===Oe||void 0===Oe?void 0:Oe.symbol})]})]}),Object(J.jsx)(R.c,{children:Object(J.jsx)(O.a,{width:"16px"})}),Object(J.jsxs)(R.b,{align:"flex-end",children:[Object(J.jsx)(O.lb,{fontSize:"24px",children:null===(t=Ne[z.a.CURRENCY_B])||void 0===t?void 0:t.toSignificant(6)}),Object(J.jsxs)(R.c,{gap:"4px",children:[Object(J.jsx)(g.a,{currency:ve,size:"24px"}),Object(J.jsx)(O.lb,{fontSize:"24px",ml:"10px",children:null===ve||void 0===ve?void 0:ve.symbol})]})]}),Object(J.jsx)(O.lb,{small:!0,textAlign:"left",pt:"12px",children:Ee("Output is estimated. If the price changes by more than %slippage%% your transaction will revert.",{slippage:Je/100})})]})}function xt(){var e,t,n;return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(R.b,{children:[Object(J.jsx)(O.lb,{children:Ee("%assetA%/%assetB% Burned",{assetA:null!==(e=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==e?e:"",assetB:null!==(t=null===ve||void 0===ve?void 0:ve.symbol)&&void 0!==t?t:""})}),Object(J.jsxs)(R.c,{children:[Object(J.jsx)(g.b,{currency0:Oe,currency1:ve,margin:!0}),Object(J.jsx)(O.lb,{children:null===(n=Ne[z.a.LIQUIDITY])||void 0===n?void 0:n.toSignificant(6)})]})]}),Ye&&Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(R.b,{children:[Object(J.jsx)(O.lb,{children:Ee("Price")}),Object(J.jsxs)(O.lb,{children:["1 ",null===Oe||void 0===Oe?void 0:Oe.symbol," = ",ye?Ye.priceOf(ye).toSignificant(6):"-"," ",null===ve||void 0===ve?void 0:ve.symbol]})]}),Object(J.jsxs)(R.b,{children:[Object(J.jsx)("div",{}),Object(J.jsxs)(O.lb,{children:["1 ",null===ve||void 0===ve?void 0:ve.symbol," = ",Re?Ye.priceOf(Re).toSignificant(6):"-"," ",null===Oe||void 0===Oe?void 0:Oe.symbol]})]})]}),Object(J.jsx)(O.j,{disabled:!(ct===D.a.APPROVED||null!==tt),onClick:jt,children:Ee("Confirm")})]})}var mt=Ee("Removing %amountA% %symbolA% and %amountB% %symbolB%",{amountA:null!==(ne=null===(ie=Ne[z.a.CURRENCY_A])||void 0===ie?void 0:ie.toSignificant(6))&&void 0!==ne?ne:"",symbolA:null!==(ae=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==ae?ae:"",amountB:null!==(ce=null===(re=Ne[z.a.CURRENCY_B])||void 0===re?void 0:re.toSignificant(6))&&void 0!==ce?ce:"",symbolB:null!==(oe=null===ve||void 0===ve?void 0:ve.symbol)&&void 0!==oe?oe:""}),pt=Object(d.useCallback)((function(e){lt(z.a.LIQUIDITY_PERCENT,e.toString())}),[lt]),ht=Oe===j.d||ve===j.d,Ct=Boolean(pe&&(Oe&&Object(j.o)(j.n[pe],Oe)||ve&&Object(j.o)(j.n[pe],ve))),ft=Object(d.useCallback)((function(e){je&&Object(P.a)(e)===je?de.push("/remove/".concat(Object(P.a)(e),"/").concat(be)):de.push("/remove/".concat(Object(P.a)(e),"/").concat(je))}),[be,je,de]),yt=Object(d.useCallback)((function(e){be&&Object(P.a)(e)===be?de.push("/remove/".concat(je,"/").concat(Object(P.a)(e))):de.push("/remove/".concat(be,"/").concat(Object(P.a)(e)))}),[be,je,de]),Rt=Object(d.useCallback)((function(){nt(null),Me&&lt(z.a.LIQUIDITY_PERCENT,"0"),Fe("")}),[lt,Me]),Et=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,i=Object(d.useState)((function(){return e})),a=Object(l.a)(i,2),c=a[0],r=a[1],o=Object(d.useRef)(),s=Object(d.useCallback)((function(e){r(e),o.current&&clearTimeout(o.current),o.current=setTimeout((function(){t(e),o.current=void 0}),n)}),[n,t]);return Object(d.useEffect)((function(){o.current&&(clearTimeout(o.current),o.current=void 0),r(e)}),[e]),[c,s]}(Number.parseInt(Ne[z.a.LIQUIDITY_PERCENT].toFixed(0)),pt),It=Object(l.a)(Et,2),gt=It[0],Tt=It[1],Ut=Object(O.Bb)(Object(J.jsx)(h.c,{title:Ee("You will receive"),customOnDismiss:Rt,attemptingTxn:Qe,hash:Me||"",content:function(){return Object(J.jsx)(h.a,{topContent:vt,bottomContent:xt})},pendingText:mt}),!0,!0,"removeLiquidityModal"),wt=Object(l.a)(Ut,1)[0];return Object(J.jsxs)(G.a,{children:[Object(J.jsxs)(y.a,{children:[Object(J.jsx)(y.b,{backTo:"/pool",title:Ee("Remove %assetA%-%assetB% liquidity",{assetA:null!==(le=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==le?le:"",assetB:null!==(se=null===ve||void 0===ve?void 0:ve.symbol)&&void 0!==se?se:""}),subtitle:"To receive ".concat(null===Oe||void 0===Oe?void 0:Oe.symbol," and ").concat(null===ve||void 0===ve?void 0:ve.symbol),noConfig:!0}),Object(J.jsxs)(O.o,{children:[Object(J.jsxs)(p.a,{gap:"20px",children:[Object(J.jsxs)(R.b,{children:[Object(J.jsx)(O.lb,{children:Ee("Amount")}),Object(J.jsx)(O.j,{variant:"text",scale:"sm",onClick:function(){return Le(!De)},children:Ee(De?"Simple":"Detailed")})]}),!De&&Object(J.jsxs)(K,{children:[Object(J.jsxs)(O.lb,{fontSize:"40px",bold:!0,mb:"16px",style:{lineHeight:1},children:[Ke[z.a.LIQUIDITY_PERCENT],"%"]}),Object(J.jsx)(v.C,{name:"lp-amount",min:0,max:100,value:gt,onValueChanged:function(e){return Tt(Math.ceil(e))},mb:"16px"}),Object(J.jsxs)(O.H,{flexWrap:"wrap",justifyContent:"space-evenly",children:[Object(J.jsx)(O.j,{variant:"tertiary",scale:"sm",onClick:function(){return lt(z.a.LIQUIDITY_PERCENT,"25")},children:"25%"}),Object(J.jsx)(O.j,{variant:"tertiary",scale:"sm",onClick:function(){return lt(z.a.LIQUIDITY_PERCENT,"50")},children:"50%"}),Object(J.jsx)(O.j,{variant:"tertiary",scale:"sm",onClick:function(){return lt(z.a.LIQUIDITY_PERCENT,"75")},children:"75%"}),Object(J.jsx)(O.j,{variant:"tertiary",scale:"sm",onClick:function(){return lt(z.a.LIQUIDITY_PERCENT,"100")},children:"Max"})]})]})]}),!De&&Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(p.b,{children:Object(J.jsx)(O.c,{color:"textSubtle",width:"24px",my:"16px"})}),Object(J.jsxs)(p.a,{gap:"10px",children:[Object(J.jsx)(O.lb,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Ee("You will receive")}),Object(J.jsxs)(I.c,{children:[Object(J.jsxs)(O.H,{justifyContent:"space-between",mb:"8px",children:[Object(J.jsxs)(O.H,{children:[Object(J.jsx)(g.a,{currency:Oe}),Object(J.jsx)(O.lb,{small:!0,color:"textSubtle",id:"remove-liquidity-tokena-symbol",ml:"4px",children:null===Oe||void 0===Oe?void 0:Oe.symbol})]}),Object(J.jsx)(O.lb,{small:!0,children:Ke[z.a.CURRENCY_A]||"-"})]}),Object(J.jsxs)(O.H,{justifyContent:"space-between",children:[Object(J.jsxs)(O.H,{children:[Object(J.jsx)(g.a,{currency:ve}),Object(J.jsx)(O.lb,{small:!0,color:"textSubtle",id:"remove-liquidity-tokenb-symbol",ml:"4px",children:null===ve||void 0===ve?void 0:ve.symbol})]}),Object(J.jsx)(O.lb,{small:!0,children:Ke[z.a.CURRENCY_B]||"-"})]}),pe&&(Ct||ht)?Object(J.jsx)(R.b,{style:{justifyContent:"flex-end",fontSize:"14px"},children:ht?Object(J.jsx)(S.a,{to:"/remove/".concat(Oe===j.d?j.n[pe].address:be,"/").concat(ve===j.d?j.n[pe].address:je),children:Ee("Receive WETH")}):Ct?Object(J.jsx)(S.a,{to:"/remove/".concat(Oe&&Object(j.o)(Oe,j.n[pe])?"ETH":be,"/").concat(ve&&Object(j.o)(ve,j.n[pe])?"ETH":je),children:Ee("Receive ETH")}):null}):null]})]})]}),De&&Object(J.jsxs)(O.i,{my:"16px",children:[Object(J.jsx)(C.a,{value:Ke[z.a.LIQUIDITY],onUserInput:st,onMax:function(){lt(z.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Xe,disableCurrencySelect:!0,currency:null===Ye||void 0===Ye?void 0:Ye.liquidityToken,pair:Ye,id:"liquidity-amount",onCurrencySelect:function(){return null}}),Object(J.jsx)(p.b,{children:Object(J.jsx)(O.c,{width:"24px",my:"16px"})}),Object(J.jsx)(C.a,{hideBalance:!0,value:Ke[z.a.CURRENCY_A],onUserInput:dt,onMax:function(){return lt(z.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Xe,currency:Oe,label:Ee("Output"),onCurrencySelect:ft,id:"remove-liquidity-tokena"}),Object(J.jsx)(p.b,{children:Object(J.jsx)(O.a,{width:"24px",my:"16px"})}),Object(J.jsx)(C.a,{hideBalance:!0,value:Ke[z.a.CURRENCY_B],onUserInput:ut,onMax:function(){return lt(z.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Xe,currency:ve,label:Ee("Output"),onCurrencySelect:yt,id:"remove-liquidity-tokenb"})]}),Ye&&Object(J.jsxs)(p.a,{gap:"10px",style:{marginTop:"16px"},children:[Object(J.jsx)(O.lb,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Ee("Prices")}),Object(J.jsxs)(I.c,{children:[Object(J.jsxs)(O.H,{justifyContent:"space-between",children:[Object(J.jsxs)(O.lb,{small:!0,color:"textSubtle",children:["1 ",null===Oe||void 0===Oe?void 0:Oe.symbol," ="]}),Object(J.jsxs)(O.lb,{small:!0,children:[ye?Ye.priceOf(ye).toSignificant(6):"-"," ",null===ve||void 0===ve?void 0:ve.symbol]})]}),Object(J.jsxs)(O.H,{justifyContent:"space-between",children:[Object(J.jsxs)(O.lb,{small:!0,color:"textSubtle",children:["1 ",null===ve||void 0===ve?void 0:ve.symbol," ="]}),Object(J.jsxs)(O.lb,{small:!0,children:[Re?Ye.priceOf(Re).toSignificant(6):"-"," ",null===Oe||void 0===Oe?void 0:Oe.symbol]})]})]})]}),Object(J.jsx)(O.i,{position:"relative",mt:"16px",children:me?Object(J.jsxs)(R.b,{children:[Object(J.jsx)(O.j,{variant:ct===D.a.APPROVED||null!==tt?"success":"primary",onClick:function(){return ot.apply(this,arguments)},disabled:ct!==D.a.NOT_APPROVED||null!==tt,width:"100%",mr:"0.5rem",children:ct===D.a.PENDING?Object(J.jsx)(L.a,{children:Ee("Enabling")}):ct===D.a.APPROVED||null!==tt?Ee("Enabled"):Ee("Enable")}),Object(J.jsx)(O.j,{variant:!ke&&Ne[z.a.CURRENCY_A]&&Ne[z.a.CURRENCY_B]?"danger":"primary",onClick:function(){wt()},width:"100%",disabled:!ke||null===tt&&ct!==D.a.APPROVED,children:_e||Ee("Remove")})]}):Object(J.jsx)(E.a,{})})]})]}),Ye?Object(J.jsx)(p.a,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:Object(J.jsx)(f.a,{showUnwrapped:Ct,pair:Ye})}):null]})}},807:function(e,t,n){"use strict";var i,a=n(6),c=n(76),r=n(4),o=Object(r.e)(c.a)(i||(i=Object(a.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=o}}]);
//# sourceMappingURL=6.b5454340.chunk.js.map