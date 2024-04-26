import React from 'react';
import { mfootwearData } from '../Data1/Mens/Foot_wear';
import './Group.css'


import { Link } from 'react-router-dom';
const Mfootwear=()=> {
    return ( 
        <div className='pro-section'>
          {
             mfootwearData.map((item)=>{
                return(
                  <div className='img-box'  key={item.id}  target="_blank">
                        
                  <Link to={`/mfootwear/${item.id}`}>
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

export default Mfootwear;