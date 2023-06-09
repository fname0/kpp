import axios from 'axios';
import AdminProductCard from './AdminProductCard';
import { useEffect, useState } from 'react';

export default function AdminCards(props) {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
    axios.get(new URLSearchParams(window.location.search).get('cat') === null ? `https://db-lovat.vercel.app/api/getproducts.php` : `https://db-lovat.vercel.app/api/?cat=`+new URLSearchParams(window.location.search).get('cat')+`&start=0`)
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
            {products.length != 0 ? Object.entries(products).filter(name => searchValue.toLowerCase().split(' ').every(v => (name[1].title+" "+name[1].num).toLowerCase().includes(v))).map((product) => (
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