import React from 'react';
import { mformalData } from '../Data1/Mens/Formal';
import './Group.css'


import { Link } from 'react-router-dom';
const Mformal=()=> {
    return ( 
        <div className='pro-section'>
          {
             mformalData.map((item)=>{
                return(
                  <div className='img-box'  key={item.id}  target="_blank">
                        
                  <Link to={`/mformal/${item.id}`}>
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

export default Mformal;