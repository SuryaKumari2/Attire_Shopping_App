import React from 'react';
import { kethnicData } from '../Data2/Kids/Ethnic_wear';
import './Group.css'


import { Link } from 'react-router-dom';
const Kethnic=()=> {
    return ( 
        <div className='pro-section'>
          {
             kethnicData.map((item)=>{
                return(
                  <div className='img-box'  key={item.id}  target="_blank">
                        
                  <Link to={`/kethnic/${item.id}`}>
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

export default Kethnic;