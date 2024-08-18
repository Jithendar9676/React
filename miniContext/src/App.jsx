
import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
       <Login/>
       <br />
       <Profile/>
   </UserContextProvider>
  )
}

export default App
