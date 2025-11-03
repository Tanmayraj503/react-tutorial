import React from 'react'

export const Themecontext = React.createContext();

export default function Themeprovider({children}) {
    const [theme, setTheme] = React.useState('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light'? 'dark' : 'light'));
    }

return (
    <Themecontext.Provider value={{theme, toggleTheme}}>
        {children}
    </Themecontext.Provider>
);
}
