import React from 'react';
import { mtshirtData } from '../Data1/Mens/Tshirts';
import './Group.css'


import { Link } from 'react-router-dom';
const Mtshirt=()=> {
    return ( 
        <div className='pro-section'>
          {
             mtshirtData.map((item)=>{
                return(
                  <div className='img-box'  key={item.id}  target="_blank">
                        
                        <Link to={`/mtshirt/${item.id}`}>
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

export default Mtshirt;