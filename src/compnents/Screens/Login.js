import React,{useState,useContext} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import './Style.css';
import {UserContext} from '../../App'
import M from 'materialize-css'

const Login =()=>{
   const {state,dispatch} = useContext(UserContext)
   const Navigate = useNavigate()
      const [password,setPassword] = useState("")
      const [email,setEmail] = useState("")
      const PostData = ()=>{
         
         fetch('/login',{
            method:"post",
            headers:{
               "Content-Type":"application/json",
            },
            body:JSON.stringify({
               password,
               email
            })

         }) 
         .then(res=>res.json())
        .then(data=>{
          console.log(data)
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "Invalid email",classes:"#c62828 red darken-3"})
            return
         }
           else{
            localStorage.setItem("jwt",data.token)
            localStorage.setItem("user",JSON.stringify(data.user))
            dispatch({type:"USER",payload:data.user})
               M.toast({html:"signed in successfully",classes:"#43a047 green darken-1"})
                 Navigate('/')
           }         
         })
           .catch(err => {
             console.log(err)
        })
      }
   return (
   <div className="mycard ">
  <div>
    <div className="col s12 m7 ">
     <div className="card horizontal">
      <div className="card-stacked ">
        <div className="card-content auth-card input-field">
        <h3>Instagram</h3> 
        <h5>Login</h5>
        <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            ></input>
            <input 
            type="text"
            placeholder="Password"
             value={password}
            onChange={(e)=>setPassword(e.target.value)}
            ></input>
            <button className="btn waves-effect waves-light #536dfe indigo accent-2" type="submit" 
             onClick={()=>PostData()}
            >Login
            </button>
            <h6>
               <Link to='/signup'>Don't have an Account?</Link>
            </h6>
        </div>
       </div>
      </div>
    </div>
  </div>

   </div>
   )
}
export default Login;