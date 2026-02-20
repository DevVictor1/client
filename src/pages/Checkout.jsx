import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { clearCart } = useContext(CartContext);
  const [success, setSuccess] = useState(false);

  const handleOrder = (e) => {
    e.preventDefault();
    clearCart();
    setSuccess(true);
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

          <button className="btn btn-primary" type="submit">
            Place Order
          </button>
        </form>
      )}
    </section>
  );
}

export default Checkout;
