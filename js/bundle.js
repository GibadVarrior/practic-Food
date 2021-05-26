/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={702:function(t,e,n){t.exports=function(){"use strict";function t(t){return"function"==typeof t}var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=0,r=void 0,i=void 0,s=function(t,e){f[o]=t,f[o+1]=e,2===(o+=2)&&(i?i(m):y())};var c="undefined"!=typeof window?window:void 0,a=c||{},l=a.MutationObserver||a.WebKitMutationObserver,u="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),d="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){var t=setTimeout;return function(){return t(m,1)}}var f=new Array(1e3);function m(){for(var t=0;t<o;t+=2)(0,f[t])(f[t+1]),f[t]=void 0,f[t+1]=void 0;o=0}var v,p,_,g,y=void 0;function b(t,e){var n=this,o=new this.constructor(L);void 0===o[S]&&O(o);var r=n._state;if(r){var i=arguments[r-1];s((function(){return C(r,o,i,n._result)}))}else j(n,o,t,e);return o}function w(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(L);return x(e,t),e}y=u?function(){return process.nextTick(m)}:l?(p=0,_=new l(m),g=document.createTextNode(""),_.observe(g,{characterData:!0}),function(){g.data=p=++p%2}):d?((v=new MessageChannel).port1.onmessage=m,function(){return v.port2.postMessage(0)}):void 0===c?function(){try{var t=Function("return this")().require("vertx");return void 0!==(r=t.runOnLoop||t.runOnContext)?function(){r(m)}:h()}catch(t){return h()}}():h();var S=Math.random().toString(36).substring(2);function L(){}var E=void 0;function A(e,n,o){n.constructor===e.constructor&&o===b&&n.constructor.resolve===w?function(t,e){1===e._state?T(t,e._result):2===e._state?M(t,e._result):j(e,void 0,(function(e){return x(t,e)}),(function(e){return M(t,e)}))}(e,n):void 0===o?T(e,n):t(o)?function(t,e,n){s((function(t){var o=!1,r=function(t,e,n,o){try{t.call(e,n,o)}catch(t){return t}}(n,e,(function(n){o||(o=!0,e!==n?x(t,n):T(t,n))}),(function(e){o||(o=!0,M(t,e))}),t._label);!o&&r&&(o=!0,M(t,r))}),t)}(e,n,o):T(e,n)}function x(t,e){if(t===e)M(t,new TypeError("You cannot resolve a promise with itself"));else if(r=typeof(o=e),null===o||"object"!==r&&"function"!==r)T(t,e);else{var n=void 0;try{n=e.then}catch(e){return void M(t,e)}A(t,e,n)}var o,r}function q(t){t._onerror&&t._onerror(t._result),k(t)}function T(t,e){t._state===E&&(t._result=e,t._state=1,0!==t._subscribers.length&&s(k,t))}function M(t,e){t._state===E&&(t._state=2,t._result=e,s(q,t))}function j(t,e,n,o){var r=t._subscribers,i=r.length;t._onerror=null,r[i]=e,r[i+1]=n,r[i+2]=o,0===i&&t._state&&s(k,t)}function k(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var o=void 0,r=void 0,i=t._result,s=0;s<e.length;s+=3)o=e[s],r=e[s+n],o?C(n,o,r,i):r(i);t._subscribers.length=0}}function C(e,n,o,r){var i=t(o),s=void 0,c=void 0,a=!0;if(i){try{s=o(r)}catch(t){a=!1,c=t}if(n===s)return void M(n,new TypeError("A promises callback cannot return that same promise."))}else s=r;n._state!==E||(i&&a?x(n,s):!1===a?M(n,c):1===e?T(n,s):2===e&&M(n,s))}var I=0;function O(t){t[S]=I++,t._state=void 0,t._result=void 0,t._subscribers=[]}var H=function(){function t(t,n){this._instanceConstructor=t,this.promise=new t(L),this.promise[S]||O(this.promise),e(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?T(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&T(this.promise,this._result))):M(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===E&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,o=n.resolve;if(o===w){var r=void 0,i=void 0,s=!1;try{r=t.then}catch(t){s=!0,i=t}if(r===b&&t._state!==E)this._settledAt(t._state,e,t._result);else if("function"!=typeof r)this._remaining--,this._result[e]=t;else if(n===$){var c=new n(L);s?M(c,i):A(c,t,r),this._willSettleAt(c,e)}else this._willSettleAt(new n((function(e){return e(t)})),e)}else this._willSettleAt(o(t),e)},t.prototype._settledAt=function(t,e,n){var o=this.promise;o._state===E&&(this._remaining--,2===t?M(o,n):this._result[e]=n),0===this._remaining&&T(o,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;j(t,void 0,(function(t){return n._settledAt(1,e,t)}),(function(t){return n._settledAt(2,e,t)}))},t}();var $=function(){function e(t){this[S]=I++,this._result=this._state=void 0,this._subscribers=[],L!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){x(t,e)}),(function(e){M(t,e)}))}catch(e){M(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this,o=n.constructor;return t(e)?n.then((function(t){return o.resolve(e()).then((function(){return t}))}),(function(t){return o.resolve(e()).then((function(){throw t}))})):n.then(e,e)},e}();return $.prototype.then=b,$.all=function(t){return new H(this,t).promise},$.race=function(t){var n=this;return e(t)?new n((function(e,o){for(var r=t.length,i=0;i<r;i++)n.resolve(t[i]).then(e,o)})):new n((function(t,e){return e(new TypeError("You must pass an array to race."))}))},$.resolve=w,$.reject=function(t){var e=new this(L);return M(e,t),e},$._setScheduler=function(t){i=t},$._setAsap=function(t){s=t},$._asap=s,$.polyfill=function(){var t=void 0;if(void 0!==n.g)t=n.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var o=null;try{o=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===o&&!e.cast)return}t.Promise=$},$.Promise=$,$}()},746:()=>{window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";n(746);function t(t){const e=document.querySelector(t);e.classList.add("hide"),e.classList.remove("show"),document.body.style.overflow=""}function e(t,e){const n=document.querySelector(t);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",console.log(e),e&&clearInterval(e)}n(702).polyfill(),window.addEventListener("DOMContentLoaded",(function(){const n=setTimeout((()=>e(".modal",n)),3e5);(function(t,e,n,o){let r=document.querySelectorAll(t),i=document.querySelectorAll(e),s=document.querySelector(n);function c(){i.forEach((t=>{t.classList.add("hide"),t.classList.remove("show","fade")})),r.forEach((t=>{t.classList.remove(o)}))}function a(t=0){i[t].classList.add("show","fade"),i[t].classList.remove("hide"),r[t].classList.add(o)}c(),a(),s.addEventListener("click",(function(e){const n=e.target;n&&n.classList.contains(t.slice(1))&&r.forEach(((t,e)=>{n==t&&(c(),a(e))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(n,o,r){const i=document.querySelectorAll(n),s=document.querySelector(o);i.forEach((t=>{t.addEventListener("click",(()=>e(o,r)))})),s.addEventListener("click",(e=>{e.target!==s&&""!=e.target.getAttribute("data-close")||t(o)})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&s.classList.contains("show")&&t(o)})),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(e(o,r),window.removeEventListener("scroll",t))}))}("[data-modal]",".modal",n),function(t,e){function n(t){return t>=0&&t<10?"0"+t:t}!function(t,e){const o=document.querySelector(t),r=o.querySelector("#days"),i=o.querySelector("#hours"),s=o.querySelector("#minutes"),c=o.querySelector("#seconds"),a=setInterval(l,1e3);function l(){const t=function(t){const e=Date.parse(t)-Date.parse(new Date),n=Math.floor(e/864e5),o=Math.floor(e/1e3%60),r=Math.floor(e/1e3/60%60);return{total:e,days:n,hours:Math.floor(e/36e5%24),minutes:r,seconds:o}}(e);r.innerHTML=n(t.days),i.innerHTML=n(t.hours),s.innerHTML=n(t.minutes),c.innerHTML=n(t.seconds),t.total<=0&&clearInterval(a)}l()}(t,e)}(".timer","2020-05-18"),function(){class t{constructor(t,e,n,o,r,i,...s){this.src=t,this.alt=e,this.title=n,this.descr=o,this.price=r,this.classes=s,this.parent=document.querySelector(i),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const t=document.createElement("div");0===this.classes.length?(this.classes="menu__item",t.classList.add(this.classes)):this.classes.forEach((e=>t.classList.add(e))),t.innerHTML=`\n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n            `,this.parent.append(t)}}(async function(t){let e=await fetch(t);if(!e.ok)throw new Error(`Could not fetch ${t}, status: ${e.status}`);return await e.json()})("http://localhost:3000/menu").then((e=>{e.forEach((({img:e,altimg:n,title:o,descr:r,price:i})=>{new t(e,n,o,r,i,".menu .container").render()}))}))}(),function(){const t=document.querySelector(".calculating__result span");let e,n,o,r,i;function s(){t.textContent=e&&n&&o&&r&&i?"female"===e?Math.round((447.6+9.2*o+3.1*n-4.3*r)*i):Math.round((88.36+13.4*o+4.8*n-5.7*r)*i):"____"}function c(t,e){document.querySelectorAll(t).forEach((t=>{t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(e),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(e)}))}function a(t,n){const o=document.querySelectorAll(t);o.forEach((t=>{t.addEventListener("click",(t=>{t.target.getAttribute("data-ratio")?(i=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+t.target.getAttribute("data-ratio"))):(e=t.target.getAttribute("id"),localStorage.setItem("sex",t.target.getAttribute("id"))),o.forEach((t=>{t.classList.remove(n)})),t.target.classList.add(n),s()}))}))}function l(t){const e=document.querySelector(t);e.addEventListener("input",(()=>{switch(e.value.match(/\D/g)?e.style.border="1px solid red":e.style.border="none",e.getAttribute("id")){case"height":n=+e.value;break;case"weight":o=+e.value;break;case"age":r=+e.value}s()}))}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?i=localStorage.getItem("ratio"):(i=1.375,localStorage.setItem("ratio",1.375)),s(),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),a("#gender div","calculating__choose-item_active"),a(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(n,o){function r(n){const r=document.querySelector(".modal__dialog");r.classList.add("hide"),e(".modal",o);const i=document.createElement("div");i.classList.add("modal__dialog"),i.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${n}</div>\n            </div>\n        `,document.querySelector(".modal").append(i),setTimeout((()=>{i.remove(),r.classList.add("show"),r.classList.remove("hide"),t(".modal")}),4e3)}document.querySelectorAll("formSelector").forEach((t=>{var e;(e=t).addEventListener("submit",(t=>{t.preventDefault();let n=document.createElement("img");n.src="img/form/spinner.svg",n.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",e.insertAdjacentElement("afterend",n);const o=new FormData(e);(async(t,e)=>{let n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:e});return await n.json()})(0,JSON.stringify(Object.fromEntries(o.entries()))).then((t=>{console.log(t),r("Спасибо! Скоро мы с вами свяжемся"),n.remove()})).catch((()=>{r("Что-то пошло не так...")})).finally((()=>{e.reset()}))}))}))}(0,n),function(){let t=1;const e=document.querySelectorAll(".offer__slide"),n=document.querySelector(".offer__slider"),o=document.querySelector(".offer__slider-prev"),r=document.querySelector(".offer__slider-next"),i=document.querySelector("#total"),s=document.querySelector("#current");function c(o){o>e.length&&(t=1),o<1&&(t=e.length),e.forEach((t=>t.style.display="none")),n.style.position="relative";const r=document.createElement("ol"),i=[];r.classList.add("carousel-indicators"),r.style.cssText="\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 15;\n        display: flex;\n        justify-content: center;\n        margin-right: 15%;\n        margin-left: 15%;\n        list-style: none;\n        ",n.append(r);for(let t=0;t<e.length;t++){const e=document.createElement("li");e.setAttribute("data-slide-to",t+1),e.style.cssText="\n            box-sizing: content-box;\n            flex: 0 1 auto;\n            width: 30px;\n            height: 6px;\n            margin-right: 3px;\n            margin-left: 3px;\n            cursor: pointer;\n            background-color: #fff;\n            background-clip: padding-box;\n            border-top: 10px solid transparent;\n            border-bottom: 10px solid transparent;\n            opacity: .5;\n            transition: opacity .6s ease;\n            ",0==t&&(e.style.opacity=1),r.append(e),i.push(e)}e[t-1].style.display="block",e.length<10?s.textContent=`0${t}`:s.textContent=t,i.forEach((t=>t.style.opacity=".5")),i[t-1].style.opacity=1}function a(e){c(t+=e)}c(t),e.length<10?i.textContent=`0${e.length}`:i.textContent=e.length,o.addEventListener("click",(function(){a(-1)})),r.addEventListener("click",(function(){a(1)}))}()}))})()})();
//# sourceMappingURL=bundle.js.map