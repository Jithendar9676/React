
import './App.css'
import customQuery from './customQuery'


function App() {
 const [data,error,loading] =customQuery('https://dummyjson.com/products')

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
  console.log("product",data)

  return (
    <>
    
     <div>Api Handle</div>
     {loading && <div>loading!!!</div>}
    {error && <div>some went wrong!!!</div>}
     <div>Total Products : {data.length}</div>
    {
      data.map((e)=>(
           
        <h1 key={e.id}>{e.title}</h1>
      ))
    }
     
    </>
  )
}

export default App
