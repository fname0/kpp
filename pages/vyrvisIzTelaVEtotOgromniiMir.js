import React from 'react';
import axios from 'axios';

export default class vyrvisIzTelaVEtotOgromniiMir extends React.Component {
  state = {
    product: [],
    file: null
  }

  componentDidMount() {
    axios.get(`https://db-lovat.vercel.app/api/getproductinfo.php?id=`+new URLSearchParams(window.location.search).get('id'))
      .then(res => {
        const product = res.data;
        this.state.product = product;
        this.state.product.price = product.price;
        this.setState(this.state);
      })
  }

  launchData(state) {
    const formData = new FormData();
    formData.append('file', state.file);
    formData.append('product', JSON.stringify(state.product));
    axios.post(`https://db-lovat.vercel.app/api/setproductinfo.php`, formData)
  }

  deleteProduct() {
    axios.get(`https://db-lovat.vercel.app/api/deleteproduct.php?id=`+new URLSearchParams(window.location.search).get('id'));
  }

  render() {
    return (
        <div className="App">
            <div className="cont">
            <div className="adminChangeProductCont">
              {this.state.product.out === undefined ? this.state.product.out = false : null}
                <h1 className="homeHeader"><span role='textbox' type="text" contentEditable onBlur={(event) => {this.state.product.title=event.currentTarget.innerHTML}} suppressContentEditableWarning={true}>{this.state.product.title}</span></h1>
                <h1 className="homeHeader"><span role='textbox' type="text" contentEditable onBlur={(event) => {this.state.product.num=event.currentTarget.innerHTML}} suppressContentEditableWarning={true}>{this.state.product.num}</span></h1>
                <h1 className="homeHeader"><span role='textbox' type="text" contentEditable onBlur={(event) => {this.state.product.price=event.currentTarget.innerHTML}} suppressContentEditableWarning={true}>{this.state.product.price}</span>₽</h1>
                {this.state.product.out === "False" ? <h1 className="homeHeader"><input type="checkbox" name="" id="" className={"fullCheckbox"} checked onChange={() => {this.state.product.out = "True";this.setState(this.state)}}/> В наличии</h1> 
                : <h1 className="homeHeader"><input type="checkbox" name="" id="" className={"fullCheckbox"} onChange={() => {this.state.product.out = "False";this.setState(this.state)}}/> Не в наличии</h1>}
                <h1 className='homeHeader'><input accept="image/*" multiple type="file" name="" id="" onChange={e => {this.state.file = e.target.files[0];this.setState(this.state)}} /></h1>
            </div>
            <div className="adminChangeProductCont">
              <button className="basketBuyBtn" onClick={() => this.launchData(this.state)}>Изменить</button>
              <button className="productDeleteBtn" onClick={() => this.deleteProduct()}>Удалить</button>
            </div>
            </div>
        </div>
    );
  }
}