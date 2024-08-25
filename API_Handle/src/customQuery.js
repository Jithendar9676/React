
import React,{ useState ,useEffect} from 'react'
import axios from 'axios';

function customQuery(url) {
 
    const [data,setData]=useState([])
    const [error,setError]=useState(false)
    const [loading,setLoading] =useState(false)
    useEffect(()=>{
  
      (async()=>{
        try {
          setLoading(true)
          setError(false)
          const res=await axios.get(url)
          const datas=res.data?.products
          setData(datas)
          setLoading(false)
        } catch (error) {
          setError(true)
          setLoading(false)
        }
      })()
      

    },[])
    return[data,error,loading]
}

export default customQuery