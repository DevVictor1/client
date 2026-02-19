import React from 'react'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from "../context/CartContext";

const Navbar = () => {
    const { cart } = useContext(CartContext);

    return (
        <nav style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#020617",
    boxShadow: "0 2px 10px rgba(0,0,0,0.5)"
}}>

            <h2>Food Delivery App</h2>
            <div style={{display: "flex", gap: "20px", alignItems: "center", color: "#e6e8ed"}}>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>Cart({cart.length})</Link>
                <Link to="/login" style={linkStyle}>Login</Link>
                <Link to="/signup" style={linkStyle}>Signup</Link>
            </div>
        </nav>
    )
}

const linkStyle = {
    textDecoration: "none",
    color: "#e6e8ed",
    fontWeight: "bold"
}

export { linkStyle }
export default Navbar

