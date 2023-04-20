
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../components/Quickport.css'
function Quickport() {
  const [ApiDetails, setApiDetails] = useState([])

  useEffect(() => {
    axios.get("http://192.168.2.236:8000/api/total_orders/")
      .then(res => {
        console.log(res.data)
        setApiDetails(res.data)
      })
  }, [])
  const handlesubmit = ()=>{

  }
  return (

    <div className='area1' >
     
      <h1>
      <span class="blue">Orders</span> <span class="yellow">Dashboard</span></h1>
     
      <table class="BookingDetails1" id="Bookingtable">
        <thead>
          <tr>
            <th >Bookingid</th>
            <th >username</th>
            <th >Date</th>
            <th >Itemname</th>
            <th >status</th>
            <th>Portername</th>
          </tr>
        </thead>
        <tbody>{
          ApiDetails.map((e, i) => (
            <tr>
              <td>{e.id}</td>
              <td>{e.user}</td>
              <td>{e.date}</td>
              <td>{e.item_name}</td>
              <td>{e.status}</td>
              <td>{e.driver}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <span class="btnquick"></span>
      <span class="btnquick"></span>
      <button type="button" class="btnquick">   <Link to="/Total"> Total</Link> </button>
      <button type="button" class="btnquick">  <Link to="/Pending">  Pending</Link></button>
      <button type="button" class="btnquick">   <Link to="/Picked"> Picked</Link></button>
      <button type="button" class="btnquick">  <Link to="/In_process">  In_process</Link></button>
      <button type="button" class="btnquick">  <Link to="/Delivered">  Delivered</Link></button>

    </div>



  )
}

export default Quickport
