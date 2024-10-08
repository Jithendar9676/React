import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user}=useContext(UserContext)
 if(!user) return <div>Please login</div>
 return <div>{user.username + "" + user.password}</div>
}

export default Profile