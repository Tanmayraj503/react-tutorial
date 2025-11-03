import React from "react";

import { Themecontext } from "../context/themecontext";
import { useContext } from "react";

function Button() {

    const { theme, toggleTheme } = useContext(Themecontext);
    
    return(
        <button
        onClick={toggleTheme}
        className={`px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 ${theme === "dark" ? "bg-yellow-400 text-black" : "bg-blue-600 text-white"}`}>
        {theme === "dark" ? "Switch to Light ☀️" : "Switch to Dark 🌙"}
        </button>
    );
}
 export default Button