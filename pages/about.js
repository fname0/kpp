import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Seo from "../components/Seo";
import Image from 'next/image';

export default function About() {
  const [basketCount, setBasketCount] = useState();

  useEffect(() => {
      const cookie = new Cookies();
      setBasketCount(cookie.get('basket') === undefined ? 0 : cookie.get('basket').length);
  }, [])

  return (
    <div className="App">
        <Seo title="О нас|Всё на КПП КАМАЗ" description='Информация о компании «Всё на КПП»' keywords="запчасти камаз"/>
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
            <h1 className="homeHeader">О нас</h1>
            <h2 className="aboutHeader">Детали для КАМАЗА по низким ценам</h2>
            <p className="aboutText">Широкий ассортимент, низкие цены, всё для КПП.</p>
            <div className="homeCardCont">
                <Link className="homeCard noDec" href="/catalog">
                    <div className="homeCardImgCont">
                        <img src='/imgs/engine.png' alt="" className="homeCardImg"/>
                    </div>
                    <h2 className="homeCardHeader">Каталог</h2>
                </Link>
                <Link className="homeCard noDec" href="/contacts">
                    <div className="homeCardImgCont">
                        <img src='/imgs/contacts.png' alt="" className="homeCardImg"/>
                    </div>
                    <h2 className="homeCardHeader">Контакты</h2>
                </Link>
            </div>
        </div>
        </div>
    </div>
  )
}
