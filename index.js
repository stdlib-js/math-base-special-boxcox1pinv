// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t=function(n){return n!=n},r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,o=e,i=function(n){return o.call(n)},f=Object.prototype.hasOwnProperty,u=function(n,t){return null!=n&&f.call(n,t)},c="function"==typeof Symbol?Symbol.toStringTag:"",a=u,y=c,l=e,p=i,A=function(n){var t,r,e;if(null==n)return l.call(n);r=n[y],t=a(n,y);try{n[y]=void 0}catch(t){return l.call(n)}return e=l.call(n),t?n[y]=r:delete n[y],e},b=r&&"symbol"==typeof Symbol.toStringTag?A:p,U=b,d="function"==typeof Uint32Array,m="function"==typeof Uint32Array?Uint32Array:null,w=function(n){return d&&n instanceof Uint32Array||"[object Uint32Array]"===U(n)},s=m,v=function(){var n,t;if("function"!=typeof s)return!1;try{t=new s(t=[1,3.14,-3.14,4294967296,4294967297]),n=w(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},h="function"==typeof Uint32Array?Uint32Array:void 0,N=function(){throw new Error("not implemented")},F=v()?h:N,I=b,S="function"==typeof Float64Array,T="function"==typeof Float64Array?Float64Array:null,g=function(n){return S&&n instanceof Float64Array||"[object Float64Array]"===I(n)},j=T,E=function(){var n,t;if("function"!=typeof j)return!1;try{t=new j([1,3.14,-3.14,NaN]),n=g(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n},x="function"==typeof Float64Array?Float64Array:void 0,O=function(){throw new Error("not implemented")},P=E()?x:O,V=b,Y="function"==typeof Uint8Array,_="function"==typeof Uint8Array?Uint8Array:null,G=function(n){return Y&&n instanceof Uint8Array||"[object Uint8Array]"===V(n)},M=_,k=function(){var n,t;if("function"!=typeof M)return!1;try{t=new M(t=[1,3.14,-3.14,256,257]),n=G(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},q="function"==typeof Uint8Array?Uint8Array:void 0,z=function(){throw new Error("not implemented")},B=k()?q:z,C=b,D="function"==typeof Uint16Array,H="function"==typeof Uint16Array?Uint16Array:null,J=function(n){return D&&n instanceof Uint16Array||"[object Uint16Array]"===C(n)},K=H,L=function(){var n,t;if("function"!=typeof K)return!1;try{t=new K(t=[1,3.14,-3.14,65536,65537]),n=J(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},Q="function"==typeof Uint16Array?Uint16Array:void 0,R=function(){throw new Error("not implemented")},W={uint16:L()?Q:R,uint8:B};(n=new W.uint16(1))[0]=4660;var X=52===new W.uint8(n.buffer)[0],Z=F,$=!0===X?1:0,nn=new P(1),tn=new Z(nn.buffer),rn=function(n){return nn[0]=n,tn[$]},en=F,on=!0===X?1:0,fn=new P(1),un=new en(fn.buffer),cn=function(n,t){return fn[0]=n,un[on]=t>>>0,fn[0]},an=cn,yn=Number.POSITIVE_INFINITY,ln=Number.NEGATIVE_INFINITY,pn=t,An=rn,bn=an,Un=yn,dn=ln,mn=function(n){return 0===n?-.03333333333333313:n*(.0015873015872548146+n*(n*(4008217827329362e-21+-2.0109921818362437e-7*n)-793650757867488e-19))-.03333333333333313},wn=.6931471803691238,sn=1.9082149292705877e-10,vn=1.4426950408889634,hn=function(n){var t,r,e,o,i,f,u,c,a,y,l,p;if(n===Un||pn(n))return n;if(n===dn)return-1;if(0===n)return n;if(n<0?(r=!0,u=-n):(r=!1,u=n),u>=38.816242111356935){if(r)return-1;if(u>=709.782712893384)return Un}if(i=0|An(u),u>.34657359027997264)u<1.0397207708399179?r?(e=n+wn,o=-sn,p=-1):(e=n-wn,o=sn,p=1):(p=r?vn*n-.5:vn*n+.5,e=n-(y=p|=0)*wn,o=y*sn),a=e-(n=e-o)-o;else{if(i<1016070144)return n;p=0}return l=(c=n*(t=.5*n))*(((f=1+c*mn(c))-(y=3-f*t))/(6-n*y)),0===p?n-(n*l-c):(l=n*(l-a)-a,l-=c,-1===p?.5*(n-l)-.5:1===p?n<-.25?-2*(l-(n+.5)):1+2*(n-l):p<=-2||p>56?(e=An(u=1-(l-n))+(p<<20)|0,(u=bn(u,e))-1):(y=1,p<20?u=(y=bn(y,e=1072693248-(2097152>>p)|0))-(l-n):(u=n-(l+(y=bn(y,e=1023-p<<20|0))),u+=1),e=An(u)+(p<<20)|0,bn(u,e)))},Nn=t,Fn=rn,In=an,Sn=yn,Tn=ln,gn=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))},jn=.6931471803691238,En=1.9082149292705877e-10,xn=function(n){var t,r,e,o,i,f,u,c,a,y;if(n<-1||Nn(n))return NaN;if(-1===n)return Tn;if(n===Sn)return n;if(0===n)return n;if(y=1,(e=n<0?-n:n)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(y=0,o=n,r=1)}return 0!==y&&(e<9007199254740992?(i=(y=((r=Fn(a=1+n))>>20)-1023)>0?1-(a-n):n-(a-1),i/=a):(y=((r=Fn(a=n))>>20)-1023,i=0),(r&=1048575)<434334?a=In(a,1072693248|r):(y+=1,a=In(a,1071644672|r),r=1048576-r>>2),o=a-1),t=.5*o*o,0===r?0===o?y*jn+(i+=y*En):y*jn-((c=t*(1-.6666666666666666*o))-(y*En+i)-o):(c=(u=(f=o/(2+o))*f)*gn(u),0===y?o-(t-f*(t+c)):y*jn-(t-(f*(t+c)+(y*En+i))-o))},On=function(n){return Math.abs(n)};return function(n,r){var e;return t(n)||t(r)?NaN:0===r?hn(n):On(e=r*n)<1e-154?n:hn(xn(e)/r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).boxcox1pinv=t();
//# sourceMappingURL=index.js.map
