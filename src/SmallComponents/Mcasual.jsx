import React from 'react';
import { mcasualData } from '../Data1/Mens/Casual';
import './Group.css'


import { Link } from 'react-router-dom';
const Mcasual=()=> {
    return ( 
        <div className='pro-section'>
          {
             mcasualData.map((item)=>{
                return(
                  <div className='img-box'  key={item.id}  target="_blank">
                        
                        <Link to={`/mcasual/${item.id}`}>
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

export default Mcasual;