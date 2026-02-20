import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
    const { clearCart } = useContext(CartContext);
    const [success, setSuccess] = useState(false);

    const handleOrder = (e) => {
    e.preventDefault();

    clearCart(); // CLEAR CART
    setSuccess(true); // SHOW MESSAGE
};

return (
    <div className="container">
        <h1>💳 Checkout</h1>

        {success ? (
        <div style={{
            background: "#16a34a",
            padding: "15px",
            borderRadius: "10px"
        }}>
            <h2>✅ Order placed successfully!</h2>
        </div>
    ) : (
        <form onSubmit={handleOrder} style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxWidth: "400px"
        }}>
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Address" required />
            <input type="text" placeholder="Phone Number" required />

            <button type="submit">Place Order</button>
        </form>
    )}
    </div>
);
}

export default Checkout;