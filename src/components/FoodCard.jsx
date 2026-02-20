import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const FoodCard = ({ food }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <article className="surface food-card">
      <img src={food.image} alt={food.name} className="food-card__image" />

      <div className="food-card__meta">
        <h3 className="food-name">{food.name}</h3>
        <p className="food-price">NGN {food.price.toLocaleString()}</p>
      </div>

      <button className="btn btn-secondary" onClick={() => addToCart(food)}>
        Add to Cart
      </button>
    </article>
  );
};

export default FoodCard;
