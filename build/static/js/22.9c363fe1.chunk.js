"use strict";(self.webpackChunkbiorhythm_calculator=self.webpackChunkbiorhythm_calculator||[]).push([[22],{5022:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return u}});var r=n(1811),i=n(9507),a=n(7909),u=function(t,e,n,u,c){var o=t.ownerDocument.defaultView,h=(0,i.i)(t),f=function(t){return h?-t.deltaX:t.deltaX};return(0,a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return function(t){var e=t.startX;return h?e>=o.innerWidth-50:e<=50}(t)&&e()},onStart:n,onMove:function(t){var e=f(t)/o.innerWidth;u(e)},onEnd:function(t){var e=f(t),n=o.innerWidth,i=e/n,a=function(t){return h?-t.velocityX:t.velocityX}(t),u=a>=0&&(a>.2||e>n/2),l=(u?1-i:i)*n,s=0;if(l>5){var d=l/Math.abs(a);s=Math.min(d,540)}c(u,i<=0?.01:(0,r.h)(0,i,.9999),s)}})}}}]);
//# sourceMappingURL=22.9c363fe1.chunk.js.map