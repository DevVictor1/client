import React from 'react'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const FoodCard = ({ food }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div style={{
            background: "#1e293b",
            padding: "15px",
            borderRadius: "12px",
            width: "200px",
            textAlign: "center",
            transition: "0.3s",
        }}>
            <img
        src={food.image}
        alt={food.name}
        style={{
        width: "100%",
        height: "130px",
        objectFit: "cover",
        borderRadius: "10px"
        }}
        />
            <h3>{food.name}</h3>
            <p>Price: ₦{food.price}</p>
            <button onClick={() => addToCart(food)}>Add to Cart</button>
        </div>
    );
}

export default FoodCard;