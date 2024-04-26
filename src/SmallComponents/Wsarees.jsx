import React from 'react';
import { wsareesData } from '../Data/Women/Sarees';
import './Group.css'
import { Link } from 'react-router-dom';
const Wsarees=()=> {
    return ( 
        <div className='pro-section'>
          {
             wsareesData.map((item)=>{
                return(
                  <div className='img-box'  key={item.id} target="_blank">
                    <Link to={`/wsarees/${item.id}`}>
                        <img className='pro-img' src={item.image} alt="" /> 
                        </Link>

                  <div className='pro-info'>
                   <h3>{item.company}</h3>
                   <p>Price: {item.price}rs</p>
               </div>
               </div>
    
                )
               }) 
          }
        </div>
     );
}

export default Wsarees;