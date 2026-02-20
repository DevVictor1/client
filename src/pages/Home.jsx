import React from "react";
import FoodData from "../data/FoodData";
import FoodCard from "../components/FoodCard";

const Home = () => {
  return (
    <section className="container page">
      <header className="page-header">
        <h1 className="page-title">Food Menu</h1>
        <p className="page-subtitle">
          Fresh picks, fast delivery, and a premium ordering experience.
        </p>
      </header>

      <div className="menu-grid">
        {FoodData.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </section>
  );
};

export default Home;
