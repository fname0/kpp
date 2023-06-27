import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import Seo from '../components/Seo';
import Image from 'next/image';

export default function Index() {
    const [basketCount, setBasketCount] = useState();
    const [isDesktop, setIsDesktop] = useState(false);
    let searchValue = "";

    useEffect(() => {
        const cookie = new Cookies();
        setBasketCount(cookie.get('basket') === undefined ? 0 : cookie.get('basket').length);
        setIsDesktop(window.innerWidth > window.innerHeight);
    }, [])

  return (
    <div className="App">
        <Seo title="Всё на КПП КАМАЗ" description="Купить запчасти для КамАЗ по дешёвым ценам: редуктор, КПП, сцепление, кулиса, метизы, датчики, РТИ, подшипники, ZF" keywords="запчасти камаз, кпп камаз, коробка передач камаз, сцепление камаз, купить детали камаз, мост камаз, клапан камаз"/>
        <Image src='/imgs/kamazHeader.jpg' blurDataURL='data:image/png;base64,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' placeholder="blur" sizes="100vw" fill quality={100} style={{objectFit: "cover"}}/>

        <div className="homeSearchInputCont">
            <input type="text" className="homeSearchInput" placeholder="Поиск..." onChange={event => {searchValue=event.target.value}}/>
            <div className="homeSearchImgCont" onClick={() => {window.location="/search?searchValue="+searchValue}}>
                <img src='/imgs/search.svg' alt="" className="homeSearchImg"/>
            </div>
        </div>
        <button className="catFloatingBtn"><Link href="/basket">
          <img src='/imgs/basket.svg' alt="" className="catFloatingBtnImg"/>
          <div className="catFloatingBtnTextCont">
            <p className="categoryBasketBtnText">{basketCount}</p>
          </div>
        </Link></button>
        
        <div className="cont">
        <div className="homeContainer">
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
        </div>
        </div>
    </div>
  )
}
