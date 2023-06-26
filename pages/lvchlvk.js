import axios from "axios";

export default function Lvchlvk() {
    const doSomething = function (e) {
        const formData = new FormData();
        console.log(e)
        // formData.append('title', e.target[0].value);
        // formData.append('num', e.target[1].value);
        // formData.append('price', e.target[2].value);
        // formData.append('cat', {"Редуктор": "reductor", "КПП" :"kpp", "Сцепление(+кулиса)": "scepa", "Метиз(+датчики, РТИ)": "metiz", "Подшипник": "podshib", "ZF": "ZF"}[e.target[3].value]);
        // formData.append('out', e.target[4].checked); 
        // axios.post(`https://db-lovat.vercel.app/api/addproduct.php`, formData)
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
                        <p className="buyFormText">Артикул(если нет, поставь -):</p>
                        <input type="text" className="buyFormInput" required/>
                    </label>
                    <label>
                        <p className="buyFormText">Цена:</p>
                        <input type="text" className="buyFormInput" required/>
                    </label>
                    <label>
                        <p className="buyFormText">Категория:</p>
                        <input list="browsers" className="buyFormInput" required/>
                        <datalist id="browsers">
                            <option value="Редуктор"/>
                            <option value="КПП"/>
                            <option value="Сцепление(+кулиса)"/>
                            <option value="Метиз(+датчики, РТИ)"/>
                            <option value="Подшипник"/>
                            <option value="ZF"/>
                        </datalist>
                    </label>
                    <div>
                        <input type="checkbox" name="out" id="out" className="buyCheckbox"/>
                        <label htmlFor="agree" className="buyCheckboxText">В наличии</label>
                    </div>
                    <input accept="image/*" multiple type="file" name="" id=""/>
                    <button className="basketBuyBtn" type="submit">Добавить</button>
                </form>
            </div>
            </div>
        </div>
    )
}
