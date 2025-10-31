import { useState } from 'react'


function App() {
  const [color, setColor] = useState("#081f29")

  return (
    <>
      <div className="w-full h-screen"
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap bottom-12 justify-center bg-white rounded-3xl px-2 align-middle left-1/2 -translate-x-1/2 shadow-lg'>
          <div className='flex flex-wrap bg-white justify-center gap-3 px-3 py-2 rounded-3xl shadow-lg text-white'>
            <button onClick={() => setColor("#081f29")} className='outline-none px-4 rounded-3xl' style={{ backgroundColor: "#081f29"}}>Default</button>
            <button onClick={() => setColor("#f00")} className='outline-none px-4 py-1 rounded-3xl' style={{ backgroundColor: "#f00"}}>Red</button>
            <button onClick={() => setColor("#0f0")} className='outline-none px-4 py-1 rounded-3xl' style={{ backgroundColor: "#0f0"}}>Green</button>
            <button onClick={() => setColor("#00f")} className='outline-none px-4 py-1 rounded-3xl' style={{ backgroundColor: "#00f"}}>Blue</button>
            <button onClick={() => setColor("#0ff")} className='outline-none px-4 py-1 rounded-3xl' style={{ backgroundColor: "#0ff"}}>Aqua</button>
          </div>
        </div> 
      </div>
    </>
  )
}

export default App
