import React from 'react'
import axios from 'axios';
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import "../components/Driverpickedorderdetails.css";
function Driverpickedorderdetails(props) {
    const {state} = useLocation();
  console.log(state)

  const handlesubmit=()=>{

    const Total = {
      "status": "in_process"
     };  
      axios.patch("http://192.168.2.236:8000/api/total_orders/"+state.id+"/",Total )
    .then(res=>{
      console.log(res,"srujana")
      //   setapi(res.data)

      })
  }

  return (
    <div>
  
  <div className="Driverimage">
      <h2 style={{textAlign: "center"}}>select yes to confirm</h2>
<div class="container"> 
   <div class="row">  
      <div class="col-xs-6 col-xs-offset-6"> 
           <div class="dropdown">      
      Status:<select>&nbsp;&nbsp;

<option defaultValue='select'>select</option>  
<option value="No">In-progress</option>
<option defaultValue="Yes">started</option>
<option defaultValue="Yes">completed</option>
   </select>   
     </div>   
 </div>
</div>
</div>
<div class="container"> 
 <div class="center">   
 {/* <button onClick = {()=>{handlesubmit ()}}>submit</button>  */}
 <Link to='/DriverPickedOrder'>
  <button onClick={handlesubmit}>Submit</button>&nbsp;&nbsp;
  </Link>
 </div>
 
</div> 
</div>

    </div>
  )
}

export default Driverpickedorderdetails
