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
        delete orders[id];
        setOrders(orders);
    }

    const deleteOrderRepair = (id, rawId) => {
        axios.get(`http://95.174.102.106:7474/deleterepair.php?id=`+id);
        delete orders[rawId];
        setOrders(orders);
    }

    return (
        <div>
            {Object.entries(this.state.orders).map((order, i) => (
                <AdminCard key={order[1].raw_id} shiih={order[1]} deleteOrder={order[1].type === "product" ? deleteOrder : deleteOrderRepair}/>
            ))}
        </div>
    );
}