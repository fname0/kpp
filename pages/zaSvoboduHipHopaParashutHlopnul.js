import axios from 'axios';
import AdminCard from '../components/AdminCard';
import { useEffect, useState } from 'react';

export default function ZaSvoboduHipHopaParashutHlopnul() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
    axios.get(`https://db-lovat.vercel.app/api/getorders.php`)
        .then(res => {
            setOrders(res.data);
        })
    }, [])

    const deleteOrder = (id) => {
        axios.get(`https://db-lovat.vercel.app/api/deleteorder.php?id=`+id);
        delete orders[id];
        setOrders(orders);
    }

    const deleteOrderRepair = (id, rawId) => {
        axios.get(`https://db-lovat.vercel.app/api/deleterepair.php?id=`+id);
        delete orders[rawId];
        setOrders(orders);
    }

    return (
        <div>
            {orders === [] ? null : Object.entries(orders).map((order) => (
                <AdminCard key={order[1].raw_id} shiih={order[1]} deleteOrder={order[1].type === "product" ? deleteOrder : deleteOrderRepair}/>
            ))}
        </div>
    );
}