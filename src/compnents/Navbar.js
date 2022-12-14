import React,{useContext} from 'react';
import {Link,useNavigate } from "react-router-dom";
import {UserContext} from '../App';
const Navbar =()=>{
      const {state,dispatch} = useContext(UserContext)
      const Navigate = useNavigate()
      const renderList =()=>{
        if(state){
          return [
            <li key="1"><Link to="/profile">Profile</Link></li>,
            <li key="2"><Link to="/createpost">Create Post</Link></li>,   
            <li key="3">
                <button className="btn #ef5350 red lighten-1" type="submit" 
             onClick={()=>
              {
                localStorage.clear()
                dispatch({type:"CLEAR"})
                Navigate('/')
              }}
            >Logout
            </button>
            </li>    
          ]
        }else{
          return [
          <li key="4"><Link to="/login">Login</Link></li>,
          <li key="5"><Link to="/signup">SignUp</Link></li>
          ]
        }
      }
    return(
        <nav>
      <div className="nav-wrapper white">
      <Link to={state?"/":"/login"}className="brand-logo left">Instagram</Link>
       <ul id="nav-mobile" className="right">
        {renderList()}
       </ul>
     </div>
     </nav>
    )
}
export default Navbar