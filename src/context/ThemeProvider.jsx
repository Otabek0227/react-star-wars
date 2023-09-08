import { createContext, useContext, useState } from "react"
import { changeCssVariables } from "services/changeCssVariables" 

export const THEME_LIGHT = 'light'
export const THEME_DARK = 'dark'
export const THEME_NEUTRAL = 'neutral'


const ThemeContext = createContext()


export default function ThemeProvider({ children, ...props }) {
    const [theme, setTheme] = useState(THEME_NEUTRAL)
    const change = name => {
        setTheme(name)
        changeCssVariables(name)
    }
    
    return (
        <ThemeContext.Provider
            value={{
                theme,
                change
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}


export const useTheme = () => useContext(ThemeContext)
