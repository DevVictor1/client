import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import formatCurrency from "../utils/formatCurrency";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);
  const navigate = useNavigate();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <section className="container page">
      <header className="page-header">
        <h1 className="page-title">Your Cart</h1>
        <p className="page-subtitle">Review your order before checkout.</p>
      </header>

      {cart.length === 0 ? (
        <div className="surface empty-state">
          <h2>Your cart is empty</h2>
          <p className="page-subtitle">
            Add something from the menu to start your order.
          </p>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Browse Menu
          </button>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="surface cart-items">
            {cart.map((item) => (
              <article key={item.id} className="cart-item">
                <div>
                  <p className="cart-item__title">{item.name}</p>
                  <p className="cart-item__price">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>

                <div className="qty-control">
                  <button
                    className="btn btn-icon"
                    onClick={() => decreaseQty(item.id)}
                    aria-label={`Decrease quantity for ${item.name}`}
                  >
                    -
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="btn btn-icon"
                    onClick={() => increaseQty(item.id)}
                    aria-label={`Increase quantity for ${item.name}`}
                  >
                    +
                  </button>
                </div>

                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </article>
            ))}
          </div>

          <aside className="surface cart-summary">
            <h2 className="food-name">Order Summary</h2>
            <p className="summary-line">
              <span>Items</span>
              <span>{totalItems}</span>
            </p>
            <p className="summary-line">
              <span>Delivery</span>
              <span>{formatCurrency(0)}</span>
            </p>
            <div className="summary-total">
              <span>Total</span>
              <span>{formatCurrency(totalPrice)}</span>
            </div>

            <button
              className="btn btn-primary"
              style={{ width: "100%" }}
              onClick={handleCheckout}
              disabled={cart.length === 0}
            >
              Proceed to Checkout
            </button>
          </aside>
        </div>
      )}
    </section>
  );
};

export default Cart;
