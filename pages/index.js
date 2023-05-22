import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import MainContainer from '../../components/MainContainer';

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
    <MainContainer>
    <div className="App">
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
    </MainContainer>
  )
}
