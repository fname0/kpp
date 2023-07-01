import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import Link from "next/link";
import CatalogCards from "../../components/CatalogCards";
import Seo from "../../components/Seo";
import Image from 'next/image';

export default function ({products}) {
  const [step, setStep] = useState(32);
  const [curFirst, setCurFirst] = useState(0);
  const [productsToRender, setProductsToRender] = useState(Object.fromEntries(
    Object.entries(products).slice(curFirst, step)
  ));
  const router = useRouter();
  const [cookie, setCookies] = useState();
  const [basketCount, setBasketCount] = useState();
  const cat = useRouter().query.cat;
  const catName = {"reductor": "Редукторы", "kpp": "КПП", "scepa": "Сцепление(+кулиса)", "metiz": "Метизы(+датчики, РТИ)", "podshib": "Подшипники", "ZF": "ZF"};
  const {searchValue} = router.query;
  const [fetching, setFetching] = useState(0);
  
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    const cookie = new Cookies();
    setCookies(cookie);
    setBasketCount(cookie.get('basket') === undefined ? 0 : cookie.get('basket').length);
    if (!(['iPad Simulator','iPhone Simulator','iPod Simulator','iPad','iPhone','iPod'].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document))) {setTimeout(() => {setStep(128);
    setProductsToRender(Object.fromEntries(Object.entries(products).slice(curFirst, 128)))}, 100);}
    return function () {
      document.removeEventListener('scroll', scrollHandler)
    };
  }, [])

  useEffect(() => {
    if (fetching === 1 && Object.keys(Object.fromEntries(Object.entries(products).slice(curFirst+(step/2), curFirst+(step/2*3)))).length !== 0) {
      setFetching(3)
      if (Object.keys(products).length > curFirst+(step/2*3)) {
        setCurFirst(curFirst+step/2);
        setProductsToRender(Object.fromEntries(Object.entries(products).slice(curFirst+(step/2)-1, curFirst+(step/2*3)-1)));
      }
      else {
        setCurFirst(Object.keys(products).length-1-step);
        setProductsToRender(Object.fromEntries(Object.entries(products).slice(Object.keys(products).length-1-step, Object.keys(products).length-1)));
      }
      setTimeout(()=>{setFetching(0)}, 500);
      if (step === 32) window.scroll(0, document.getElementById('productCardCont').scrollHeight/3);
    }
  }, [fetching])

  const addBasket = (id, isClicked, setIsClicked) => {
    let basket = cookie.get('basket') ? cookie.get('basket') : [];
    if (!basket.includes(id) && !isClicked) {basket = basket.concat(id); setIsClicked(true); setBasketCount(basketCount+1);}
    if (basket.includes(id) && isClicked) {basket.splice(basket.indexOf(id), 1); setIsClicked(false); setBasketCount(basketCount-1);}
    if (basket.length !== 0) cookie.set('basket', basket);
    else cookie.remove('basket');
  }

  const scrollHandler = (e) => {
    if (Object.keys(products).length <= step) return;
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 50 && productsToRender[Object.keys(productsToRender)[Object.keys(productsToRender).length-1]].id !== products[Object.keys(products)[Object.keys(products).length-1]].id)
    {
      // setContHeight(document.getElementById('productCardCont').scrollHeight);
      setFetching(1);
    }
  }

  return (
    <div className="App">
        <Seo title={catName[cat]+" на КАМАЗ"} description={"Купить "+catName[cat].toLowerCase()+" на КАМАЗ"} keywords={"запчасти камаз, купить запчасти камаз, "+catName[cat].toLowerCase()+", "+"купить "+catName[cat].toLowerCase()}/>
        <div style={{position:"fixed",width:"100vw",height:"100vh"}}><Image src='/imgs/kamazHeader.jpg' placeholder="blur" sizes="100vw" fill quality={100} style={{objectFit: "cover"}}/></div>

        {fetching === 3 ? null : <button className="contactsFloatingBtn"><Link href="/">
          <img src='/imgs/home.svg' alt="" className="contactsFloatingBtnImg"/>
        </Link></button> }
        {fetching === 3 ? null : <button className="catFloatingBtn"><Link href="/basket">
          <img src='/imgs/basket.svg' alt="" className="catFloatingBtnImg"/>
          <div className="catFloatingBtnTextCont">
            <p className="categoryBasketBtnText">{basketCount}</p>
          </div>
        </Link></button> }
        {fetching === 3 ? <div className="cont">
      <div className="basketCenterTextCont">
        <p className="basketCenterText" style={{color: "white"}}>
          Товары загружаются
        </p>
      </div>
      </div>
        : <div className="categoryCont">
            <h1 className="homeHeader">{catName[cat]}</h1>
            <CatalogCards cat={cat} addBasket={addBasket} products={productsToRender} searchValue={searchValue}/>
        </div> }
    </div>
  )
}

export async function getServerSideProps(content) {
    const cat = content.query['cat'];
    const response = await fetch(cat == "all" ? `https://db-lovat.vercel.app/api/getproducts.php` : `https://db-lovat.vercel.app/api/?cat=`+cat+`&start=0`);
    const products = await response.json();
    return {
        props: {products},
    };
}
