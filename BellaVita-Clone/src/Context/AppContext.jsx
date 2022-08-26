import { Children, createContext, useState } from "react";

export const AppContext = createContext();
export function AppContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const handleLogin = (status) => {
        setIsAuth(status);
    }
    return (
        <AppContext.Provider value={{ isAuth, handleLogin }}>
            {children}
        </AppContext.Provider>
    )
}