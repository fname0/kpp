import { useEffect, useState } from "react";
import Link from "next/link";
import styles from '../styles/contacts.module.css';
import Cookies from "universal-cookie";
import Seo from "../components/Seo";

export default function Contacts() {
    const [basketCount, setBasketCount] = useState();

    useEffect(() => {
        const cookie = new Cookies();
        setBasketCount(cookie.get('basket') === undefined ? 0 : cookie.get('basket').length);
    }, [])

  return (
    <div className="App">
      <Seo title="Контакты|Всё на КПП" description="Контакты компании «Всё на КПП»" keywords="запчасти камаз, купить запчасти камаз, контакты"/>

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
            <h1 className="homeHeader">Контакты</h1>
            <div className="contactsCont">
                <a href="tel:+79287758989" className="notextdecor">+79287758989</a>
                <a href="mailto:simelnik@mail.ru" className="notextdecor">simelnik@mail.ru</a>
            </div>
            <div className={styles.yaFirst}>
                <a href="https://yandex.ru/maps/236/naberezhnie-chelny/?utm_medium=mapframe&utm_source=maps" className={styles.yaSecond}>Набережные Челны</a>
                <a className={styles.yaThird} href="https://yandex.ru/maps/236/naberezhnie-chelny/house/trubny_proyezd_3s30/YUsYcgZjTkYFQFtvfXtwdnRkZw==/?ll=52.413733%2C55.717873&utm_medium=mapframe&utm_source=maps&z=16">Трубный проезд, 3с30 на карте Набережных Челнов — Яндекс Карты</a>
                <iframe title="чзх" src="https://yandex.ru/map-widget/v1/?ll=52.413733%2C55.717873&mode=whatshere&whatshere%5Bpoint%5D=52.413732%2C55.717873&whatshere%5Bzoom%5D=17&z=16" width="560" height="400" frameBorder="1" allowFullScreen={true} className={styles.yaFourth}></iframe>
            </div>
        </div>
        </div>
    </div>
  )
}