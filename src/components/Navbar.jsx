import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
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
          {isAuthenticated ? (
            <>
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/cart" className={navLinkClass}>
                Cart <span className="badge">{totalItems}</span>
              </NavLink>
              <NavLink to="/myorders" className={navLinkClass}>
                My Orders
              </NavLink>
              <span className="navbar__user">
                {user?.name ? `Hi, ${user.name}` : "Signed in"}
              </span>
              <button
                className="btn btn-danger btn-logout"
                onClick={() => {
                  const confirmed = window.confirm("Log out of your account?");
                  if (!confirmed) return;
                  logout();
                  navigate("/login");
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={navLinkClass}>
                Login
              </NavLink>
              <NavLink to="/register" className={navLinkClass}>
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
