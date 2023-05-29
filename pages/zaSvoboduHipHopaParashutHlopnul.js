import axios from 'axios';
import AdminCard from '../components/AdminCard';
import { useEffect, useState } from 'react';

export default function ZaSvoboduHipHopaParashutHlopnul() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
    axios.get(`http://95.174.102.106:7474/getorders.php`)
        .then(res => {
            setOrders(res.data);
        })
    }, [])

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