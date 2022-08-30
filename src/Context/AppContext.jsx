import { Children, createContext, useReducer, useState } from "react";

export const AppContext = createContext();


export function AppContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [open, setOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const handleCartItems = (addItem, refresh = false) => {
        if (refresh) {
            setCartItems(addItem);
        } else {
            setCartItems([...cartItems, addItem]);
        }
    }
    const handleOpen = () => {
        setOpen(!open);
        // console.log("open", open)
    }
    const handleLogin = (status) => {
        setIsAuth(status);
    }
    return (
        <AppContext.Provider value={{ isAuth, handleLogin, open, handleOpen, handleCartItems, cartItems }}>
            {children}
        </AppContext.Provider>
    )
}