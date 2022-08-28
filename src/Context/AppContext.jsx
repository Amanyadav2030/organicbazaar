import { Children, createContext, useReducer, useState } from "react";

export const AppContext = createContext();


export function AppContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [total, setTotal] = useState(100);
    const handleSetTotal = (value) => {
        setTotal(value);
    }
    const handleLogin = (status) => {
        setIsAuth(status);
    }
    return (
        <AppContext.Provider value={{ isAuth, handleLogin, total, handleSetTotal }}>
            {children}
        </AppContext.Provider>
    )
}