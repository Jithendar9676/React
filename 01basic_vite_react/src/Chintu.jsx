import { useState } from "react"

function Chintu(){
const [counter,setCounter]=useState(15)
const addCount=()=>{
    if(counter<20){
        setCounter(counter+1)
        setCounter((provCounter)=>provCounter+1)
    }
}
const removeCount=()=>{
    if(counter>0){
        setCounter(counter-1)
        
    }
}
    return(
        <>
        <h1>Counter : {counter}</h1>
        <button onClick={addCount}>Add count</button>
        <br/>
        <button onClick={removeCount}>Remove count</button>
        </>
    )
}

export default Chintu