import Cookies from "universal-cookie";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Lvchlvk() {
    const [basketCount, setBasketCount] = useState();

    useEffect(() => {
        const cookie = new Cookies();
        setBasketCount(cookie.get('basket') === undefined ? 0 : cookie.get('basket').length);
    }, [])

    const doSomething = function (e) {
        const formData = new FormData();
        formData.append('title', e.target[0].value);
        formData.append('num', e.target[1].value);
        formData.append('price', e.target[2].value);
        formData.append('out', e.target[3].checked);
        axios.post(`https://db-lovat.vercel.app/api/addproduct.php`, formData)
        // window.location.href = "/greetings";
        e.preventDefault();
    }

    return (
        <div className="App">
            <div className="cont">
            <div className="homeContainer">
                <h1 className="homeHeader">Добавление товара</h1>
                <form action="#" onSubmit={doSomething} className="buyFormCont">
                    <label>
                        <p className="buyFormText">Название товара:</p>
                        <input type="text" className="buyFormInput" required/>
                    </label>
                    <label>
                        <p className="buyFormText">Артикул:</p>
                        <input type="text" className="buyFormInput"/>
                    </label>
                    <label>
                        <p className="buyFormText">Цена:</p>
                        <input type="text" className="buyFormInput"/>
                    </label>
                    <label>
                        <p className="buyFormText">Категория:</p>
                        <input list="browsers" className="buyFormInput"/>
                        <datalist id="browsers">
                            <option value="Редуктор"/>
                            <option value="КПП"/>
                            <option value="Сцепление(+кулиса)"/>
                            <option value="Метизы(+датчики, РТИ)"/>
                            <option value="Подшипники"/>
                            <option value="ZF"/>
                        </datalist>
                    </label>
                    <div>
                        <input type="checkbox" name="out" id="out" className="buyCheckbox"/>
                        <label htmlFor="agree" className="buyCheckboxText">В наличии</label>
                    </div>
                    <button className="basketBuyBtn" type="submit">Добавить</button>
                </form>
            </div>
            </div>
        </div>
    )
}
