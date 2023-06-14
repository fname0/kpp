"use strict";
(() => {
var exports = {};
exports.id = 637;
exports.ids = [637];
exports.modules = {

/***/ 1238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6153);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_CatalogCards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5321);






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({ products  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [cookie, setCookies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [basketCount, setBasketCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const cat = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query.cat;
    const catName = {
        "reductor": "Редукторы",
        "kpp": "КПП",
        "scepa": "Сцепление(+кулиса)",
        "metiz": "Метизы(+датчики, РТИ)",
        "podshib": "Подшипники",
        "ZF": "ZF"
    };
    const { searchValue  } = router.query;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const cookie = new (universal_cookie__WEBPACK_IMPORTED_MODULE_3___default())();
        setCookies(cookie);
        setBasketCount(cookie.get("basket") === undefined ? 0 : cookie.get("basket").length);
    }, []);
    const addBasket = (id, isClicked, setIsClicked)=>{
        let basket = cookie.get("basket") ? cookie.get("basket") : [];
        if (!basket.includes(id) && !isClicked) {
            basket = basket.concat(id);
            setIsClicked(true);
            setBasketCount(basketCount + 1);
        }
        if (basket.includes(id) && isClicked) {
            basket.splice(basket.indexOf(id), 1);
            setIsClicked(false);
            setBasketCount(basketCount - 1);
        }
        if (basket.length !== 0) cookie.set("basket", basket);
        else cookie.remove("basket");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "App",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "contactsFloatingBtn",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/imgs/home.svg",
                        alt: "",
                        className: "contactsFloatingBtnImg"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "catFloatingBtn",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: "/basket",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/imgs/basket.svg",
                            alt: "",
                            className: "catFloatingBtnImg"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "catFloatingBtnTextCont",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "categoryBasketBtnText",
                                children: basketCount
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "categoryCont",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "homeHeader",
                        children: catName[cat]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CatalogCards__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        cat: cat,
                        addBasket: addBasket,
                        products: products,
                        searchValue: searchValue
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps(content) {
    const cat = content.query["cat"];
    const response = await fetch(cat == "all" ? `http://95.174.102.106:7474/getproducts.php` : `http://95.174.102.106:7474/?cat=` + cat);
    const products = await response.json();
    return {
        props: {
            products
        }
    };
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6153:
/***/ ((module) => {

module.exports = require("universal-cookie");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,136,321], () => (__webpack_exec__(1238)));
module.exports = __webpack_exports__;

})();