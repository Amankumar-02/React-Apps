import React from "react";
import { createContext, useContext } from "react";

// ThemeContext with variables
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

// Provider
export const ThemeContextProvider = ThemeContext.Provider

//custom hook
export default function useTheme(){
    return useContext(ThemeContext)
}