import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Cookies from 'universal-cookie';

export default function CatalogCards(props) {
  let searchValueInput = '';
  const [searchValue, setSearchValue] = useState('');
  const [basket, setBasket] = useState([]);
  const products = props.products;

  useEffect(() => {
    const cookie = new Cookies;
    if (new URLSearchParams(window.location.search).get('searchValue') !== null) setSearchValue(new URLSearchParams(window.location.search).get('searchValue'));
    setBasket(cookie.get('basket') ? cookie.get('basket') : []);
  }, [])

  return (
      <div className="productCardCont" id="productCardCont">
        <div className="catSearchInputCont">
            <input type="text" className="homeSearchInput" defaultValue={searchValue === undefined ? null : searchValue} placeholder={"Поиск..."} onChange={(event) => {searchValueInput=event.target.value}}/>
            <div className="homeSearchImgCont" onClick={() => {setSearchValue(searchValueInput)}}>
                <img src="/imgs/search.svg" alt="" className="homeSearchImg"/>
            </div>
        </div>
          {Object.entries(products).filter(name => searchValue.toLowerCase().split(' ').every(v => (name[1].title+" "+name[1].num).toLowerCase().includes(v))).map((product) => (
      <ProductCard
        addBasket={props.addBasket}
        key={product[1].id}
        id={product[1].id}
        out={product[1].out}
        num={product[1].num}
        title={product[1].title}
        price={product[1].price}
        isClicked={basket.includes(product[1].id)}
      />
    ))}
      </div>
  );
}