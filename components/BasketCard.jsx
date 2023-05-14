import React, {useState} from "react";

function BasketCard(props) {
    const [count, setCount] = useState(props.count);
    const cookie = props.cookie;

    const tryRequire = () => {
        try {
            require('../public/productImg/'+props.id+'.png');
            return '/productImg/'+props.id+".png";
        } catch (err) {
            return '/imgs/noImg.svg';
        }
    };

    const countChange = (val) => {
        const productsCount = cookie.get('productsCount') === undefined ? {} : cookie.get('productsCount');
        productsCount[props.id] = val;
        cookie.set('productsCount', productsCount);
        props.change();
    }

    return (
        <div className="basketCard">
            <img src={tryRequire()} alt="" className="basketCardImg"/>
            <p className="basketCardTitle">{props.title}</p>
            <p className="basketCardNum">{props.num}</p>
            <p className="basketCardTitle">{props.price}₽{parseInt(count) === 1 ? null : "(" + props.price*count + ")"}</p>
            <div className="basketCountInputCont"><input type="text" className="basketCountInput" value={count} onChange={(event) => {setCount(event.target.value); countChange(event.target.value)}}/></div>
            <img src="/imgs/trash.svg" alt="" className="basketCardDelete" onClick={() => props.delete(props.id)}/>
        </div>
    )
}

export default BasketCard;