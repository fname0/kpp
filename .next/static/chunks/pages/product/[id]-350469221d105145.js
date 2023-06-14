(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[360],{6489:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.Q=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var n={},o=e.split(";"),s=(t||{}).decode||i,r=0;r<o.length;r++){var a=o[r],c=a.indexOf("=");if(!(c<0)){var u=a.substring(0,c).trim();if(void 0==n[u]){var l=a.substring(c+1,a.length).trim();'"'===l[0]&&(l=l.slice(1,-1)),n[u]=function(e,t){try{return t(e)}catch(t){return e}}(l,s)}}}return n},t.q=function(e,t,i){var s=i||{},r=s.encode||n;if("function"!=typeof r)throw TypeError("option encode is invalid");if(!o.test(e))throw TypeError("argument name is invalid");var a=r(t);if(a&&!o.test(a))throw TypeError("argument val is invalid");var c=e+"="+a;if(null!=s.maxAge){var u=s.maxAge-0;if(isNaN(u)||!isFinite(u))throw TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(u)}if(s.domain){if(!o.test(s.domain))throw TypeError("option domain is invalid");c+="; Domain="+s.domain}if(s.path){if(!o.test(s.path))throw TypeError("option path is invalid");c+="; Path="+s.path}if(s.expires){if("function"!=typeof s.expires.toUTCString)throw TypeError("option expires is invalid");c+="; Expires="+s.expires.toUTCString()}if(s.httpOnly&&(c+="; HttpOnly"),s.secure&&(c+="; Secure"),s.sameSite)switch("string"==typeof s.sameSite?s.sameSite.toLowerCase():s.sameSite){case!0:case"strict":c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"none":c+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return c};var i=decodeURIComponent,n=encodeURIComponent,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},5419:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/[id]",function(){return i(9687)}])},9687:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSP:function(){return c},default:function(){return u}});var n=i(5893),o=i(7294),s=i(1664),r=i.n(s),a=i(5885),c=!0;function u(e){let{product:t}=e;console.log(t);let[i,s]=(0,o.useState)(),[c,u]=(0,o.useState)(),[l,h]=(0,o.useState)(),d=()=>{if("True"===t.out)return;let e=i.get("basket")?i.get("basket"):[];e.includes(t.id)||"false"!==c?e.includes(t.id)&&"true"===c&&(e.splice(e.indexOf(t.id),1),u("false"),h(l-1)):(e=e.concat(t.id),u("true"),h(l+1)),0!==e.length?i.set("basket",e):i.remove("basket")};return(0,o.useEffect)(()=>{let e=new a.Z;s(e),h(void 0===e.get("basket")?0:e.get("basket").length),u(new URLSearchParams(window.location.search).get("isClicked"))},[]),(0,n.jsxs)("div",{className:"App",children:[(0,n.jsx)("button",{className:"contactsFloatingBtn",children:(0,n.jsx)(r(),{href:"/",children:(0,n.jsx)("img",{src:"/imgs/home.svg",alt:"",className:"contactsFloatingBtnImg"})})}),(0,n.jsx)("button",{className:"catFloatingBtn",children:(0,n.jsxs)(r(),{href:"/basket",children:[(0,n.jsx)("img",{src:"/imgs/basket.svg",alt:"",className:"catFloatingBtnImg"}),(0,n.jsx)("div",{className:"catFloatingBtnTextCont",children:(0,n.jsx)("p",{className:"categoryBasketBtnText",children:l})})]})}),(0,n.jsx)("div",{className:"cont",children:(0,n.jsxs)("div",{className:"productInfoCont",children:[void 0===t.out?t.out="False":null,(0,n.jsx)("div",{className:"productInfoImgCont",children:(0,n.jsx)("img",{src:(()=>{try{return function(){var e=Error("Cannot find module 'undefined'");throw e.code="MODULE_NOT_FOUND",e}(),"/productImg/"+props.id+".png"}catch(e){return"/imgs/noImg.svg"}})(),alt:"",className:"productInfoCardImg"})}),(0,n.jsx)("h1",{className:"homeHeader",children:t.title}),(0,n.jsx)("h1",{className:"homeHeader",children:t.num}),(0,n.jsxs)("h1",{className:"homeHeader",children:[t.price,"₽"]}),"False"===t.out?(0,n.jsx)("h1",{className:"homeHeader",children:"В наличии"}):(0,n.jsx)("h1",{className:"homeHeader",style:{color:"rgba(255,50,50,1)"},children:"Не в наличии"}),(0,n.jsx)("button",{className:"basketBuyBtn",onClick:()=>d(),children:"true"===c?"Удалить из корзины":"В корзину"})]})})]})}},5885:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var n=i(6489);function o(e,t){void 0===t&&(t={});var i,n=e&&"j"===e[0]&&":"===e[1]?e.substr(2):e;if(void 0===(i=t.doNotParse)&&(i=!n||"{"!==n[0]&&"["!==n[0]&&'"'!==n[0]),!i)try{return JSON.parse(n)}catch(e){}return e}var s=function(){return(s=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},r=function(){function e(e,t){var i=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies="string"==typeof e?n.Q(e,t):"object"==typeof e&&null!==e?e:{},new Promise(function(){i.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie}).catch(function(){})}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=n.Q(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,i){return void 0===t&&(t={}),this._updateBrowserValues(i),o(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var i={};for(var n in this.cookies)i[n]=o(this.cookies[n],e);return i},e.prototype.set=function(e,t,i){var o;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=s(s({},this.cookies),((o={})[e]=t,o)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=n.q(e,t,i)),this._emitChange({name:e,value:t,options:i})},e.prototype.remove=function(e,t){var i=t=s(s({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=s({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=n.q(e,"",i)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}()}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=5419)}),_N_E=e.O()}]);