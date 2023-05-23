/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={247:(t,r,n)=>{"use strict";n.d(r,{Z:()=>c});var e=n(81),o=n.n(e),a=n(645),i=n.n(a)()(o());i.push([t.id,'body {\r\n    background-image: url("https://img.freepik.com/free-vector/flat-comic-style-background_23-2148807429.jpg?w=740&t=st=1680794000~exp=1680794600~hmac=a17e4caa03ffa702c865f325929a3cf525a2313f65e191805510f6eaa10a4758");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n  }\r\n  \r\n  * {\r\n    box-sizing: border-box;\r\n    font-family: Arial, sans-serif;\r\n  }\r\n  \r\n  body {\r\n    background-color: #f7f7f7;\r\n  }\r\n  \r\n  .container {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    margin-top: 30px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n  }\r\n  \r\n  h1 {\r\n    font-size: 48px;\r\n    margin-top: 50px;\r\n    color: #333;\r\n    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);\r\n  }\r\n  \r\n  #search-box {\r\n    padding: 15px;\r\n    margin-top: 50px;\r\n    font-size: 24px;\r\n    border-radius: 50px;\r\n    border: none;\r\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\r\n    width: 70%;\r\n  }\r\n  \r\n  #search-btn {\r\n    padding: 15px 30px;\r\n    margin-top: 20px;\r\n    font-size: 24px;\r\n    border-radius: 50px;\r\n    border: none;\r\n    background-color: #f5a623;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\r\n    transition: background-color 0.3s ease-in-out;\r\n    width: 25%;\r\n    margin-left: 1%;\r\n  }\r\n  \r\n  #search-btn:hover {\r\n    background-color: #ffbf47;\r\n  }\r\n  \r\n  #result {\r\n    margin-top: 50px;\r\n  }\r\n  \r\n  img {\r\n    max-width: 100%;\r\n    height: auto;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n    width: 400px; \r\n  }\r\n  \r\n  img:hover {\r\n    transform: scale(1.1); \r\n    transition: transform 0.3s ease-in-out; \r\n  }\r\n  \r\n  h2 {\r\n    font-size: 36px;\r\n    margin-top: 20px;\r\n    color: #f5a623;\r\n    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);\r\n  }\r\n  \r\n  p {\r\n    font-size: 24px;\r\n    margin: 10px 0;\r\n    color: #333;\r\n  }\r\n  \r\n  ul {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n  }\r\n  \r\n  li {\r\n    font-size: 20px;\r\n    margin: 10px 0;\r\n    color: #333;\r\n  }\r\n  \r\n  li:before {\r\n    content: "• ";\r\n    color: #f5a623;\r\n    font-weight: bold;\r\n  }\r\n  ',""]);const c=i},645:t=>{"use strict";t.exports=function(t){var r=[];return r.toString=function(){return this.map((function(r){var n="",e=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),e&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=t(r),e&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(t,n,e,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(e)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);e&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var r=[];function n(t){for(var n=-1,e=0;e<r.length;e++)if(r[e].identifier===t){n=e;break}return n}function e(t,e){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],u=e.base?s[0]+e.base:s[0],l=a[u]||0,f="".concat(u," ").concat(l);a[u]=l+1;var p=n(f),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)r[p].references++,r[p].updater(d);else{var h=o(d,e);e.byIndex=c,r.splice(c,0,{identifier:f,updater:h,references:1})}i.push(f)}return i}function o(t,r){var n=r.domAPI(r);return n.update(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap&&r.supports===t.supports&&r.layer===t.layer)return;n.update(t=r)}else n.remove()}}t.exports=function(t,o){var a=e(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);r[c].references--}for(var s=e(t,o),u=0;u<a.length;u++){var l=n(a[u]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=s}}},569:t=>{"use strict";var r={};t.exports=function(t,n){var e=function(t){if(void 0===r[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}r[t]=n}return r[t]}(t);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var r=document.createElement("style");return t.setAttributes(r,t.attributes),t.insert(r,t.options),r}},565:(t,r,n)=>{"use strict";t.exports=function(t){var r=n.nc;r&&t.setAttribute("nonce",r)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=t.insertStyleElement(t);return{update:function(n){!function(t,r,n){var e="";n.supports&&(e+="@supports (".concat(n.supports,") {")),n.media&&(e+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(e+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),e+=n.css,o&&(e+="}"),n.media&&(e+="}"),n.supports&&(e+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(e,t,r.options)}(r,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)}}}},589:t=>{"use strict";t.exports=function(t,r){if(r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={id:e,exports:{}};return t[e](a,a.exports,n),a.exports}n.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return n.d(r,{a:r}),r},n.d=(t,r)=>{for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},n.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),n.nc=void 0,(()=>{function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(){"use strict";r=function(){return n};var n={},e=Object.prototype,o=e.hasOwnProperty,a=Object.defineProperty||function(t,r,n){t[r]=n.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,n){return t[r]=n}}function f(t,r,n,e){var o=r&&r.prototype instanceof h?r:h,i=Object.create(o.prototype),c=new _(e||[]);return a(i,"_invoke",{value:k(t,n,c)}),i}function p(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var d={};function h(){}function v(){}function m(){}var y={};l(y,c,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(O([])));x&&x!==e&&o.call(x,c)&&(y=x);var b=m.prototype=h.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function L(r,n){function e(a,i,c,s){var u=p(r[a],r,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==t(f)&&o.call(f,"__await")?n.resolve(f.__await).then((function(t){e("next",t,c,s)}),(function(t){e("throw",t,c,s)})):n.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,s)}))}s(u.arg)}var i;a(this,"_invoke",{value:function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return i=i?i.then(o,o):o()}})}function k(t,r,n){var e="suspendedStart";return function(o,a){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===e)throw e="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);e="executing";var s=p(t,r,n);if("normal"===s.type){if(e=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(e="completed",n.method="throw",n.arg=s.arg)}}}function E(t,r){var n=r.method,e=t.iterator[n];if(void 0===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=void 0,E(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=p(e,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function S(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function O(t){if(t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,e=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return e.next=e}}return{next:T}}function T(){return{value:void 0,done:!0}}return v.prototype=m,a(b,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},n.awrap=function(t){return{__await:t}},w(L.prototype),l(L.prototype,s,(function(){return this})),n.AsyncIterator=L,n.async=function(t,r,e,o,a){void 0===a&&(a=Promise);var i=new L(f(t,r,e,o),a);return n.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),l(b,u,"Generator"),l(b,c,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},n.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,e){return i.type="throw",i.arg=t,r.next=n,e&&(r.method="next",r.arg=void 0),!!e}for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc<=this.prev&&o.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var a=e;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},n}function n(t,r,n,e,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?r(s):Promise.resolve(s).then(e,o)}function e(t){return function(){var r=this,e=arguments;return new Promise((function(o,a){var i=t.apply(r,e);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}var o=document.getElementById("search-box"),a=document.getElementById("search-btn"),i=document.getElementById("result");a.addEventListener("click",e(r().mark((function t(){var n,e,a,i,u;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=o.value)){t.next=21;break}return e="https://pokeapi.co/api/v2/pokemon/".concat(n.toLowerCase()),t.prev=3,t.next=6,fetch(e);case 6:if((a=t.sent).ok){t.next=9;break}throw Error(a.statusText);case 9:return t.next=11,a.json();case 11:i=t.sent,u={name:i.name,id:i.id,image:i.sprites.front_default,types:i.types.map((function(t){return t.type.name})),stats:i.stats.map((function(t){return{name:t.stat.name,value:t.base_stat}}))},c(u),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(3),s('Could not find Pokemon "'.concat(n,'".'));case 19:t.next=22;break;case 21:s("Please enter a Pokemon name or ID.");case 22:case"end":return t.stop()}}),t,null,[[3,16]])}))));var c=function(t){var r='<img src="'.concat(t.image,'" alt="').concat(t.name,'"> <h2>').concat(t.name,"</h2> <p>ID: ").concat(t.id,"</p> <p>Type: ").concat(t.types.join(", "),"</p> <ul> <li>HP: ").concat(t.stats[0].value,"</li> <li>Attack: ").concat(t.stats[1].value,"</li> <li>Defense: ").concat(t.stats[2].value,"</li> <li>Special Attack: ").concat(t.stats[3].value,"</li> <li>Special Defense: ").concat(t.stats[4].value,"</li> <li>Speed: ").concat(t.stats[5].value,"</li> </ul>");i.innerHTML=r},s=function(t){var r="<p>".concat(t,"</p>");i.innerHTML=r}})(),(()=>{"use strict";var t=n(379),r=n.n(t),e=n(795),o=n.n(e),a=n(569),i=n.n(a),c=n(565),s=n.n(c),u=n(216),l=n.n(u),f=n(589),p=n.n(f),d=n(247),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),r()(d.Z,h),d.Z&&d.Z.locals&&d.Z.locals})()})();