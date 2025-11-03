import { useState , useContext } from 'react'
import React from 'react'
import Themeprovider, { Themecontext } from './context/themecontext.jsx'
import Button from './component/button.jsx';

function Appcontent(){
  const {theme} = useContext(Themecontext);

   return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">
        {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </h1>
      <Button />
    </div>
  );
}

function App() {

  return (
    <Themeprovider>
      <Appcontent />
    </Themeprovider>
  )
}

export default App
