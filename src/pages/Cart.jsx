import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty
} = useContext(CartContext);

    const navigate = useNavigate();

    const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
);

    return (
    <div className="container">
        <h1>🛒 Your Cart</h1>

        {cart.length === 0 ? (
        <p>Your cart is empty</p>
    ) : (
        <>
        {cart.map((item) => (
            <div key={item.id} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
                background: "#1e293b",
                padding: "10px",
                borderRadius: "8px"
            }}>
                <span>{item.name}</span>

            <div>
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
            </div>

              <span>₦{item.price * item.quantity}</span>

            <button onClick={() => removeFromCart(item.id)}>
                Remove
            </button>
            </div>
        ))}

        <div style={{
            marginTop: "20px",
            padding: "15px",
            background: "#020617",
            borderRadius: "10px"
        }}>
            <h2>Total: ₦{totalPrice}</h2>

            <button
                style={{ marginTop: "10px", width: "100%" }}
                onClick={() => navigate("/checkout")}
            >
                Proceed to Checkout
            </button>
            </div>
        </>
    )}
    </div>
);
}

export default Cart;