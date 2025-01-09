import { Link } from "react-router-dom";

const NavLinks=()=>{
   const links=[{name :"Find Jobs" ,url:"find-jobs"},
      {name :"Find Talent" ,url:"find-talent"},
      {name :"Upload Job" ,url:"upload-jobs"},
      {name :"About us" ,url:"about"}
   ]
   return(
    <div className='flex gap-5'>
   {links.map((item ,index)=><Link key={index} to={item.url}>{item.name}</Link>)}
 </div>
   ) 
}
export default NavLinks;