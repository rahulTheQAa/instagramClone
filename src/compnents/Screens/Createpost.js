import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './Style.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import M from 'materialize-css'


const Createpost =()=>{
  const Navigate = useNavigate()
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")
  const [image,setImage] = useState("")
  const [url,setUrl] = useState("")
  useEffect(()=>{
    if(url)
{
    fetch('/createpost',{
      method:"post",
      headers:{
         "Content-Type":"application/json",
         "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
      body:JSON.stringify({
         title,
         body,
         pic:url
      })

   }) 
   .then(res=>res.json())
  .then(data=>{
    console.log(data)
     if(data.error){
        M.toast({html: "you must be logged in",classes:"#c62828 red darken-3"})
     }
     else{
         M.toast({html:"post created successfully",classes:"#43a047 green darken-1"})
           Navigate('/')
     }         
   })
     .catch(err => {
       console.log(err)
  })
}
  },[url])

 
  const postDetails = () =>{
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","insta-clone")
    data.append("cloud_name","arvension-technologies-llp")
    fetch("https://api.cloudinary.com/v1_1/arvension-technologies-llp/image/upload",{
            method:"post",
            body:data
          })
          .then(res=>res.json())
          .then(data=>{
            setUrl(data.url)
          })
          }
 
    


    return(

        
  <React.Fragment>
    <Card sx={{ maxWidth: "450px", marginTop: "5%", marginLeft: "30%" }}>
    <CardContent>
         <Typography variant="h5" component="div">
            Create newpost here
         </Typography>
           
         <CardActions>
          <input 
          type="text" 
          placeholder="Title"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
           />    
         </CardActions>            
    </CardContent>
    
     <CardActions>
                <input
                 type="text"
                 placeholder="Add a caption.."
                 value={body}
                 onChange={(e)=> setBody(e.target.value)}
                  /> 
            <Button variant="contained" component="label">
                   Upload
                <input hidden accept="image/*" 
                multiple type="file"
                onChange={(e)=>(setImage(e.target.files[0]))} 

                />
            </Button>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
     </CardActions>

         <Button className="button" sx={{ ml:"200px"}}
          onClick={()=>postDetails()}
         >Share</Button>
  </Card>
  </React.Fragment>
    );
}

export default Createpost;