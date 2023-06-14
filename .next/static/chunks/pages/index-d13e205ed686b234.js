(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6489:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.Q=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var i={},n=e.split(";"),a=(t||{}).decode||s,r=0;r<n.length;r++){var o=n[r],c=o.indexOf("=");if(!(c<0)){var h=o.substring(0,c).trim();if(void 0==i[h]){var l=o.substring(c+1,o.length).trim();'"'===l[0]&&(l=l.slice(1,-1)),i[h]=function(e,t){try{return t(e)}catch(t){return e}}(l,a)}}}return i},t.q=function(e,t,s){var a=s||{},r=a.encode||i;if("function"!=typeof r)throw TypeError("option encode is invalid");if(!n.test(e))throw TypeError("argument name is invalid");var o=r(t);if(o&&!n.test(o))throw TypeError("argument val is invalid");var c=e+"="+o;if(null!=a.maxAge){var h=a.maxAge-0;if(isNaN(h)||!isFinite(h))throw TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(h)}if(a.domain){if(!n.test(a.domain))throw TypeError("option domain is invalid");c+="; Domain="+a.domain}if(a.path){if(!n.test(a.path))throw TypeError("option path is invalid");c+="; Path="+a.path}if(a.expires){if("function"!=typeof a.expires.toUTCString)throw TypeError("option expires is invalid");c+="; Expires="+a.expires.toUTCString()}if(a.httpOnly&&(c+="; HttpOnly"),a.secure&&(c+="; Secure"),a.sameSite)switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:case"strict":c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"none":c+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return c};var s=decodeURIComponent,i=encodeURIComponent,n=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(6616)}])},6616:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var i=s(5893),n=s(1664),a=s.n(n),r=s(7294),o=s(5885);function c(){let[e,t]=(0,r.useState)(),[s,n]=(0,r.useState)(!1),c="";return(0,r.useEffect)(()=>{let e=new o.Z;t(void 0===e.get("basket")?0:e.get("basket").length),n(window.innerWidth>window.innerHeight)},[]),(0,i.jsxs)("div",{className:"App",children:[(0,i.jsxs)("div",{className:"homeSearchInputCont",children:[(0,i.jsx)("input",{type:"text",className:"homeSearchInput",placeholder:"Поиск...",onChange:e=>{c=e.target.value}}),(0,i.jsx)("div",{className:"homeSearchImgCont",onClick:()=>{window.location="/search?searchValue="+c},children:(0,i.jsx)("img",{src:"/imgs/search.svg",alt:"",className:"homeSearchImg"})})]}),(0,i.jsx)("button",{className:"catFloatingBtn",children:(0,i.jsxs)(a(),{href:"/basket",children:[(0,i.jsx)("img",{src:"/imgs/basket.svg",alt:"",className:"catFloatingBtnImg"}),(0,i.jsx)("div",{className:"catFloatingBtnTextCont",children:(0,i.jsx)("p",{className:"categoryBasketBtnText",children:e})})]})}),(0,i.jsx)("div",{className:"cont",children:(0,i.jsxs)("div",{className:"homeContainer",children:[(0,i.jsx)("h1",{className:"homeHeader",children:"Запчасти для КАМАЗА"}),(0,i.jsx)("div",{className:"catalogCardContHome",children:(0,i.jsxs)("div",{className:s?"homeCardCont":"homeMobileCardCont",children:[(0,i.jsx)(a(),{href:"/about",className:"noDec",children:(0,i.jsxs)("div",{className:"homeCard",children:[(0,i.jsx)("div",{className:"homeCardImgCont",children:(0,i.jsx)("img",{src:"/imgs/about.png",alt:"",className:"homeCardImg"})}),(0,i.jsx)("h2",{className:"homeCardHeader",children:"О нас"})]})}),(0,i.jsx)(a(),{href:"/catalog",className:"noDec",children:(0,i.jsxs)("div",{className:"homeCard",children:[(0,i.jsx)("div",{className:"homeCardImgCont",children:(0,i.jsx)("img",{src:"/imgs/engine.png",alt:"",className:"homeCardImg"})}),(0,i.jsx)("h2",{className:"homeCardHeader",children:"Каталог"})]})}),(0,i.jsx)(a(),{href:"/repair",className:"noDec",children:(0,i.jsxs)("div",{className:"homeCard",children:[(0,i.jsx)("div",{className:"homeCardImgCont",children:(0,i.jsx)("img",{src:"/imgs/repair.svg",alt:"",className:"homeCardImg"})}),(0,i.jsx)("h2",{className:"homeCardHeader",children:"Ремонт/сборка КПП"})]})}),(0,i.jsx)(a(),{href:"/contacts",className:"noDec",children:(0,i.jsxs)("div",{className:"homeCard",children:[(0,i.jsx)("div",{className:"homeCardImgCont",children:(0,i.jsx)("img",{src:"/imgs/contacts.png",alt:"",className:"homeCardImg"})}),(0,i.jsx)("h2",{className:"homeCardHeader",children:"Контакты"})]})})]})})]})})]})}},5885:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var i=s(6489);function n(e,t){void 0===t&&(t={});var s,i=e&&"j"===e[0]&&":"===e[1]?e.substr(2):e;if(void 0===(s=t.doNotParse)&&(s=!i||"{"!==i[0]&&"["!==i[0]&&'"'!==i[0]),!s)try{return JSON.parse(i)}catch(e){}return e}var a=function(){return(a=Object.assign||function(e){for(var t,s=1,i=arguments.length;s<i;s++)for(var n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},r=function(){function e(e,t){var s=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies="string"==typeof e?i.Q(e,t):"object"==typeof e&&null!==e?e:{},new Promise(function(){s.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie}).catch(function(){})}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=i.Q(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,s){return void 0===t&&(t={}),this._updateBrowserValues(s),n(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var s={};for(var i in this.cookies)s[i]=n(this.cookies[i],e);return s},e.prototype.set=function(e,t,s){var n;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=a(a({},this.cookies),((n={})[e]=t,n)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=i.q(e,t,s)),this._emitChange({name:e,value:t,options:s})},e.prototype.remove=function(e,t){var s=t=a(a({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=a({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=i.q(e,"",s)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}()}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);