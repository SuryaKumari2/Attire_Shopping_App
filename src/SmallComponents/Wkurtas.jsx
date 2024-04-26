import React from 'react';
import { wkurtasData } from '../Data/Women/Kurtas';
import './Group.css'
import { Link } from 'react-router-dom';
const Wkurtas=()=> {
    return ( 
        <div className='pro-section'>
          {
             wkurtasData.map((item)=>{
                return(
                  <div className='img-box'  key={item.id} target="_blank">
                    <Link to={`/wkurtas/${item.id}`}>
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

export default Wkurtas;