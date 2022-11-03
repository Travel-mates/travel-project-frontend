import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./table.css";

import axios from "axios";

const Booking = () => {
    const [data, setData] =useState([]);

    const loadData =async () => {
        const response =await axios.get("http://localhost:8080/destination");
        setData(response.data);
    };
    
    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (did) => {
        if (
            window.confirm("Are you sure that you wanted to delete that project ?")

        ) {
            axios.delete(`http://localhost:8080/destination/${did}`);
            
            setTimeout(() => loadData(),100);

        }
    };



  return (
    <div style={{marginTop: "150px"}}>
        {/* <Link to="/addProject">
            <button className="btn btn-contact">Add Project</button>
        </Link> */}
        <table className="styled-table">
            <thead>
                <tr>
                    <th style={{textAlign: "center"}}>Booking ID.</th>
                    <th style={{textAlign: "center"}}>Date</th>
                    <th style={{textAlign: "center"}}>Time</th>
                    <th style={{textAlign: "center"}}>Destination</th>
                    <th style={{textAlign: "center"}}>Package Name</th>
                    <th style={{textAlign: "center"}}>Description.</th>
                    <th style={{textAlign: "center"}}>Contact</th>

                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    return(
                        <tr key={item.Booking_ID}>
                             
                            <td>{item.did}</td>
                            <td>{item.date}</td>
                            <td>{item.time}</td>
                            <td>{item.destination}</td>
                            <td>{item.package_name}</td>
                            <td>{item.description}</td>
                            <td>{item.contact}</td>
                            <td>
                                
                                <button className='btn btn-delete' onClick={() => deleteContact(item.did)}>Delete</button>
                               
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
        
         

    </div>
  )
}

export default Booking;