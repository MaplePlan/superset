(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2087],{22087:(t,e,a)=>{var n=a(38724);n.prototype.formulaEval=function(){"use strict";for(var t,e,a,n=[],h=this.value,o=0;o<h.length;o++)1===h[o].type||3===h[o].type?n.push({value:3===h[o].type?h[o].show:h[o].value,type:1}):13===h[o].type?n.push({value:h[o].show,type:1}):0===h[o].type?n[n.length-1]={value:h[o].show+("-"!=h[o].show?"(":"")+n[n.length-1].value+("-"!=h[o].show?")":""),type:0}:7===h[o].type?n[n.length-1]={value:(1!=n[n.length-1].type?"(":"")+n[n.length-1].value+(1!=n[n.length-1].type?")":"")+h[o].show,type:7}:10===h[o].type?(t=n.pop(),e=n.pop(),"P"===h[o].show||"C"===h[o].show?n.push({value:"<sup>"+e.value+"</sup>"+h[o].show+"<sub>"+t.value+"</sub>",type:10}):n.push({value:(1!=e.type?"(":"")+e.value+(1!=e.type?")":"")+"<sup>"+t.value+"</sup>",type:1})):2===h[o].type||9===h[o].type?(t=n.pop(),e=n.pop(),n.push({value:(1!=e.type?"(":"")+e.value+(1!=e.type?")":"")+h[o].show+(1!=t.type?"(":"")+t.value+(1!=t.type?")":""),type:h[o].type})):12===h[o].type&&(t=n.pop(),e=n.pop(),a=n.pop(),n.push({value:h[o].show+"("+a.value+","+e.value+","+t.value+")",type:12}));return n[0].value},t.exports=n},17735:(t,e,a)=>{"use strict";var n=a(93553);function h(t,e){for(var a=0;a<t.length;a++)t[a]+=e;return t}var o=["sin","cos","tan","pi","(",")","P","C"," ","asin","acos","atan","7","8","9","int","cosh","acosh","ln","^","root","4","5","6","/","!","tanh","atanh","Mod","1","2","3","*","sinh","asinh","e","log","0",".","+","-",",","Sigma","n","Pi","pow"],p=["sin","cos","tan","&pi;","(",")","P","C"," ","asin","acos","atan","7","8","9","Int","cosh","acosh"," ln","^","root","4","5","6","&divide;","!","tanh","atanh"," Mod ","1","2","3","&times;","sinh","asinh","e"," log","0",".","+","-",",","&Sigma;","n","&Pi;","pow"],u=[n.math.sin,n.math.cos,n.math.tan,"PI","(",")",n.math.P,n.math.C," ".anchor,n.math.asin,n.math.acos,n.math.atan,"7","8","9",Math.floor,n.math.cosh,n.math.acosh,Math.log,Math.pow,Math.sqrt,"4","5","6",n.math.div,n.math.fact,n.math.tanh,n.math.atanh,n.math.mod,"1","2","3",n.math.mul,n.math.sinh,n.math.asinh,"E",n.math.log,"0",".",n.math.add,n.math.sub,",",n.math.sigma,"n",n.math.Pi,Math.pow],s={0:11,1:0,2:3,3:0,4:0,5:0,6:0,7:11,8:11,9:1,10:10,11:0,12:11,13:0,14:-1},r=[0,0,0,3,4,5,10,10,14,0,0,0,1,1,1,0,0,0,0,10,0,1,1,1,2,7,0,0,2,1,1,1,2,0,0,3,0,1,6,9,9,11,12,13,12,8],i={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,9:!0,12:!0,13:!0,14:!0},l={0:!0,1:!0,2:!0,3:!0,4:!0,5:!0,6:!0,7:!0,8:!0,9:!0,10:!0,11:!0,12:!0,13:!0},v={0:!0,3:!0,4:!0,8:!0,12:!0,13:!0},f={},c={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,12:!0,13:!0},y={1:!0},g=[[],["1","2","3","7","8","9","4","5","6","+","-","*","/","(",")","^","!","P","C","e","0",".",",","n"," "],["pi","ln","Pi"],["sin","cos","tan","Del","int","Mod","log","pow"],["asin","acos","atan","cosh","root","tanh","sinh"],["acosh","atanh","asinh","Sigma"]];function w(t,e,a,n){for(var h=0;h<n;h++)if(t[a+h]!==e[h])return!1;return!0}n.addToken=function(t){for(var e=0;e<t.length;e++){var a=t[e].token.length,n=-1;g[a]=g[a]||[];for(var h=0;h<g[a].length;h++)if(t[e].token===g[a][h]){n=o.indexOf(g[a][h]);break}-1===n?(o.push(t[e].token),r.push(t[e].type),g.length<=t[e].token.length&&(g[t[e].token.length]=[]),g[t[e].token.length].push(t[e].token),u.push(t[e].value),p.push(t[e].show)):(o[n]=t[e].token,r[n]=t[e].type,u[n]=t[e].value,p[n]=t[e].show)}},n.lex=function(t,e){var a,m={value:n.math.changeSign,type:0,pre:21,show:"-"},d={value:")",show:")",type:5,pre:0},M={value:"(",type:4,pre:0,show:"("},x=[M],E=[],P=t,k=i,b=0,C=f,D="";void 0!==e&&n.addToken(e);var I={},S=function(t){for(var e,a,h,i=[],l=t.length,v=0;v<l;v++)if(!(v<l-1&&" "===t[v]&&" "===t[v+1])){for(e="",a=t.length-v>g.length-2?g.length-1:t.length-v;a>0;a--)if(void 0!==g[a])for(h=0;h<g[a].length;h++)w(t,g[a][h],v,a)&&(e=g[a][h],h=g[a].length,a=0);if(v+=e.length-1,""===e)throw new n.Exception("Can't understand after "+t.slice(v));var f=o.indexOf(e);i.push({index:f,token:e,type:r[f],eval:u[f],precedence:s[r[f]],show:p[f]})}return i}(P);for(a=0;a<S.length;a++){var N=S[a];if(14!==N.type){var T,R=N.token,q=N.type,O=N.eval,F=N.precedence,U=N.show,W=x[x.length-1];for(T=E.length;T--&&0===E[T];)if(-1!==[0,2,3,4,5,9,11,12,13].indexOf(q)){if(!0!==k[q])throw new n.Exception(R+" is not allowed after "+D);x.push(d),k=l,C=c,h(E,-1).pop()}if(!0!==k[q])throw new n.Exception(R+" is not allowed after "+D);if(!0===C[q]&&(q=2,O=n.math.mul,U="&times;",F=3,a-=1),I={value:O,type:q,pre:F,show:U},0===q)k=i,C=f,h(E,2).push(2),x.push(I),x.push(M);else if(1===q)1===W.type?(W.value+=O,h(E,1)):x.push(I),k=l,C=v;else if(2===q)k=i,C=f,h(E,2),x.push(I);else if(3===q)x.push(I),k=l,C=c;else if(4===q)h(E,1),b++,k=i,C=f,x.push(I);else if(5===q){if(!b)throw new n.Exception("Closing parenthesis are more than opening one, wait What!!!");b--,k=l,C=c,x.push(I),h(E,1)}else if(6===q){if(W.hasDec)throw new n.Exception("Two decimals are not allowed in one number");1!==W.type&&(W={value:0,type:1,pre:0},x.push(W),h(E,-1)),k=y,h(E,1),C=f,W.value+=O,W.hasDec=!0}else 7===q&&(k=l,C=c,h(E,1),x.push(I));8===q?(k=i,C=f,h(E,4).push(4),x.push(I),x.push(M)):9===q?(9===W.type?W.value===n.math.add?(W.value=O,W.show=U,h(E,1)):W.value===n.math.sub&&"-"===U&&(W.value=n.math.add,W.show="+",h(E,1)):5!==W.type&&7!==W.type&&1!==W.type&&3!==W.type&&13!==W.type?"-"===R&&(k=i,C=f,h(E,2).push(2),x.push(m),x.push(M)):(x.push(I),h(E,2)),k=i,C=f):10===q?(k=i,C=f,h(E,2),x.push(I)):11===q?(k=i,C=f,x.push(I)):12===q?(k=i,C=f,h(E,6).push(6),x.push(I),x.push(M)):13===q&&(k=l,C=c,x.push(I)),h(E,-1),D=R}else if(a>0&&a<S.length-1&&1===S[a+1].type&&(1===S[a-1].type||6===S[a-1].type))throw new n.Exception("Unexpected Space")}for(T=E.length;T--&&0===E[T];)x.push(d),h(E,-1).pop();if(!0!==k[5])throw new n.Exception("complete the expression");for(;b--;)x.push(d);return x.push(d),new n(x)},t.exports=n},93553:t=>{"use strict";var e=function(t){this.value=t};e.math={isDegree:!0,acos:function(t){return e.math.isDegree?180/Math.PI*Math.acos(t):Math.acos(t)},add:function(t,e){return t+e},asin:function(t){return e.math.isDegree?180/Math.PI*Math.asin(t):Math.asin(t)},atan:function(t){return e.math.isDegree?180/Math.PI*Math.atan(t):Math.atan(t)},acosh:function(t){return Math.log(t+Math.sqrt(t*t-1))},asinh:function(t){return Math.log(t+Math.sqrt(t*t+1))},atanh:function(t){return Math.log((1+t)/(1-t))},C:function(t,a){var n=1,h=t-a,o=a;o<h&&(o=h,h=a);for(var p=o+1;p<=t;p++)n*=p;return n/e.math.fact(h)},changeSign:function(t){return-t},cos:function(t){return e.math.isDegree&&(t=e.math.toRadian(t)),Math.cos(t)},cosh:function(t){return(Math.pow(Math.E,t)+Math.pow(Math.E,-1*t))/2},div:function(t,e){return t/e},fact:function(t){if(t%1!=0)return"NaN";for(var e=1,a=2;a<=t;a++)e*=a;return e},inverse:function(t){return 1/t},log:function(t){return Math.log(t)/Math.log(10)},mod:function(t,e){return t%e},mul:function(t,e){return t*e},P:function(t,e){for(var a=1,n=Math.floor(t)-Math.floor(e)+1;n<=Math.floor(t);n++)a*=n;return a},Pi:function(t,e,a){for(var n=1,h=t;h<=e;h++)n*=Number(a.postfixEval({n:h}));return n},pow10x:function(t){for(var e=1;t--;)e*=10;return e},sigma:function(t,e,a){for(var n=0,h=t;h<=e;h++)n+=Number(a.postfixEval({n:h}));return n},sin:function(t){return e.math.isDegree&&(t=e.math.toRadian(t)),Math.sin(t)},sinh:function(t){return(Math.pow(Math.E,t)-Math.pow(Math.E,-1*t))/2},sub:function(t,e){return t-e},tan:function(t){return e.math.isDegree&&(t=e.math.toRadian(t)),Math.tan(t)},tanh:function(t){return e.sinha(t)/e.cosha(t)},toRadian:function(t){return t*Math.PI/180}},e.Exception=function(t){this.message=t},t.exports=e},27186:(t,e,a)=>{var n=a(17735);n.prototype.toPostfix=function(){"use strict";for(var t,e,a,h,o,p=[],u=[{value:"(",type:4,pre:0}],s=this.value,r=1;r<s.length;r++)if(1===s[r].type||3===s[r].type||13===s[r].type)1===s[r].type&&(s[r].value=Number(s[r].value)),p.push(s[r]);else if(4===s[r].type)u.push(s[r]);else if(5===s[r].type)for(;4!==(e=u.pop()).type;)p.push(e);else if(11===s[r].type){for(;4!==(e=u.pop()).type;)p.push(e);u.push(e)}else{h=(t=s[r]).pre,a=(o=u[u.length-1]).pre;var i="Math.pow"==o.value&&"Math.pow"==t.value;if(h>a)u.push(t);else{for(;a>=h&&!i||i&&h<a;)e=u.pop(),o=u[u.length-1],p.push(e),a=o.pre,i="Math.pow"==t.value&&"Math.pow"==o.value;u.push(t)}}return new n(p)},t.exports=n},38724:(t,e,a)=>{var n=a(27186);n.prototype.postfixEval=function(t){"use strict";(t=t||{}).PI=Math.PI,t.E=Math.E;for(var e,a,h,o=[],p=this.value,u=void 0!==t.n,s=0;s<p.length;s++)1===p[s].type?o.push({value:p[s].value,type:1}):3===p[s].type?o.push({value:t[p[s].value],type:1}):0===p[s].type||7===p[s].type?void 0===o[o.length-1].type?o[o.length-1].value.push(p[s]):o[o.length-1].value=p[s].value(o[o.length-1].value):8===p[s].type?(e=o.pop(),a=o.pop(),o.push({type:1,value:p[s].value(a.value,e.value)})):10===p[s].type?(e=o.pop(),void 0===(a=o.pop()).type?(a.value=a.concat(e),a.value.push(p[s]),o.push(a)):void 0===e.type?(e.unshift(a),e.push(p[s]),o.push(e)):o.push({type:1,value:p[s].value(a.value,e.value)})):2===p[s].type||9===p[s].type?(e=o.pop(),void 0===(a=o.pop()).type?((a=a.concat(e)).push(p[s]),o.push(a)):void 0===e.type?(e.unshift(a),e.push(p[s]),o.push(e)):o.push({type:1,value:p[s].value(a.value,e.value)})):12===p[s].type?(void 0!==(e=o.pop()).type&&(e=[e]),a=o.pop(),h=o.pop(),o.push({type:1,value:p[s].value(h.value,a.value,new n(e))})):13===p[s].type&&(u?o.push({value:t[p[s].value],type:3}):o.push([p[s]]));if(o.length>1)throw new n.Exception("Uncaught Syntax error");return o[0].value>1e15?"Infinity":parseFloat(o[0].value.toFixed(15))},n.eval=function(t,e,a){return void 0===e?this.lex(t).toPostfix().postfixEval():void 0===a?void 0!==e.length?this.lex(t,e).toPostfix().postfixEval():this.lex(t).toPostfix().postfixEval(e):this.lex(t,e).toPostfix().postfixEval(a)},t.exports=n}}]);
//# sourceMappingURL=2087.0825bb3829ec3f360a17.entry.js.map