import React, { useState } from 'react'
import axios from 'axios';
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';




function Driverdetails(props) {
  const[arr,setarr]= useState("")
  const {state} = useLocation();
  console.log(state,"venkat");
  const getyesno =(e)=>{
    console.log("hellooooo");
    console.log(e.target.value, "e value");
    console.log(state, "state obj");
    console.log(state.picked, "picking value");
  }

  const handlesubmit=()=>{
    console.log("Hi")
    // const Total = {
    //   "picked": "False"
    //  };  
      axios.patch("http://192.168.2.236:8000/api/total_orders/"+state.id+"/" )
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
      picked:<select value={arr} onChange={(e)=>{getyesno(e)}}>&nbsp;&nbsp;

<option defaultValue='select' >select</option>  
<option value="No" >No</option>
<option defaultValue="Yes" >Yes</option>

   </select>   
     </div>   
 </div>
</div>
<div className='row'>
  <Link to='/DriverOrder'>
  <button  type="button" class="btn btn-primary" onClick={handlesubmit}>Submit</button>
  </Link>
</div>
</div>
</div>
</div>


 )
}
export default Driverdetails