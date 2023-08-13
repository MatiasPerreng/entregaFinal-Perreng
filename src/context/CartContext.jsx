import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log(cart);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map((character) => {
                if (character.id === item.id) {
                    return {
                        ...character, quantity: character.quantity + quantity
                    };
                }
                return character;
            }));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const deleteItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addItem, clear, deleteItem }}>
            {children}
        </CartContext.Provider>
    );
};
