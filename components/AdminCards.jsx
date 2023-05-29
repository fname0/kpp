import axios from 'axios';
import AdminProductCard from './AdminProductCard';
import { useEffect, useState } from 'react';

export default function AdminCards(props) {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
    axios.get(`https://db-lovat.vercel.app/api/getproducts.php`)
        .then(res => {
            setProducts(res.data);
        })
    }, [])

    let searchValueInput = "";

    return (
        <div className="productCardCont">
            <div className="catSearchInputCont">
            <input type="text" className="homeSearchInput" placeholder="Поиск..." onChange={(event) => {searchValueInput=event.target.value}}/>
            <div className="homeSearchImgCont" onClick={() => {setSearchValue(searchValueInput)}}>
                <img src="/imgs/search.svg" alt="" className="homeSearchImg"/>
            </div>
        </div>
            {products.length != 0 ? Object.entries(products).filter(name => name[1].title.match(new RegExp(searchValue, "i"))).map((product) => (
                <AdminProductCard
                    addBasket={props.addBasket}
                    key={product[1].id}
                    id={product[1].id}
                    out={product[1].out}
                    num={product[1].num}
                    title={product[1].title}
                    price={product[1].price}
                />
            )) : "Секунду, товары грузятся..."}
        </div>
    );
}