/*! For license information please see lib.le_js.js.3afb994e0e908456f372.bundle.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[3144],{32701:function(e,n,t){var r,o;o=this,r=function(){return function(e){"use strict";var n=function(e,n){for(var t=0;t<e.length;t++)if(n===e[t])return t;return-1};function t(t){var r,o=t.trace?(Math.random()+Math.PI).toString(36).substring(2,10):null,i=t.page_info,a=t.token,s=t.print,l=t.no_format,u="undefined"==typeof XDomainRequest?t.ssl:"https:"===e.location.protocol;r=(u?"https://":"http://")+(r=e.LEENDPOINT?e.LEENDPOINT:l?"webhook.logentries.com/noformat":"js.logentries.com/v1")+"/logs/"+a;var f=[],c=!1,p=!1;if(t.catchall){var h=e.onerror;e.onerror=function(e,n,t){return w({error:e,line:t,location:n}).level("ERROR").send(),!!h&&h(e,n,t)}}var d=function(){var n=e.navigator||{doNotTrack:void 0},t=e.screen||{};return{url:(e.location||{}).pathname,referrer:document.referrer,screen:{width:t.width,height:t.height},window:{width:e.innerWidth,height:e.innerHeight},browser:{name:n.appName,version:n.appVersion,cookie_enabled:n.cookieEnabled,do_not_track:n.doNotTrack},platform:n.platform}},v=function(){var e=Array.prototype.slice.call(arguments);if(0===e.length)throw new Error("No arguments!");return 1===e.length?e[0]:e},w=function(e){var t=v.apply(this,arguments),r={event:t};return"never"!==i&&(p&&"per-entry"!==i||(p=!0,void 0===t.screen&&void 0===t.browser&&w(d()).level("PAGE").send())),o&&(r.trace=o),{level:function(e){if(s&&"undefined"!=typeof console&&"PAGE"!==e){var t=null;"undefined"!=typeof XDomainRequest&&(t=r.trace+" "+r.event);try{console[e.toLowerCase()].call(console,t||r)}catch(e){console.log(t||r)}}return r.level=e,{send:function(){var e=[],t=JSON.stringify(r,(function(t,r){if(void 0===r)return"undefined";if("object"==typeof r&&null!==r){if(-1!==n(e,r))return"<?>";e.push(r)}return r}));c?f.push(t):g(a,t)}}}}};this.log=w;var g=function(e,n){c=!0;var t="undefined"!=typeof XDomainRequest?new XDomainRequest:new XMLHttpRequest;t.constructor===XMLHttpRequest?t.onreadystatechange=function(){4===t.readyState&&(t.status>=400?(console.error("Couldn't submit events."),410===t.status&&console.warn("This version of le_js is no longer supported!")):(301===t.status&&console.warn("This version of le_js is deprecated! Consider upgrading."),f.length>0?g(e,f.shift()):c=!1))}:t.onload=function(){f.length>0?g(e,f.shift()):c=!1},t.open("POST",r,!0),t.constructor===XMLHttpRequest&&(t.setRequestHeader("X-Requested-With","XMLHttpRequest"),t.setRequestHeader("Content-type","application/json")),t.overrideMimeType&&t.overrideMimeType("text"),t.send(n)}}function r(e){var n,r={ssl:!0,catchall:!1,trace:!0,page_info:"never",print:!1,endpoint:null,token:null};if("object"!=typeof e)throw new Error("Invalid parameters for createLogStream()");for(var o in e)r[o]=e[o];if(null===r.token)throw new Error("Token not present.");n=new t(r);var i=function(e){if(n)return n.log.apply(this,arguments);throw new Error("You must call LE.init(...) first.")};return{log:function(){i.apply(this,arguments).level("LOG").send()},warn:function(){i.apply(this,arguments).level("WARN").send()},error:function(){i.apply(this,arguments).level("ERROR").send()},info:function(){i.apply(this,arguments).level("INFO").send()}}}var o={},i=function(e){if("string"!=typeof e.name)throw new Error("Name not present.");if(o.hasOwnProperty(e.name))throw new Error("A logger with that name already exists!");return o[e.name]=new r(e),!0};return{init:function(e){var n={name:"default"};if("object"==typeof e)for(var t in e)n[t]=e[t];else{if("string"!=typeof e)throw new Error("Invalid parameters for init()");n.token=e}return i(n)},createLogStream:i,to:function(e){if(!o.hasOwnProperty(e))throw new Error("Invalid name for logStream");return o[e]},destroy:function(e){void 0===e&&(e="default"),delete o[e]},log:function(){for(var e in o)o[e].log.apply(this,arguments)},warn:function(){for(var e in o)o[e].warn.apply(this,arguments)},error:function(){for(var e in o)o[e].error.apply(this,arguments)},info:function(){for(var e in o)o[e].info.apply(this,arguments)}}}(o)}.call(n,t,n,e),void 0===r||(e.exports=r)}}]);
//# sourceMappingURL=lib.le_js.js.3afb994e0e908456f372.bundle.js.map