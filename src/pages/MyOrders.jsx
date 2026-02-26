import { useEffect, useState } from "react";
import api from "../services/api";
import formatCurrency from "../utils/formatCurrency";

function MyOrders() {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    fetchOrders();
}, []);

    const fetchOrders = async () => {
    try {
        const res = await api.get("/api/orders/myorders");

        setOrders(res.data);

    } catch (error) {
        console.log(error);
    } finally {
        setIsLoading(false);
    }
};

    return (
    <section className="container page">
        <header className="page-header">
        <h1 className="page-title">My Orders</h1>
        <p className="page-subtitle">Track your recent deliveries and totals.</p>
        </header>

    {isLoading ? (
        <p className="page-subtitle">Loading your orders...</p>
    ) : orders.length === 0 ? (
        <div className="surface empty-state">
            <h2>No orders yet</h2>
            <p className="page-subtitle">
            Your order history will show up here after checkout.
            </p>
        </div>
    ) : (
        orders.map((order) => (
            <div key={order._id} className="surface cart-item">
                <p>Total: {formatCurrency(order.totalAmount)}</p>
                <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
            </div>
        ))
    )}
    </section>
);
}

export default MyOrders;
