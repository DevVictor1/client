import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ToastContext } from "../context/ToastContext";
import api from "../services/api";
import formatCurrency from "../utils/formatCurrency";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const { showToast } = useContext(ToastContext);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleOrder = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsLoading(true);
    try {
      await api.post("/api/orders", {
        items: cart,
        totalAmount,
      });
      clearCart();
      setSuccess(true);
      showToast("Order placed successfully!");
    } catch (error) {
      console.error("Checkout error:", error);
      showToast("Failed to place order. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container checkout-layout">
      {success ? (
        <div className="surface success-card">
          <h1 className="page-title">Order placed successfully</h1>
          <p className="page-subtitle">
            Your meal is now being prepared and will be on its way soon.
          </p>
          <Link to="/" className="muted-link">
            Back to Menu
          </Link>
        </div>
      ) : (
        <form className="surface form-card" onSubmit={handleOrder}>
          <header className="page-header">
            <h1 className="page-title">Checkout</h1>
            <p className="page-subtitle">
              Enter delivery details to complete your order.
            </p>
          </header>

          <label className="form-group">
            <span className="form-label">Full Name</span>
            <input className="input-field" type="text" placeholder="Jane Doe" required />
          </label>
          <label className="form-group">
            <span className="form-label">Address</span>
            <input
              className="input-field"
              type="text"
              placeholder="123 Main Street"
              required
            />
          </label>
          <label className="form-group">
            <span className="form-label">Phone Number</span>
            <input
              className="input-field"
              type="text"
              placeholder="+1 555 123 4567"
              required
            />
          </label>

          <div className="summary-line">
            <span>Total</span>
            <span>{formatCurrency(totalAmount)}</span>
          </div>

          <button
            className="btn btn-primary"
            type="submit"
            disabled={cart.length === 0 || isLoading}
          >
            {isLoading ? "Placing order..." : "Place Order"}
          </button>

          {cart.length === 0 && (
            <p className="page-subtitle">Your cart is empty.</p>
          )}
        </form>
      )}
    </section>
  );
}

export default Checkout;
