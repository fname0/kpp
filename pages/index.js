import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import Seo from '../components/Seo';
import Image from 'next/image';

export default function Index() {
    const [basketCount, setBasketCount] = useState();
    const [isDesktop, setIsDesktop] = useState(false);
    let searchValue = "";
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const cookie = new Cookies();
        setBasketCount(cookie.get('basket') === undefined ? 0 : cookie.get('basket').length);
        setIsDesktop(window.innerWidth > window.innerHeight);
    }, [])

  return (
    <div className="App">
        <Seo title="Всё на КПП КАМАЗ" description="Купить запчасти для КамАЗ по дешёвым ценам: редуктор, КПП, сцепление, кулиса, метизы, датчики, РТИ, подшипники, ZF" keywords="запчасти камаз, кпп камаз, коробка передач камаз, сцепление камаз, купить детали камаз, мост камаз, клапан камаз"/>
        <Image src='/imgs/kamazHeader.jpg' placeholder="blur" sizes="100vw" fill quality={100} style={{objectFit: "cover"}}/>

        {isPaused === false ? <div className="homeSearchInputCont">
            <input type="text" className="homeSearchInput" placeholder="Поиск..." onChange={event => {searchValue=event.target.value}}/>
            <div className="homeSearchImgCont" onClick={() => {window.location="/search?searchValue="+searchValue;setIsPaused(true)}}>
                <img src='/imgs/search.svg' alt="" className="homeSearchImg"/>
            </div>
        </div> : null }
        {isPaused === false ? <button className="catFloatingBtn"><Link href="/basket">
          <img src='/imgs/basket.svg' alt="" className="catFloatingBtnImg"/>
          <div className="catFloatingBtnTextCont">
            <p className="categoryBasketBtnText">{basketCount}</p>
          </div>
        </Link></button> : null }
        
        <div className="cont">
        {isPaused === false ? <div className="homeContainer">
            <h1 className="homeHeader">Запчасти для КАМАЗА</h1>
            <div className="catalogCardContHome">
            <div className={isDesktop ? "homeCardCont" : "homeMobileCardCont"}>
                <Link href="/about" className='noDec'><div className="homeCard">
                    <div className="homeCardImgCont">
                        <img src='/imgs/about.png' alt="" className="homeCardImg"/>
                    </div>
                    <h2 className="homeCardHeader">О нас</h2>
                </div></Link>
                <Link href="/catalog" className='noDec'><div className="homeCard">
                    <div className="homeCardImgCont">
                        <img src='/imgs/engine.png' alt="" className="homeCardImg"/>
                    </div>
                    <h2 className="homeCardHeader">Каталог</h2>
                </div></Link>
                <Link href="/repair" className='noDec'><div className="homeCard">
                    <div className="homeCardImgCont">
                        <img src='/imgs/repair.svg' alt="" className="homeCardImg"/>
                    </div>
                    <h2 className="homeCardHeader">Ремонт/сборка КПП</h2>
                </div></Link>
                <Link href="/contacts" className='noDec'><div className="homeCard">
                    <div className="homeCardImgCont">
                        <img src='/imgs/contacts.png' alt="" className="homeCardImg"/>
                    </div>
                    <h2 className="homeCardHeader">Контакты</h2>
                </div></Link>
            </div>
            </div>
        </div> : <div className="basketCenterTextCont">
        <p className="basketCenterText" style={{color: "white"}}>
          Товары загружаются
        </p>
      </div> }
        </div>
    </div>
  )
}
