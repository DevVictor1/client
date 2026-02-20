import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((count, item) => count + item.quantity, 0);

  const navLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand">
          NexBite
        </Link>

        <div className="navbar__links">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/cart" className={navLinkClass}>
            Cart <span className="badge">{totalItems}</span>
          </NavLink>
          <NavLink to="/login" className={navLinkClass}>
            Login
          </NavLink>
          <NavLink to="/signup" className={navLinkClass}>
            Signup
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

