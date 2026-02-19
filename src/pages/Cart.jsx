import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className="container">
        <h1>🛒 Your Cart</h1>

        {cart.length === 0 ? (
            <p>No items in your cart.</p>
        ) : (
            cart.map((item, index) => (
                <div key={index} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "#1e293b",
                    padding: "10px",
                    borderRadius: "8px",
                    marginBottom: "10px"
                }}>
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                    <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
        ))
        )}
        </div>
    );
}

export default Cart;