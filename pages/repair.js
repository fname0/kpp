import Cookies from "universal-cookie";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import Image from 'next/image';

export default function Repair() {
    const [basketCount, setBasketCount] = useState();

    useEffect(() => {
        const cookie = new Cookies();
        setBasketCount(cookie.get('basket') === undefined ? 0 : cookie.get('basket').length);
    }, [])

    const doSomething = function (e) {
        const formData = new FormData();
        formData.append('fio', e.target[0].value);
        formData.append('tel', e.target[1].value);
        formData.append('description', e.target[2].value);
        formData.append('whats', e.target[3].checked);
        axios.post(`https://db-lovat.vercel.app/api/repair.php`, formData)
        window.location.href = "/greetings";
        e.preventDefault();
    }

    return (
        <div className="App">
            <Seo title="Заявка на ремонт/сборку|Всё на КПП" description="Отправить заявку на ремонт или сборку коробки перемены передач (КПП)" keywords="запчасти камаз, всё на кпп, ремонт кпп, сборка кпп, собрать кпп, отремонтировать кпп, ремонт коробки передач, сборка коробки передач"/>
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
            <div className="homeContainer">
                <h1 className="homeHeader">Оформление заявки</h1>
                <form action="#" onSubmit={doSomething} className="buyFormCont">
                    <label>
                        <p className="buyFormText">ФИО:</p>
                        <input type="text" className="buyFormInput" required/>
                    </label>
                    <label>
                        <p className="buyFormText">Телефон(для связи):</p>
                        <input type="text" className="buyFormInput" required minLength={11} maxLength={11} pattern="[0-9]{11}"/>
                        <p className="buyCheckboxSubText">Формат: 89883224337</p>
                    </label>
                    <label>
                        <p className="buyFormText">Описание:</p>
                        <textarea className="buyFormInput" style={{height: 'auto'}} onChange={e => {e.target.style.height = 'auto';e.target.style.height = e.target.scrollHeight + 8 + 'px'}} required minLength={20}/>
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
        </div>
    )
}
