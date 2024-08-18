import { useState } from 'react'
import './App.css'
import ShoppingCart from './components/ShoppingCart'

function App() {
  const [count, setCount] = useState(0)
  const shoesName={
    one:"Nick123",
    two:"Puma2",
    three:"AirJordan"

  }

  return (
    <>
     {/* <h1 className='bg-green-300 text-black p-4 rounded-xl'>Hi Tailwind</h1> */}
     <ShoppingCart shoesName={shoesName}/>
    </>
  )
}

export default App
