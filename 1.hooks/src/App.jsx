import { useState } from 'react'

function Number() {
  const [count, setCount] = useState(0)
  
  if (count < 0) {
    setCount(0)
  }

  if (count > 20) {
    setCount(20)
  }

  const addvalue = () => {
    setCount(count + 1)
  }
  
  const subvalue = () => {
    setCount(count - 1)
  }


  return (
    <>
        <p className='text-3xl mt-5 text-amber-700 text-center'>Current Number:{count}</p>
        <div className='flex justify-center space-x-2 mt-5'>
          <button onClick={addvalue} className='bg-amber-500 text-white px-4 py-2 rounded-l'>Add</button>
          <button onClick={subvalue} className='bg-amber-500 text-white px-4 py-2 rounded-r'>Subtract</button>
        </div>
    </>
  )
}

export default Number
