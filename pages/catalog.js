import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function Catalog() {
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
        <div className="homeSearchInputCont">
            <input type="text" className="homeSearchInput" placeholder="Поиск..." onChange={event => {searchValue=event.target.value}}/>
            <div className="homeSearchImgCont" onClick={() => {window.location="/search?searchValue="+searchValue}}>
                <img src='/imgs/search.svg' alt="" className="homeSearchImg"/>
            </div>
        </div>
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
            <h1 className="homeHeader">Каталог</h1>
            <div className={isDesktop ? "homeCardCont" : "catalogCardCont"}>
                <Link href="/category/reductor" className='homeCard noDec'>
                    <div className="homeCardImgCont">
                        <img src='/imgs/reductor.svg' alt="" className="homeCardImg"/>
                    </div>
                    <h2 className="homeCardHeader">Редуктор</h2>
                </Link>
                <Link href="/category/kpp" className='homeCard noDec'>
                    <div className="homeCardImgCont">
                        <img src='/imgs/kpp.svg' alt="" className="homeCardImg"/>
                    </div>
                    <h2 className="homeCardHeader">КПП</h2>
                </Link>
                <Link href="/category/scepa" className='homeCard noDec'>
                    <div className="homeCardImgCont">
                        <img src='/imgs/scepa.svg' alt="" className="homeCardImg"/>
                    </div>
                    <h2 className="homeCardHeader">Сцепление</h2>
                    <p className="homeCardHeaderAdvanced">+кулиса</p>
                </Link>
                <Link href="/category/metiz" className='homeCard noDec'>
                    <div className="homeCardImgCont">
                        <img src='/imgs/metiz.svg' alt="" className="homeCardImg"/>
                    </div>
                    <h2 className="homeCardHeader">Метизы</h2>
                    <p className="homeCardHeaderAdvanced">+датчики, РТИ</p>
                </Link>
                <Link href="/category/podshib" className='homeCard noDec'>
                    <div className="homeCardImgCont">
                        <img src='/imgs/podshib.svg' alt="" className="homeCardImg"/>
                    </div>
                    <h2 className="homeCardHeader">Подшипники</h2>
                </Link>
                <Link href="/category/ZF" className='homeCard noDec'>
                    <div className="homeCardImgCont">
                        <img src='/imgs/ZF.svg' alt="" className="homeCardImg"/>
                    </div>
                    <h2 className="homeCardHeader">ZF</h2>
                </Link>
            </div>
        </div>
        </div>
    </div>
  )
}