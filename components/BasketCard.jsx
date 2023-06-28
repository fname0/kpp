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
        <div className={props.deleted === "0" ? props.out === "False" ? "basketCard" : "basketCardDel" : "basketCardDel"}>
            <img src={tryRequire()} alt="" className="basketCardImg"/>
            <p className="basketCardTitle">{props.title}</p>
            <p className="basketCardNum">{props.num}</p>
            {props.deleted === "0" ? props.out === "False" ? <p className="basketCardTitle">{props.price}₽{parseInt(count) === 1 ? null : "(" + props.price*count + ")"}</p> : null : null }
            {props.deleted === "0" ? props.out === "False" ? <div className="basketCountInputCont"><input type="number" className="basketCountInput" value={count} onChange={(event) => {if (event.target.value > 0 && event.target.value <= 1000) {setCount(event.target.value); countChange(event.target.value)}}}/></div> :
            <p className="basketCardTitle">товар закончился</p>:
            <p className="basketCardTitle">товар был удалён</p>
            }
            <img src="/imgs/trash.svg" alt="" className="basketCardDelete" onClick={() => props.delete(props.id)}/>
        </div>
    )
}

export default BasketCard;