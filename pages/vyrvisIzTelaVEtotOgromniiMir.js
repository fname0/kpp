import axios from 'axios';
import { useEffect, useState } from 'react';

export default function AdminChangeProduct() {
  const [product, setProduct] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    axios.get(`https://db-lovat.vercel.app/api/getproductinfo.php?id=`+new URLSearchParams(window.location.search).get('id'))
      .then(res => {
        setProduct(res.data);
      })
  }, [])

    const launchData = () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('product', JSON.stringify(product));
        axios.post(`https://db-lovat.vercel.app/api/setproductinfo.php`, formData)
    }

    return (
        <div className="App">
            <div className="cont">
            <div className="adminChangeProductCont">
                {console.log("reload")}
                {product.out === undefined ? product.out = false : null}
                <h1 className="homeHeader"><span role='textbox' type="text" contentEditable onBlur={(event) => {product.title=event.currentTarget.innerHTML}} suppressContentEditableWarning={true}>{product.title}</span></h1>
                <h1 className="homeHeader"><span role='textbox' type="text" contentEditable onBlur={(event) => {product.num=event.currentTarget.innerHTML}} suppressContentEditableWarning={true}>{product.num}</span></h1>
                <h1 className="homeHeader"><span role='textbox' type="text" contentEditable onBlur={(event) => {product.price=event.currentTarget.innerHTML}} suppressContentEditableWarning={true}>{product.price}</span>₽</h1>
                {product.out === "False" ? <h1 className="homeHeader"><input type="checkbox" name="" id="" className={"fullCheckbox"} checked onChange={() => {product.out = "True";console.log(product);setProduct(product);console.log(product)}}/> В наличии</h1> 
                : <h1 className="homeHeader"><input type="checkbox" name="" id="" className={"fullCheckbox"} onChange={() => {product.out = "False";setProduct(product)}}/> Не в наличии</h1>}
                <h1 className='homeHeader'><input accept="image/*" multiple type="file" name="" id="" onChange={e => {setFile(e.target.files[0])}} /></h1>
            </div>
            <button className="basketBuyBtn" onClick={() => launchData()}>Изменить</button>
            </div>
        </div>
    );
}