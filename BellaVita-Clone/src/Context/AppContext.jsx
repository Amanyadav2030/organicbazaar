import { Children, createContext } from "react";

export const AppContext = createContext();
export function AppContextProvider({ children }) {
    return (
        <AppContext.Provider value={{ name: "aman" }}>
            {children}
        </AppContext.Provider>
    )
}