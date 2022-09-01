import React from 'react';
import './Style.css';

const Profile =()=>{
   return(
    <div style={{marginLeft:"138px",marginRight:"62px",maxWidth:"1695px"}}>
      <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin:"90px 275px",
            borderBottom:"2px solid grey"}}>
          <div >
            <img style={{
               width:"170px",
               height:"170px",
               borderRadius:"50%",}}
               src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
          </div>
           <div>
            <h4>John Arthur </h4>
            <div style={{
            display:"flex",
            width:"100%",
            marginRight:"26px"
            }}>
               <h6>40 posts</h6>
               <h6>44 followers</h6>
               <h6>4 following</h6>
            </div>
          </div>
      </div>
      <div className="Gallery">
              <img className="item" src="https://images.unsplash.com/photo-1590140297846-fa479ed30a6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8YWV1NnJMLWo2ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1658847338849-fd76cee49bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                 <img className="item" src="https://images.unsplash.com/photo-1657040298696-282743ad6406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1656772124124-ca4c8022744f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY4fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1653233796627-3416bd71a365?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1MXxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>

              
      </div>
    </div>
   )
}
export default Profile;