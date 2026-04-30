"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=s(function(f,n){
var u=require('@stdlib/math-base-special-expm1/dist'),v=require('@stdlib/math-base-special-log1p/dist'),x=require('@stdlib/math-base-special-abs/dist'),t=require('@stdlib/math-base-assert-is-nan/dist');function p(e,r){var i;return t(e)||t(r)?NaN:r===0?u(e):(i=r*e,x(i)<1e-154?e:u(v(i)/r))}n.exports=p
});var c=o();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
