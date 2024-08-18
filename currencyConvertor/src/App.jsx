import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './components/inputBox';
function App() {
 const [amount,setAmount]=useState(0)
 const [from,setFrom]=useState("usd")
 const [to,setTo] =useState("inr")
 const [convertedAmount,setConvertedAmount] =useState(0)

 const currecyInfo=useCurrencyInfo(from)
 const options=Object.keys(currecyInfo)

 const swap=()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
 
 }
const convert=()=>setConvertedAmount(amount*currecyInfo[to])
  return (
    <>
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage:`url('https://images.pexels.com/photos/6266283/pexels-photo-6266283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}
    >
      <div className='w-full'>

        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
        <form onSubmit={(e)=>{
          e.preventDefault();
          convert()
        }} >
          <div className='w-full mb-1 '>
            <InputBox
            lable='From'
            amount={amount}
            currencyOption={options}
            onCurrencyChange={(currecy)=>{
              setFrom(currecy)
            }}
            selectCurrecy={from}
            onAmountChange={(amount)=>{
              setAmount(amount)
            }}
           />
          </div>
          <div className='relative w-full h-0.5'>
            <button 
            type='button'
            className='absolute left-1/2
            -translate-x-1/2 
            -translate-y-1/2
            border-2 border-white rounded-md 
            bg-blue-600 text-white px-2 py-0.5'
            onClick={swap}
            >Swap</button>
            <div className='w-full mt-1 mb-4'>
             <InputBox 
             lable="To"
             amount={convertedAmount}
             currencyOption={options}
             onCurrencyChange={(currecy)=>{
              setTo(currecy)
             }}
             selectCurrecy={to}
             amountDisable
             />
            </div>
            <button type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </div>
        </form>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
