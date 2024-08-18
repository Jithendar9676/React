import React,{useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom'
function GitHub() {

    const data=useLoaderData()

// const [data,setData]=useState([])

//     useEffect(()=>{
//      fetch('https://api.github.com/users/Jithendar9676')
//      .then((res)=>res.json())
//      .then(data=>{
//         setData(data);
//      })
//      console.log("data0",data)

//     },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub Follower :{data.followers}
    <img src={data.avatar_url} alt='Git pic' width={300}/>
    </div>
  )
}

export default GitHub

export const GitHubInfo=async()=>{
    const res =await fetch('https://api.github.com/users/Jithendar9676')
    return res.json()
}