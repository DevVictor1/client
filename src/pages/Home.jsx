import React from "react";
import FoodData from "../data/FoodData";
import FoodCard from "../components/FoodCard";

const Home = () => {
    return (
        <div className="container">
            <h1>🍽️ Food Menu</h1>

<div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px"
                        }}>
    {FoodData.map((food) => (
        <FoodCard key={food.id} food={food} />
    ))}
</div>
</div>

    )
}

export default Home;