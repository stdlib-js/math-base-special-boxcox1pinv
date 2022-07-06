// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var i=n&&"symbol"==typeof Symbol.toStringTag?function(r){var n,i,a,f,u;if(null==r)return t.call(r);i=r[o],u=o,n=null!=(f=r)&&e.call(f,u);try{r[o]=void 0}catch(n){return t.call(r)}return a=t.call(r),n?r[o]=i:delete r[o],a}:function(r){return t.call(r)},a="function"==typeof Uint32Array;var f="function"==typeof Uint32Array?Uint32Array:null;var u,y="function"==typeof Uint32Array?Uint32Array:void 0;u=function(){var r,n,t;if("function"!=typeof f)return!1;try{n=new f(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(a&&t instanceof Uint32Array||"[object Uint32Array]"===i(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?y:function(){throw new Error("not implemented")};var c=u,l="function"==typeof Float64Array;var v="function"==typeof Float64Array?Float64Array:null;var p,A="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,n,t;if("function"!=typeof v)return!1;try{n=new v([1,3.14,-3.14,NaN]),t=n,r=(l&&t instanceof Float64Array||"[object Float64Array]"===i(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?A:function(){throw new Error("not implemented")};var U=p,b="function"==typeof Uint8Array;var w="function"==typeof Uint8Array?Uint8Array:null;var m,N="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,n,t;if("function"!=typeof w)return!1;try{n=new w(n=[1,3.14,-3.14,256,257]),t=n,r=(b&&t instanceof Uint8Array||"[object Uint8Array]"===i(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?N:function(){throw new Error("not implemented")};var d=m,h="function"==typeof Uint16Array;var s="function"==typeof Uint16Array?Uint16Array:null;var F,I="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,n,t;if("function"!=typeof s)return!1;try{n=new s(n=[1,3.14,-3.14,65536,65537]),t=n,r=(h&&t instanceof Uint16Array||"[object Uint16Array]"===i(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var S,E={uint16:F,uint8:d};(S=new E.uint16(1))[0]=4660;var j=52===new E.uint8(S.buffer)[0],T=!0===j?1:0,g=new U(1),O=new c(g.buffer);function P(r){return g[0]=r,O[T]}var V=!0===j?1:0,Y=new U(1),_=new c(Y.buffer);function x(r,n){return Y[0]=r,_[V]=n>>>0,Y[0]}var G=Number.POSITIVE_INFINITY,M=Number.NEGATIVE_INFINITY;var k=.6931471803691238,q=1.9082149292705877e-10;function z(n){var t,e,o,i,a,f,u,y,c,l,v,p;if(n===G||r(n))return n;if(n===M)return-1;if(0===n)return n;if(n<0?(e=!0,u=-n):(e=!1,u=n),u>=38.816242111356935){if(e)return-1;if(u>=709.782712893384)return G}if(a=0|P(u),u>.34657359027997264)u<1.0397207708399179?e?(o=n+k,i=-q,p=-1):(o=n-k,i=q,p=1):(p=e?1.4426950408889634*n-.5:1.4426950408889634*n+.5,o=n-(l=p|=0)*k,i=l*q),c=o-(n=o-i)-i;else{if(a<1016070144)return n;p=0}return f=1+(y=n*(t=.5*n))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(y),v=y*((f-(l=3-f*t))/(6-n*l)),0===p?n-(n*v-y):(v=n*(v-c)-c,v-=y,-1===p?.5*(n-v)-.5:1===p?n<-.25?-2*(v-(n+.5)):1+2*(n-v):p<=-2||p>56?(u=x(u=1-(v-n),o=P(u)+(p<<20)|0))-1:(l=1,p<20?u=(l=x(l,o=1072693248-(2097152>>p)|0))-(v-n):(u=n-(v+(l=x(l,o=1023-p<<20|0))),u+=1),x(u,o=P(u)+(p<<20)|0)))}var B=.6931471803691238,C=1.9082149292705877e-10;function D(n,t){var e,o;return r(n)||r(t)?NaN:0===t?z(n):(o=e=t*n,Math.abs(o)<1e-154?n:z(function(n){var t,e,o,i,a,f,u,y,c,l;if(n<-1||r(n))return NaN;if(-1===n)return M;if(n===G)return n;if(0===n)return n;if(l=1,(o=n<0?-n:n)<.41421356237309503){if(o<1.862645149230957e-9)return o<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(l=0,i=n,e=1)}return 0!==l&&(o<9007199254740992?(a=(l=((e=P(c=1+n))>>20)-1023)>0?1-(c-n):n-(c-1),a/=c):(l=((e=P(c=n))>>20)-1023,a=0),(e&=1048575)<434334?c=x(c,1072693248|e):(l+=1,c=x(c,1071644672|e),e=1048576-e>>2),i=c-1),t=.5*i*i,0===e?0===i?l*B+(a+=l*C):l*B-((y=t*(1-.6666666666666666*i))-(l*C+a)-i):(y=(u=(f=i/(2+i))*f)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?i-(t-f*(t+y)):l*B-(t-(f*(t+y)+(l*C+a))-i))}(e)/t))}export{D as default};
//# sourceMappingURL=mod.js.map
