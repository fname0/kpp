import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductCard(props) {
    const [isClicked, setIsClicked] = useState(props.isClicked);
    let isUpperBtnClicked = false;

    const tryRequire = () => {
        try {
            require('../public/productImg/'+props.id+'.png');
            return '/productImg/'+props.id+".png";
        } catch (err) {
            return '/imgs/noImg.svg';
        }
    };

    useEffect(()=>{
        setIsClicked(props.isClicked);
    },[props.isClicked])

    function addBasket(id) {
        if (props.out !== "True" && isUpperBtnClicked === false)
        {
            props.addBasket(id, isClicked, setIsClicked);
        }
    }

    return (
        <div className={props.out === "True" ? "productCardOut": isClicked ? "productCardPurchased":"productCard"} onClick={() => addBasket(props.id)}>
            <Link href={"/product/"+ props.id +"?isClicked="+isClicked}><img src="/imgs/about.png" alt="" className="infoImgProductCard" onClick={() => {isUpperBtnClicked=true}}/></Link>
            <div className="productImgCont">
                <img src={tryRequire()} alt="" className="productCardImg"/>
            </div>
            <div className="productTextCont">
                <p className="productTitle">{props.title}</p>
                <p className="productText productNum">{props.num}</p>
                <p className="productPrice">{props.price}₽</p>
                <p className={props.out === "True" ? "productText productOut" : "productText productIn"}>{props.out === "True" ? "Нет в наличии" : isClicked === true ? "Добавлено" : "В наличии"}</p>
            </div>
        </div>
    )
}