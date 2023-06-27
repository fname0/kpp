import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Cookies from 'universal-cookie';
import Seo from '../../components/Seo';
import Image from 'next/image';

export default function () {
    const product = {id: "3", title: "Блок шестерен заднего хода в сборе / з-д Камаз", num: "14-1701082", price: "6800", cat: "kpp", out: "False"}
    const [cookie, setCookie] = useState();
    const [purchased, setPurchased] = useState();
    const [basketCount, setBasketCount] = useState();

    const addBasket = () => {
        if (product.out === "True") return;
        let basket = cookie.get('basket') ? cookie.get('basket') : [];
        if (!basket.includes(product.id) && purchased === "false") {basket = basket.concat(product.id); setPurchased("true"); setBasketCount(basketCount+1);}
        else if (basket.includes(product.id) && purchased === "true") {basket.splice(basket.indexOf(product.id), 1); setPurchased("false"); setBasketCount(basketCount-1);}
        if (basket.length !== 0) cookie.set('basket', basket);
        else cookie.remove('basket');
    }

    const tryRequire = () => {
        try {
            require('../../public/productImg/'+product.id+'.png');
            return '/productImg/'+product.id+".png";
        } catch (err) {
            return '/imgs/noImg.svg';
        }
    };

    useEffect(() => {
        const cookie = new Cookies();
        setCookie(cookie);
        setBasketCount(cookie.get('basket') === undefined ? 0 : cookie.get('basket').length);
        setPurchased(new URLSearchParams(window.location.search).get('isClicked'));
    }, [])

    return (
        <div className="App">
            <Seo title={product.title+'('+product.num+') за '+ product.price+'₽'} description={'Купить '+product.title+'('+product.num+')'+' за '+product.price+"₽"} keywords={"запчасти камаз, купить запчасти камаз, "+product.title+", "+product.num+", "+{"reductor": "Редукторы", "kpp": "КПП", "scepa": "Сцепление(+кулиса)", "metiz": "Метизы(+датчики, РТИ)", "podshib": "Подшипники", "ZF": "ZF"}[product.cat]}/>
            <Image src='/imgs/kamazHeader.jpg' placeholder="blur" sizes="100vw" fill quality={100} style={{objectFit: "cover"}}/>

            <button className="contactsFloatingBtn"><Link href="/">
                <img src='/imgs/home.svg' alt="" className="contactsFloatingBtnImg"/>
            </Link></button>
                <button className="catFloatingBtn"><Link href="/basket">
                <img src='/imgs/basket.svg' alt="" className="catFloatingBtnImg"/>
                <div className="catFloatingBtnTextCont">
                    <p className="categoryBasketBtnText">{basketCount}</p>
                </div>
            </Link></button>
            <div className="cont">
            <div className="productInfoCont">
              {product.out === undefined ? product.out = "False" : null}
                <div className="productInfoImgCont">
                    <Image src={tryRequire()} placeholder="blur" alt="" className="productInfoCardImg"/>
                </div>
                <h1 className="homeHeader">{product.title}</h1>
                <h1 className="homeHeader">{product.num}</h1>
                <h1 className="homeHeader">{product.price}₽</h1>
                {product.out === "False" ? <h1 className="homeHeader">В наличии</h1> 
                : <h1 className="homeHeader" style={{color: 'rgba(255,50,50,1)'}}>Не в наличии</h1>}
                <button className="basketBuyBtn" onClick={() => addBasket()}>{purchased === "true" ? "Удалить из корзины" : "В корзину"}</button>
            </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(content) {
    const id = content.query['id'];
    const response = await fetch(`https://db-lovat.vercel.app/api/getproductinfo.php?id=`+id);
    const product = await response.json();
    return {
        props: {product},
    };
}