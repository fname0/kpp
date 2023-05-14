import Cookies from "universal-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";
import BasketCards from "../components/BasketCards";

export default function Basket() {
    const [cookie, setCookies] = useState();

    useEffect(() => {
        const cookie = new Cookies();
        setCookies(cookie);
      }, [])

  return (
    <div className="App">
        <button className="contactsFloatingBtn"><Link href="/">
          <img src='/imgs/home.svg' alt="" className="contactsFloatingBtnImg"/>
        </Link></button>
        <div className="basketCont">
            <h1 className="homeHeader">Корзина</h1>
            {typeof cookie === 'undefined' ? null : cookie.get('basket') ? 
            <BasketCards ids={cookie.get('basket')} cookie={cookie}/>
            :
            <div className="basketCenterTextCont">
              <p className="basketCenterText">
                Товаров в корзине нет.
              </p>
            </div>
}
        </div>
    </div>
  )
}