import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
    try {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
        return [];
    }
    });

    useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

  // ADD TO CART (with quantity)
    const addToCart = (food) => {
    const existingItem = cart.find(item => item.id === food.id);

    if (existingItem) {
        setCart(cart.map(item =>
        item.id === food.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
    } else {
        setCart([...cart, { ...food, quantity: 1 }]);
    }
    };

  // REMOVE ITEM COMPLETELY
    const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    };

  // INCREASE QUANTITY
    const increaseQty = (id) => {
    setCart(cart.map(item =>
        item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
    };

  // DECREASE QUANTITY
    const decreaseQty = (id) => {
    setCart(cart.map(item =>
        item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0));
    };

  // CLEAR CART
    const clearCart = () => {
    setCart([]);
    };

    return (
    <CartContext.Provider value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart
    }}>
    {children}
    </CartContext.Provider>
    );
}

export default CartProvider;
