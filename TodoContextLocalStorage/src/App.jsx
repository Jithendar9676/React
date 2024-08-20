import { useState , useEffect} from 'react'
import { TodoProvider } from './Context/TodoContext'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:new Date.now(),...todo},...prev])
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=>{
      prev.map((prevTodo)=>{
      prevTodo.id===id ? todo:prevTodo
    })
  })
  }
  const removeTodo=(id)=>{
    setTodos((prev)=>{
      prev.filter((prevTodo)=>{
        prevTodo.id !== id
      })
    })
  }
const toggleComplete=(id)=>{
  setTodos((prev)=>{
    prev.map((prevTodo)=>{
      prevTodo.id ===id ? {...prevTodo ,complete:!prevTodo.complete} : prevTodo
    })
  })
}

useEffect(()=>{
  const todos=JSON.parse(localStorage.getItem("todos"))
  setTodos(todos)
},[])

useEffect(()=>{
localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,removeTodo,toggleComplete}}>
    </TodoProvider>
  )
}

export default App
