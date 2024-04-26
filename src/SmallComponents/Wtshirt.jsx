import React from 'react';
import { wtshirtData } from '../Data/Women/Tshirts';
import './Group.css'
import { Link } from 'react-router-dom';
const Wtshirt=()=> {
    return ( 
        <div className='pro-section'>
          {
             wtshirtData.map((item)=>{
                return(
                  <div className='img-box'  key={item.id} target="_blank">
                    <Link to={`/wtshirts/${item.id}`}>
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

export default Wtshirt;