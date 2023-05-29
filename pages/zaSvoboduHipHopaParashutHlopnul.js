import axios from 'axios';
import AdminCard from '../components/AdminCard';

export default class ZaSvoboduHipHopaParashutHlopnul extends React.Component {
  state = {
    orders: []
  }

  componentDidMount() {
    axios.get(`http://95.174.102.106:7474/getorders.php`)
      .then(res => {
        const orders = res.data;
        console.log(orders)
        this.setState({ orders });
      })
  }

  render() {
    const deleteOrder = (id) => {
      axios.get(`http://95.174.102.106:7474/deleteorder.php?id=`+id);
      const orders = this.state.orders;
      console.log(id);
      delete orders[id];
      this.state.orders = orders;
      this.setState(this.state);
    }

    const deleteOrderRepair = (id, rawId) => {
      axios.get(`http://95.174.102.106:7474/deleterepair.php?id=`+id);
      const orders = this.state.orders;
      console.log(rawId);
      delete orders[rawId];
      this.state.orders = orders;
      this.setState(this.state);
    }

    return (
        <div>
            {Object.entries(this.state.orders).map((order, i) => (
                <AdminCard key={order[1].raw_id} shiih={order[1]} deleteOrder={order[1].type === "product" ? deleteOrder : deleteOrderRepair}/>
            ))}
        </div>
    );
  }
}