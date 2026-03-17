import React, { useContext, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import FoodData from "../data/FoodData";
import FoodCard from "../components/FoodCard";
import { CartContext } from "../context/CartContext";
import { ToastContext } from "../context/ToastContext";

const Home = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { showToast } = useContext(ToastContext);
  const menuRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = FoodData.slice(0, 3);
  const categories = useMemo(() => {
    const unique = new Set(
      FoodData.map((food) => food.category).filter(Boolean)
    );
    return ["All", ...unique];
  }, []);

  const filteredFoods =
    activeCategory === "All"
      ? FoodData
      : FoodData.filter((food) => food.category === activeCategory);

  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleAddFromHero = (food) => {
    addToCart(food);
    showToast(`${food.name} added to cart.`);
  };

  return (
    <section className="container page">
      <header className="home-hero">
        <div className="home-hero__content">
          <p className="hero-kicker">NexBite Prime Delivery</p>
          <h1 className="hero-title">
            Premium meals, delivered fast across Ogbomosho.
          </h1>
          <p className="page-subtitle">
            Curated kitchens, real-time tracking, and a concierge-grade ordering
            experience.
          </p>
          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => {
                setActiveCategory("All");
                scrollToMenu();
              }}
            >
              Start an Order
            </button>
            <button className="btn btn-secondary" onClick={() => navigate("/myorders")}>
              Track Orders
            </button>
          </div>
          <div className="hero-stats">
            <div>
              <p className="hero-stat__value">30 min</p>
              <p className="hero-stat__label">Average delivery</p>
            </div>
            <div>
              <p className="hero-stat__value">4.9★</p>
              <p className="hero-stat__label">Customer rating</p>
            </div>
            <div>
              <p className="hero-stat__value">120+</p>
              <p className="hero-stat__label">Partner kitchens</p>
            </div>
          </div>
        </div>
        <div className="home-hero__card">
          <p className="hero-card__title">Chef's Picks</p>
          {featured.map((food) => (
            <div key={food.id} className="hero-card__item">
              <img src={food.image} alt={food.name} />
              <div>
                <p className="hero-card__name">{food.name}</p>
                <p className="hero-card__meta">Ready in 20-30 mins</p>
              </div>
              <button
                className="btn btn-secondary hero-card__action"
                onClick={() => handleAddFromHero(food)}
              >
                Add
              </button>
            </div>
          ))}
          <button
            className="btn btn-primary"
            onClick={() => {
              setActiveCategory("All");
              scrollToMenu();
            }}
          >
            View Menu
          </button>
        </div>
      </header>

      <section className="home-trust">
        <div className="trust-item">
          <p className="trust-title">Verified kitchens</p>
          <p className="page-subtitle">Strict hygiene and quality checks.</p>
        </div>
        <div className="trust-item">
          <p className="trust-title">Live tracking</p>
          <p className="page-subtitle">Know exactly when your meal arrives.</p>
        </div>
        <div className="trust-item">
          <p className="trust-title">Priority support</p>
          <p className="page-subtitle">Fast help when you need it.</p>
        </div>
      </section>

      <section className="home-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Browse by Category</h2>
            <p className="page-subtitle">Find your craving in one tap.</p>
          </div>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setActiveCategory("All");
              scrollToMenu();
            }}
          >
            View all
          </button>
        </div>
        <div className="category-pills">
          {categories.map((category) => (
            <button
              key={category}
              className={`pill${activeCategory === category ? " is-active" : ""}`}
              onClick={() => {
                setActiveCategory(category);
                scrollToMenu();
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Best Sellers</h2>
            <p className="page-subtitle">Top dishes loved by NexBite members.</p>
          </div>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setActiveCategory("All");
              scrollToMenu();
            }}
          >
            See all
          </button>
        </div>
        <div className="featured-row">
          {FoodData.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">All Meals</h2>
            <p className="page-subtitle">Fresh picks, fast delivery, no compromises.</p>
          </div>
        </div>
      </section>

      <div className="menu-grid" ref={menuRef}>
        {filteredFoods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </section>
  );
};

export default Home;
