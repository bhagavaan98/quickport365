import React from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import  { useEffect, useState } from 'react'
function BookingsView() {
  const[ApiDetails,setApiDetails]=useState([])
    useEffect(()=>{
      axios.get("http://192.168.2.236:8000/api/total_orders/")
      .then(res=>{
          console.log(res.data)
      setApiDetails(res.data)})
      },[])
  return (
    <div>
    <Table striped>
      <thead>
        <tr>
          <th>created</th>
          <th>date</th>
          <th>delivery_address</th>
          <th>driver_phone</th>
          <th>id</th>
          <th>item_name</th>
          <th>item_weight</th>
          <th>Pincode</th>
          {/* <th>receiver_address</th> */}
          {/* <th>receiver_phone</th> */}
         
          <th>status</th>
          {/* <th>updated</th> */}
          {/* <th>user</th> */}
 {/* <th>services</th> */}
        </tr>
      </thead>
      <tbody>
        {
                ApiDetails.map((e, i) => (
                        <tr key={i}>
    
          <td>{e.created}</td>
          <td>{e.date}</td>
          <td>{e.delivery_address}</td>
          <td>{e.driver_phone}</td>
    
       
          <td>{e.id}</td>
          <td>{e.item_name}</td>
          <td>{e.item_weight}</td>
          <td>{e.origin}</td>
  
        
          <td>{e.Pincode}</td>
          {/* <td colSpan={2}>{e.receiver_address}</td> */}
          {/* <td>{e.receiver_phone}</td> */}
        
          <td>{e.status}</td>
          {/* <td>{e.updated}</td> */}
          {/* <td>{e.user}</td> */}
            {/* <td>{e.services}</td> */}
          </tr>
           ))}
      </tbody>
    </Table>
    </div>
  )
}

export default BookingsView
