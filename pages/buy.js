import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Seo from "../components/Seo";
import Image from 'next/image';

export default function Buy() {
    const [productsCount, setProductsCount] = useState();
    const [basketCount, setBasketCount] = useState();
    const [cookie, setCookie] = useState();

    useEffect(() => {
        const cookie = new Cookies();
        setCookie(cookie);
        setBasketCount(cookie.get('basket') === undefined ? 0 : cookie.get('basket').length);
        setProductsCount(cookie.get('productsCount') === undefined ? {} : cookie.get('productsCount'));
    }, [])

    const doSomething = function (e) {
        let fullProductsCount = [];
        const products = cookie.get('basket');
        products.forEach(product => {
            fullProductsCount = fullProductsCount.concat(productsCount[product] === undefined ? 1 : parseInt(productsCount[product]));
        });
        axios.get("https://db-lovat.vercel.app/api/buy.php?products="+products+"&count="+fullProductsCount+"&sum="+cookie.get('productsPriceSum')+"&fio="+e.target[0].value+"&phone="+e.target[1].value+"&whats="+e.target[2].checked);
        cookie.remove('basket');
        cookie.remove('productsPriceSum');
        window.location = "/greetings";
        e.preventDefault();
    }

    return (
        <div className="App">
            <Seo title="Оформление заказа" description="Оформить заказ" keywords="оформление заказа"/>
            <div style={{position:"fixed",width:"100vw",height:"100vh"}}><Image src='/imgs/kamazHeader.jpg' placeholder="blur" sizes="100vw" fill quality={100} style={{objectFit: "cover"}}/></div>

            <button className="contactsFloatingBtn"><Link href="/">
            <img src='/imgs/home.svg' alt="" className="contactsFloatingBtnImg"/>
        </Link></button>
        <button className="catFloatingBtn"><Link href="/basket">
            <img src='/imgs/basket.svg' alt="" className="catFloatingBtnImg"/>
            <div className="catFloatingBtnTextCont">
            <p className="categoryBasketBtnText">{basketCount}</p>
        </div>
        </Link></button>
            {cookie === undefined ? null :
            <div className="cont">
            <div className="homeContainer">
                <h1 className="homeHeader">Оформление заказа</h1>
                <p className="buyHeader">Всего: {cookie.get('productsPriceSum')}₽</p>
                <form action="#" onSubmit={doSomething} className="buyFormCont">
                    <label>
                        <p className="buyFormText">ФИО:</p>
                        <input type="text" className="buyFormInput" required/>
                    </label>
                    <label>
                        <p className="buyFormText">Телефон(для связи):</p>
                        <input type="text" className="buyFormInput" required minLength={11} maxLength={12}/>
                    </label>
                    <div>
                        <input type="checkbox" name="whats" id="whats" className="buyCheckbox"/>
                        <label htmlFor="agree" className="buyCheckboxText">Написать в WhatsApp для оплаты и доставки</label>
                        <p className="buyCheckboxSubText">Если вы не поставите галочку, мы позвоним Вам на телефон</p>
                    </div>
                    <div>
                        <input type="checkbox" name="agree" id="agree" className="buyCheckbox" required/>
                        <label htmlFor="agree" className="buyCheckboxText">Я согласен на обработку данных</label>
                    </div>
                    <button className="basketBuyBtn" type="submit">Оформить</button>
                </form>
            </div>
            </div>
            }
        </div>
    )
}
