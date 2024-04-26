import React from 'react';
import { wwesternData } from '../Data/Women/Western_wear';
import './Group.css'
import { Link } from 'react-router-dom';
const Wwestern=()=> {
    return ( 
        <div className='pro-section'>
          {
             wwesternData.map((item)=>{
                return(
                  <div className='img-box'  key={item.id} target="_blank">
                    <Link to={`/wwestern/${item.id}`}>
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

export default Wwestern;