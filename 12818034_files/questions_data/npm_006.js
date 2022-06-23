(self.webpackChunk=self.webpackChunk||[]).push([[3322],{38240:function(t,r,o){const e=o(34957),n=o(74570),l=[].slice,s=["keyword","gray","hex"],h={};for(const t of Object.keys(n))h[l.call(n[t].labels).sort().join("")]=t;const i={};function a(t,r){if(!(this instanceof a))return new a(t,r);if(r&&r in s&&(r=null),r&&!(r in n))throw new Error("Unknown model: "+r);let o,c;if(null==t)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(t instanceof a)this.model=t.model,this.color=t.color.slice(),this.valpha=t.valpha;else if("string"==typeof t){const r=e.get(t);if(null===r)throw new Error("Unable to parse color from string: "+t);this.model=r.model,c=n[this.model].channels,this.color=r.value.slice(0,c),this.valpha="number"==typeof r.value[c]?r.value[c]:1}else if(t.length>0){this.model=r||"rgb",c=n[this.model].channels;const o=l.call(t,0,c);this.color=b(o,c),this.valpha="number"==typeof t[c]?t[c]:1}else if("number"==typeof t)this.model="rgb",this.color=[t>>16&255,t>>8&255,255&t],this.valpha=1;else{this.valpha=1;const r=Object.keys(t);"alpha"in t&&(r.splice(r.indexOf("alpha"),1),this.valpha="number"==typeof t.alpha?t.alpha:0);const e=r.sort().join("");if(!(e in h))throw new Error("Unable to parse color from object: "+JSON.stringify(t));this.model=h[e];const l=n[this.model].labels,s=[];for(o=0;o<l.length;o++)s.push(t[l[o]]);this.color=b(s)}if(i[this.model])for(c=n[this.model].channels,o=0;o<c;o++){const t=i[this.model][o];t&&(this.color[o]=t(this.color[o]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}a.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(t){let r=this.model in e.to?this:this.rgb();r=r.round("number"==typeof t?t:1);const o=1===r.valpha?r.color:r.color.concat(this.valpha);return e.to[r.model](o)},percentString(t){const r=this.rgb().round("number"==typeof t?t:1),o=1===r.valpha?r.color:r.color.concat(this.valpha);return e.to.rgb.percent(o)},array(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object(){const t={},r=n[this.model].channels,o=n[this.model].labels;for(let e=0;e<r;e++)t[o[e]]=this.color[e];return 1!==this.valpha&&(t.alpha=this.valpha),t},unitArray(){const t=this.rgb().color;return t[0]/=255,t[1]/=255,t[2]/=255,1!==this.valpha&&t.push(this.valpha),t},unitObject(){const t=this.rgb().object();return t.r/=255,t.g/=255,t.b/=255,1!==this.valpha&&(t.alpha=this.valpha),t},round(t){return t=Math.max(t||0,0),new a(this.color.map(function(t){return function(r){return function(t,r){return Number(t.toFixed(r))}(r,t)}}(t)).concat(this.valpha),this.model)},alpha(t){return arguments.length>0?new a(this.color.concat(Math.max(0,Math.min(1,t))),this.model):this.valpha},red:c("rgb",0,u(255)),green:c("rgb",1,u(255)),blue:c("rgb",2,u(255)),hue:c(["hsl","hsv","hsl","hwb","hcg"],0,(t=>(t%360+360)%360)),saturationl:c("hsl",1,u(100)),lightness:c("hsl",2,u(100)),saturationv:c("hsv",1,u(100)),value:c("hsv",2,u(100)),chroma:c("hcg",1,u(100)),gray:c("hcg",2,u(100)),white:c("hwb",1,u(100)),wblack:c("hwb",2,u(100)),cyan:c("cmyk",0,u(100)),magenta:c("cmyk",1,u(100)),yellow:c("cmyk",2,u(100)),black:c("cmyk",3,u(100)),x:c("xyz",0,u(100)),y:c("xyz",1,u(100)),z:c("xyz",2,u(100)),l:c("lab",0,u(100)),a:c("lab",1),b:c("lab",2),keyword(t){return arguments.length>0?new a(t):n[this.model].keyword(this.color)},hex(t){return arguments.length>0?new a(t):e.to.hex(this.rgb().round().color)},hexa(t){if(arguments.length>0)return new a(t);const r=this.rgb().round().color;let o=Math.round(255*this.valpha).toString(16).toUpperCase();return 1===o.length&&(o="0"+o),e.to.hex(r)+o},rgbNumber(){const t=this.rgb().color;return(255&t[0])<<16|(255&t[1])<<8|255&t[2]},luminosity(){const t=this.rgb().color,r=[];for(const[o,e]of t.entries()){const t=e/255;r[o]=t<=.03928?t/12.92:((t+.055)/1.055)**2.4}return.2126*r[0]+.7152*r[1]+.0722*r[2]},contrast(t){const r=this.luminosity(),o=t.luminosity();return r>o?(r+.05)/(o+.05):(o+.05)/(r+.05)},level(t){const r=this.contrast(t);return r>=7.1?"AAA":r>=4.5?"AA":""},isDark(){const t=this.rgb().color;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},isLight(){return!this.isDark()},negate(){const t=this.rgb();for(let r=0;r<3;r++)t.color[r]=255-t.color[r];return t},lighten(t){const r=this.hsl();return r.color[2]+=r.color[2]*t,r},darken(t){const r=this.hsl();return r.color[2]-=r.color[2]*t,r},saturate(t){const r=this.hsl();return r.color[1]+=r.color[1]*t,r},desaturate(t){const r=this.hsl();return r.color[1]-=r.color[1]*t,r},whiten(t){const r=this.hwb();return r.color[1]+=r.color[1]*t,r},blacken(t){const r=this.hwb();return r.color[2]+=r.color[2]*t,r},grayscale(){const t=this.rgb().color,r=.3*t[0]+.59*t[1]+.11*t[2];return a.rgb(r,r,r)},fade(t){return this.alpha(this.valpha-this.valpha*t)},opaquer(t){return this.alpha(this.valpha+this.valpha*t)},rotate(t){const r=this.hsl();let o=r.color[0];return o=(o+t)%360,o=o<0?360+o:o,r.color[0]=o,r},mix(t,r){if(!t||!t.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof t);const o=t.rgb(),e=this.rgb(),n=void 0===r?.5:r,l=2*n-1,s=o.alpha()-e.alpha(),h=((l*s==-1?l:(l+s)/(1+l*s))+1)/2,i=1-h;return a.rgb(h*o.red()+i*e.red(),h*o.green()+i*e.green(),h*o.blue()+i*e.blue(),o.alpha()*n+e.alpha()*(1-n))}};for(const t of Object.keys(n)){if(s.includes(t))continue;const r=n[t].channels;a.prototype[t]=function(){if(this.model===t)return new a(this);if(arguments.length>0)return new a(arguments,t);const o="number"==typeof arguments[r]?r:this.valpha;return new a(p(n[this.model][t].raw(this.color)).concat(o),t)},a[t]=function(o){return"number"==typeof o&&(o=b(l.call(arguments),r)),new a(o,t)}}function c(t,r,o){t=Array.isArray(t)?t:[t];for(const e of t)(i[e]||(i[e]=[]))[r]=o;return t=t[0],function(e){let n;return arguments.length>0?(o&&(e=o(e)),n=this[t](),n.color[r]=e,n):(n=this[t]().color[r],o&&(n=o(n)),n)}}function u(t){return function(r){return Math.max(0,Math.min(t,r))}}function p(t){return Array.isArray(t)?t:[t]}function b(t,r){for(let o=0;o<r;o++)"number"!=typeof t[o]&&(t[o]=0);return t}t.exports=a}}]);
//# sourceMappingURL=npm.color.3159001dd47d75192917.bundle.js.map