import React from 'react';
import { mjeansData } from '../Data1/Mens/Jeans';
import './Group.css'


import { Link } from 'react-router-dom';
const Mjeans=()=> {
    return ( 
        <div className='pro-section'>
          {
             mjeansData.map((item)=>{
                return(
                  <div className='img-box'  key={item.id}  target="_blank">
                        
                  <Link to={`/mjeans/${item.id}`}>
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

export default Mjeans;