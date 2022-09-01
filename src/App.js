import React,{useEffect,createContext,useReducer,useContext} from 'react';
import Navbar from './compnents/Navbar';
import "./App.css"
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import Home from './compnents/Screens/Home';
import Signup from './compnents/Screens/Signup';
import Login from './compnents/Screens/Login';
import Profile from './compnents/Screens/Profile';
import Createpost from './compnents/Screens/Createpost';
import {reducer,initialState } from './reducers/userreducer';


export const UserContext = createContext()

const Routing =()=>{
  const Navigate =useNavigate()
  const {state,dispatch} =useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
           Navigate('/home')
    }
    else{
      Navigate('/login')
    }
  },[])
  return(
        <>
        <Routes>
        <Route path="/" element={<Home /> }>
        </Route>
        </Routes>
      
        <Routes>
        <Route path="/home" element={<Home /> }>
        </Route>
        </Routes>

        <Routes>
        <Route path="/signup" element={<Signup /> }>
        </Route>
        </Routes>

        <Routes>
        <Route path="/login" element={<Login />}>
        </Route> 
        </Routes>

        <Routes>
        <Route path="/profile" element={<Profile />}>
        </Route>
        </Routes>

        <Routes>
        <Route path="/createpost" element={<Createpost />}>
        </Route>
        </Routes> </>

  )  
  
}  

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
     <Navbar />
     <Routing />

    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
