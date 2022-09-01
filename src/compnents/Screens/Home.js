import React,{useState,useEffect} from 'react';
import './Style.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';

const Home =()=>{
   const [data,setData] = useState([])
   useEffect(()=>{
      fetch('/allpost',{
         headers:{
            "Authorization":"Bearer "+localStorage.getItem("jwt")
         }
      }).then(res=>res.json())
      .then(result=>{
           console.log(result)
           setData(result.posts)
      })
   },[])
   
   return(
    <div>
        {
      data && data.map((item)=>{
         return(
            <Card sx={{ maxWidth: "450px", marginTop: "50px", marginLeft: "375px" }}>
         <Typography gutterBottom variant="h5" component="div" style={{ marginLeft: "0.5em" }}>{item.postedBy.name}</Typography>
         <CardMedia
            component="img"
            height="250"
            image={item.photo}
            alt="food photo" />        
         <CardContent>
               <div style={{display:"flex"}}>
               <FormControlLabel 
                     control={
                        <Checkbox icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        name="checkedH" />
                     } />

               <CommentIcon sx={{mt:'10px'}}></CommentIcon>
               <SendIcon sx={{mt:'10px',ml:'32px'}}> </SendIcon>
               </div>
         </CardContent>


         <CardContent>
            <Typography gutterBottom variant="h6" component="div">{item.title}</Typography>
            <Typography variant="body2" color="text.secondary">{item.body}</Typography>
         </CardContent>

         <CardActions>
            <input type="text" placeholder="Add a comment.." />
            <Button size="small">Share</Button>
         </CardActions>
         </Card>

         
         )
      })
    }
        </div>



   )
}
export default Home;