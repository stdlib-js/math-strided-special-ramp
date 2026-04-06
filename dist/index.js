"use strict";var i=function(t,a){return function(){return a||t((a={exports:{}}).exports,a),a.exports}};var n=i(function(rr,C){C.exports={nargs:7,nin:1,nout:1}});var s=i(function(er,D){D.exports=[12,12,12,17,11,11,11,12,11,17,17,17,6,6,6,7,6,12,6,17,4,4,4,6,4,5,4,7,4,11,4,12,4,17,1,1,1,4,1,6,1,2,1,3,1,5,1,7,1,11,1,12,1,17,7,7,7,12,7,17,5,6,5,5,5,7,5,11,5,12,5,17,2,4,2,6,2,2,2,3,2,5,2,7,2,11,2,12,2,17,3,4,3,6,3,2,3,3,3,5,3,7,3,11,3,12,3,17]});var m=i(function(ar,x){
var e=require('@stdlib/math-base-special-ramp/dist'),y=require('@stdlib/math-base-special-rampf/dist'),r=require('@stdlib/number-float64-base-identity/dist'),F=[e,e,y,y,y,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r];x.exports=F
});var h=i(function(ir,g){
var G=require('@stdlib/strided-dispatch/dist'),H=require('@stdlib/strided-base-unary/dist'),j=require('@stdlib/strided-base-dtype-resolve-enum/dist'),I=s(),f=n(),J=m(),K=G(H,I,J,f.nargs,f.nin,f.nout);function L(t,a,q,o,p,c,d){return K(t,j(a),q,o,j(p),c,d)}g.exports=L
});var E=i(function(tr,_){
var M=require('@stdlib/strided-dispatch/dist'),N=require('@stdlib/strided-base-unary/dist').ndarray,R=require('@stdlib/strided-base-dtype-resolve-enum/dist'),Q=s(),u=n(),S=m(),T=M(N,Q,S,u.nargs+u.nin+u.nout,u.nin,u.nout);function U(t,a,q,o,p,c,d,A,B){return T(t,R(a),q,o,p,R(c),d,A,B)}_.exports=U
});var w=i(function(ur,k){
var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=require('@stdlib/strided-base-meta-data-props/dist'),P=n(),b=s(),v=h(),W=E();V(v,"ndarray",W);O(P,b,v,!1);O(P,b,v.ndarray,!0);k.exports=v
});var X=require("path").join,Y=require('@stdlib/utils-try-require/dist'),Z=w(),l,z=Y(X(__dirname,"./native.js"));z instanceof Error?l=Z:l=z;module.exports=l;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
