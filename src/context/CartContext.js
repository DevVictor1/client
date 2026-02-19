import { createContext, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    
    // Add to cart function
    const addToCart = (food) => {
        setCart((prev) => [...prev, food]);
    };

    // Remove from cart function
    const removeFromCart = (Id) => {
        setCart((prev) => prev.filter((item, index) => index !== Id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;