import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeProvider({children}){
    const [theme,setTheme]=useState("light");
    const themeToggler=()=>{
        setTheme(theme==='light'?'dark':'light');
    }
    return(
        <ThemeContext.Provider value={{theme,themeToggler}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider