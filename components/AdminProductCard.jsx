export default function AdminProductCard(props) {
    const tryRequire = () => {
        try {
            require('../public/productImg/'+props.id+'.png');
            return '/productImg/'+props.id+".png";
        } catch (err) {
            return '/imgs/noImg.svg';
        }
    };

    return (
        <div className={props.out === "True" ? "productCardOut":"productCard"} onClick={() => {window.location="vyrvisIzTelaVEtotOgromniiMir?id="+props.id}}>
            <div className="productImgCont">
                <img src={tryRequire()} alt="" className="productCardImg"/>
            </div>
            <div className="productTextCont">
                <p className="productTitle">{props.title}</p>
                <p className="productText productNum">{props.num}</p>
                <p className="productPrice">{props.price}₽</p>
                <p className={props.out === "True" ? "productText productOut" : "productText productIn"}>{props.out === "True" ? "Нет в наличии" : "В наличии"}</p>
            </div>
        </div>
    )
}