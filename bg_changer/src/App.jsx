import { useState } from 'react'


function App() {
  const [color, setColor] = useState('black');
console.log(color)
  return (
    
    <div className='w-full min-h-screen duration-200' style={{backgroundColor:color}}>
      <div className='flex flex-wrap justify-center inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:'red'}} onClick={()=>setColor('red')}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:'blue'}} onClick={()=>setColor('blue')}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:'black'}} onClick={()=>setColor('black')}>Black</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:'yellow'}} onClick={()=>setColor('yellow')}>Yellow</button>
          </div>
      </div>
    </div>

  )
}     

export default App
