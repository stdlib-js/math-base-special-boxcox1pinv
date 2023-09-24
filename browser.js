// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,o=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,f="function"==typeof i?i.toStringTag:"",u=r&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,i,u,a;if(null==n)return e.call(n);r=n[f],a=f,t=null!=(u=n)&&o.call(u,a);try{n[f]=void 0}catch(t){return e.call(n)}return i=e.call(n),t?n[f]=r:delete n[f],i}:function(n){return e.call(n)},a="function"==typeof Uint32Array,y="function"==typeof Uint32Array?Uint32Array:null,c="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var n,t,r;if("function"!=typeof y)return!1;try{t=new y(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(a&&r instanceof Uint32Array||"[object Uint32Array]"===u(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?c:function(){throw new Error("not implemented")};var l,p=t,A="function"==typeof Float64Array,v="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;l=function(){var n,t,r;if("function"!=typeof v)return!1;try{t=new v([1,3.14,-3.14,NaN]),r=t,n=(A&&r instanceof Float64Array||"[object Float64Array]"===u(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?b:function(){throw new Error("not implemented")};var d,w=l,U="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,s="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var n,t,r;if("function"!=typeof m)return!1;try{t=new m(t=[1,3.14,-3.14,256,257]),r=t,n=(U&&r instanceof Uint8Array||"[object Uint8Array]"===u(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?s:function(){throw new Error("not implemented")};var h,N=d,I="function"==typeof Uint16Array,F="function"==typeof Uint16Array?Uint16Array:null,S="function"==typeof Uint16Array?Uint16Array:void 0;h=function(){var n,t,r;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,65536,65537]),r=t,n=(I&&r instanceof Uint16Array||"[object Uint16Array]"===u(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?S:function(){throw new Error("not implemented")};var T,g={uint16:h,uint8:N};(T=new g.uint16(1))[0]=4660;var j=52===new g.uint8(T.buffer)[0],E=!0===j?1:0,O=new w(1),x=new p(O.buffer);function H(n){return O[0]=n,x[E]}var G,L,P=!0===j?1:0,V=new w(1),W=new p(V.buffer);function Y(n,t){return V[0]=n,W[P]=t>>>0,V[0]}!0===j?(G=1,L=0):(G=0,L=1);var _={HIGH:G,LOW:L},M=new w(1),k=new p(M.buffer),q=_.HIGH,z=_.LOW,B=Number.POSITIVE_INFINITY,C=Number.NEGATIVE_INFINITY,D=1023,J=.6931471803691238,K=1.9082149292705877e-10,Q=1.4426950408889634;function R(t){var r,e,o,i,f,u,a,y,c,l,p,A,v,b,d;if(t===B||n(t))return t;if(t===C)return-1;if(0===t)return t;if(t<0?(o=!0,y=-t):(o=!1,y=t),y>=38.816242111356935){if(o)return-1;if(y>=709.782712893384)return B}if(u=0|H(y),y>.34657359027997264)y<1.0397207708399179?o?(i=t+J,f=-K,v=-1):(i=t-J,f=K,v=1):(v=o?Q*t-.5:Q*t+.5,i=t-(p=v|=0)*J,f=p*K),l=i-(t=i-f)-f;else{if(u<1016070144)return t;v=0}return a=1+(c=t*(r=.5*t))*function(n){return 0===n?-.03333333333333313:n*(.0015873015872548146+n*(n*(4008217827329362e-21+-2.0109921818362437e-7*n)-793650757867488e-19))-.03333333333333313}(c),A=c*((a-(p=3-a*r))/(6-t*p)),0===v?t-(t*A-c):(b=D+v<<20,d=0,k[q]=b,k[z]=d,e=M[0],A=t*(A-l)-l,A-=c,-1===v?.5*(t-A)-.5:1===v?t<-.25?-2*(A-(t+.5)):1+2*(t-A):v<=-2||v>56?(y=1-(A-t),1024===v?y=Y(y,i=H(y)+(v<<20)|0):y*=e,y-1):(p=1,v<20?y=(p=Y(p,i=1072693248-(2097152>>v)|0))-(A-t):(y=t-(A+(p=Y(p,i=D-v<<20|0))),y+=1),y*=e))}var X=.6931471803691238,Z=1.9082149292705877e-10;return function(t,r){var e,o;return n(t)||n(r)?NaN:0===r?R(t):(o=e=r*t,Math.abs(o)<1e-154?t:R(function(t){var r,e,o,i,f,u,a,y,c,l;if(t<-1||n(t))return NaN;if(-1===t)return C;if(t===B)return t;if(0===t)return t;if(l=1,(o=t<0?-t:t)<.41421356237309503){if(o<1.862645149230957e-9)return o<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(l=0,i=t,e=1)}return 0!==l&&(o<9007199254740992?(f=(l=((e=H(c=1+t))>>20)-D)>0?1-(c-t):t-(c-1),f/=c):(l=((e=H(c=t))>>20)-D,f=0),(e&=1048575)<434334?c=Y(c,1072693248|e):(l+=1,c=Y(c,1071644672|e),e=1048576-e>>2),i=c-1),r=.5*i*i,0===e?0===i?l*X+(f+=l*Z):l*X-((y=r*(1-.6666666666666666*i))-(l*Z+f)-i):(y=(a=(u=i/(2+i))*u)*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))}(a),0===l?i-(r-u*(r+y)):l*X-(r-(u*(r+y)+(l*Z+f))-i))}(e)/r))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).boxcox1pinv=t();
//# sourceMappingURL=browser.js.map
