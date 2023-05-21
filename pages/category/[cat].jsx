import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import Link from "next/link";
import CatalogCards from "../../components/CatalogCards";

export default function ({products}) {
  const router = useRouter();
  const [cookie, setCookies] = useState();
  const [basketCount, setBasketCount] = useState();
  const cat = useRouter().query.cat;
  const catName = {"reductor": "Редукторы", "kpp": "КПП", "scepa": "Сцепление(+кулиса)", "metiz": "Метизы(+датчики, РТИ)", "podshib": "Подшипники", "ZF": "ZF"};
  const {searchValue} = router.query;
  
  useEffect(() => {
    const cookie = new Cookies();
    setCookies(cookie);
    setBasketCount(cookie.get('basket') === undefined ? 0 : cookie.get('basket').length);
    axios.get(`https://db-lovat.vercel.app/api/getAllProducts.php?cat=`+cat)
    .then(res => {
      products = res.data
    })
  }, [])

  const addBasket = (id, isClicked, setIsClicked) => {
    let basket = cookie.get('basket') ? cookie.get('basket') : [];
    if (!basket.includes(id) && !isClicked) {basket = basket.concat(id); setIsClicked(true); setBasketCount(basketCount+1);}
    if (basket.includes(id) && isClicked) {basket.splice(basket.indexOf(id), 1); setIsClicked(false); setBasketCount(basketCount-1);}
    if (basket.length !== 0) cookie.set('basket', basket);
    else cookie.remove('basket');
  }

  return (
    <div className="App">
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
            <CatalogCards cat={cat} addBasket={addBasket} products={products} searchValue={searchValue}/>
        </div>
    </div>
  )
}

export async function getServerSideProps(content) {
    const cat = content.query['cat'];
    const response = await fetch(cat == "all" ? `https://db-lovat.vercel.app/api/getproducts.php` : `https://db-lovat.vercel.app/api/?cat=`+cat);
    const products = await response.json();
    return {
        props: {products},
    };
}
