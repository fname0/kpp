import { useEffect, useState } from "react";
import CatalogCards from "../components/CatalogCards";
import Cookies from "universal-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";
import Image from 'next/image';

export default function Search({products}) {
    const router = useRouter();
    const [basketCount, setBasketCount] = useState();
    const [cookie, setCookies] = useState();
    const {searchValue} = router.query;
    const [productsToRender, setProductsToRender] = useState(Object.fromEntries(
      Object.entries(products).slice(0, 32)
    ));

    useEffect(() => {
        const cookie = new Cookies();
        setCookies(cookie);
        setBasketCount(cookie.get('basket') === undefined ? 0 : cookie.get('basket').length);
        setTimeout(() => {setProductsToRender(products)}, 100);
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
        <Seo title="Поиск товара|Всё на КПП" description="Искать нужный товар в магазине «Всё на КПП»" keywords="запчасти камаз, купить запчасти камаз, всё на кпп, поиск товара, каталог, каталог товаров, купить кпп, купить детали камаз, детали камаз"/>
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
            <h1 className="homeHeader">Поиск</h1>
            <CatalogCards cat={"all"} searchValue={searchValue} products={productsToRender} addBasket={addBasket} cookie={cookie}/>
        </div>
    </div>
  )
}

export async function getStaticProps() {
    const response = await fetch(`https://db-lovat.vercel.app/api/getproducts.php`);
    const products = await response.json();
    return {
        props: {products},
    };
}
