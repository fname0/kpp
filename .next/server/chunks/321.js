"use strict";
exports.id = 321;
exports.ids = [321];
exports.modules = {

/***/ 5321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CatalogCards)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/ProductCard.jsx



function ProductCard(props) {
    const [isClicked, setIsClicked] = (0,external_react_.useState)(props.isClicked);
    let isUpperBtnClicked = false;
    const tryRequire = ()=>{
        try {
            __webpack_require__(3136)("./" + props.id + ".png");
            return "/productImg/" + props.id + ".png";
        } catch (err) {
            return "/imgs/noImg.svg";
        }
    };
    (0,external_react_.useEffect)(()=>{
        setIsClicked(props.isClicked);
    }, [
        props.isClicked
    ]);
    function addBasket(id) {
        if (props.out !== "True" && isUpperBtnClicked === false) {
            props.addBasket(id, isClicked, setIsClicked);
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: props.out === "True" ? "productCardOut" : isClicked ? "productCardPurchased" : "productCard",
        onClick: ()=>addBasket(props.id),
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "/product/" + props.id + "?isClicked=" + isClicked,
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: "/imgs/about.png",
                    alt: "",
                    className: "infoImgProductCard",
                    onClick: ()=>{
                        isUpperBtnClicked = true;
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "productImgCont",
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: tryRequire(),
                    alt: "",
                    className: "productCardImg"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "productTextCont",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "productTitle",
                        children: props.title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "productText productNum",
                        children: props.num
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        className: "productPrice",
                        children: [
                            props.price,
                            "₽"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: props.out === "True" ? "productText productOut" : "productText productIn",
                        children: props.out === "True" ? "Нет в наличии" : isClicked === true ? "Добавлено" : "В наличии"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: external "universal-cookie"
var external_universal_cookie_ = __webpack_require__(6153);
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_);
;// CONCATENATED MODULE: ./components/CatalogCards.jsx




function CatalogCards(props) {
    let searchValueInput = "";
    const [searchValue, setSearchValue] = (0,external_react_.useState)("");
    const [basket, setBasket] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        const cookie = new (external_universal_cookie_default());
        if (new URLSearchParams(window.location.search).get("searchValue") !== null) setSearchValue(new URLSearchParams(window.location.search).get("searchValue"));
        setBasket(cookie.get("basket") ? cookie.get("basket") : []);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "productCardCont",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "catSearchInputCont",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        type: "text",
                        className: "homeSearchInput",
                        defaultValue: searchValue === undefined ? null : searchValue,
                        placeholder: "Поиск...",
                        onChange: (event)=>{
                            searchValueInput = event.target.value;
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "homeSearchImgCont",
                        onClick: ()=>{
                            setSearchValue(searchValueInput);
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "/imgs/search.svg",
                            alt: "",
                            className: "homeSearchImg"
                        })
                    })
                ]
            }),
            props.products.length != 0 ? Object.entries(props.products).filter((name)=>searchValue.toLowerCase().split(" ").every((v)=>(name[1].title + " " + name[1].num).toLowerCase().includes(v))).map((product, i)=>/*#__PURE__*/ jsx_runtime.jsx(ProductCard, {
                    addBasket: props.addBasket,
                    id: product[1].id,
                    out: product[1].out,
                    num: product[1].num,
                    title: product[1].title,
                    price: product[1].price,
                    isClicked: basket.includes(product[1].id)
                }, product[1].id)) : "Секунду, товары грузятся..."
        ]
    });
}


/***/ })

};
;