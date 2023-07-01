import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import Link from "next/link";
import CatalogCards from "../../components/CatalogCards";
import Seo from "../../components/Seo";
import Image from 'next/image';

export default function ({products}) {
  let IOS = undefined;
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
    IOS = ['iPad Simulator','iPhone Simulator','iPod Simulator','iPad','iPhone','iPod'].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
    if (!IOS) {setTimeout(() => {setStep(128);
    setProductsToRender(Object.fromEntries(Object.entries(products).slice(curFirst, 128)))}, 100);}
    return function () {
      document.removeEventListener('scroll', scrollHandler)
    };
  }, [])

  useEffect(() => {
    if (fetching === 1 && Object.keys(Object.fromEntries(Object.entries(products).slice(curFirst+(step/2), curFirst+(step/2*3)))).length !== 0) {
      console.log(Object.keys(products).length)
      if (Object.keys(products).length > curFirst+(step/2*3)) {
        setCurFirst(curFirst+step/2);
        setProductsToRender(Object.fromEntries(Object.entries(products).slice(curFirst+(step/2), curFirst+(step/2*3))));
      }
      else {
        setCurFirst(Object.keys(products).length-1-step);
        setProductsToRender(Object.fromEntries(Object.entries(products).slice(Object.keys(products).length-1-step, Object.keys(products).length-1)));
      }
      location.href="#"+products[curFirst+(step/2)-1].id;
    }
    setFetching(0);
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
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 10 && productsToRender[Object.keys(productsToRender)[Object.keys(productsToRender).length-1]].id !== products[Object.keys(products)[Object.keys(products).length-1]].id)
    {
      setFetching(1);
    }
  }

  return (
    <div className="App">
        <Seo title={catName[cat]+" на КАМАЗ"} description={"Купить "+catName[cat].toLowerCase()+" на КАМАЗ"} keywords={"запчасти камаз, купить запчасти камаз, "+catName[cat].toLowerCase()+", "+"купить "+catName[cat].toLowerCase()}/>
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
        <div className="categoryCont">
            <h1 className="homeHeader">{catName[cat]}</h1>
            <CatalogCards cat={cat} addBasket={addBasket} products={productsToRender} searchValue={searchValue}/>
        </div>
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
