import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'



function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState()
  useEffect(() => {

    (async () => {
      try {
        setLoading(true)
        setError(false)
        const res = await axios.get('https://dummyjson.com/products')
        const datas = res.data?.products
        setData(datas)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    })()


  }, [])

  // if(loading){
  //   return(
  //     <div>loading .............</div>
  //   )
  // }

  // if(error){
  //   return(
  //     <div>Something went wrong</div>
  //   )
  // }
  console.log("product", data)
  let count = 0
  const betterFunction = () => {
    console.log("fecting --", ++count)
  }
  const DeBounes = (fn, dely) => {
    let timer = 0
    return function () {
      let context = this
      let args = arguments
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, dely);
    }
  }
  const getData = DeBounes(betterFunction, 300)

  const handleclick = async () => {
    try {
      console.log("clicked.......")
      const res = await axios.get("https://dummyjson.com/prod")
      console.log(res.data)

    } catch (error) {

    }

  }

  // function trotle(fn,dely){
  //   let shouldCall=true
  //   return function(...args){
  //     if(!shouldCall)
  //       return;
  //      fn(...args)
  //      shouldCall=false
  //      setTimeout(()=>{
  //        shouldCall=true
  //      },dely)
  //   }
  // }

  function trotle(fn, dely) {
    let lastCall = 0
    return function (...args) {
      const now = new Date().getTime()
      if ((now - lastCall) < dely) {
        return;
      }
      lastCall = now
      fn(...args)
    }
  }



  return (
    <>
      <div>
        <input type="text" onKeyUp={getData} />
        <button onClick={trotle(handleclick, 1000)}

        >Click</button>
      </div>
      <div>Api Handle</div>
      {loading && <div>loading!!!</div>}
      {error && <div>some went wrong!!!</div>}
      <div>Total Products : {data.length}</div>
      {
        data.map((e) => (

          <h1 key={e.id}>{e.title}</h1>
        ))
      }

    </>
  )
}

export default App
