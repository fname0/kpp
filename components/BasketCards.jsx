import axios from 'axios';
import BasketCard from './BasketCard';
import React from 'react';

export default class BasketCards extends React.Component {
  state = {
    products: [],
    productsPriceSum: 0
  }

  componentDidMount() {
    axios.get(`https://db-lovat.vercel.app/api/basket.php?ids=`+this.props.ids)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
  }

  render() {
    const cookies = this.props.cookie;
    let isDeleted = false;
    const productsCount = cookies.get('productsCount') === undefined ? {} : cookies.get('productsCount');

    const deleteFromBasket = (id) => {
      this.state.productsPriceSum=0;
      this.setState(this.state);
      const ids = this.props.ids;
      ids.splice(ids.indexOf(id), 1);
      if (ids.length != 0) cookies.set('basket', ids);
      else {cookies.remove('basket'); isDeleted = true;}
      const products = this.state.products;
      products.splice(products.indexOf(products.find(item => item.id === id)), 1);
      this.state.products = products;
      this.setState(this.state);
      delete productsCount[id];
      cookies.set('productsCount', productsCount);
    }

    const changeProductsPriceSum = () => {
      this.state.productsPriceSum=0;
      this.setState(this.state);
    }

    return (
        <div className="basketCardCont">
            {this.state.products.length != 0 ? Object.entries(this.state.products).map((product) => (
				<BasketCard
					key={product[1].id}
          id={product[1].id}
          num={product[1].num}
					title={product[1].title}
					price={product[1].price}
          cookie={cookies}
          delete={deleteFromBasket}
          count={productsCount[product[1].id] === undefined ? 1 : productsCount[product[1].id]}
          change={changeProductsPriceSum}
				/>
			)) : cookies.get('basket') ? "Секунду, товары грузятся..." : "Вы удалили все товары из корзины"}
      {this.state.products.forEach(product => {
        this.state.productsPriceSum+=parseInt(product.price*(productsCount[product.id] === undefined ? 1 : productsCount[product.id]));
      })}
        {cookies.get('basket') ?
        <p className='basketSumText'>Всего: {this.state.productsPriceSum}₽</p> : null }
        {cookies.get('basket') ?
        <button className="basketBuyBtn" onClick={() => {cookies.set('productsPriceSum', this.state.productsPriceSum); window.location = "/buy"}}>Оформить</button> : null }
        </div>
    );
  }
}
