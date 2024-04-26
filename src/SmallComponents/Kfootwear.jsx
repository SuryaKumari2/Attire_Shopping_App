import React from 'react';
import { kfootwearData } from '../Data2/Kids/Foot_wear';
import './Group.css'


import { Link } from 'react-router-dom';
const Kfootwear=()=> {
    return ( 
        <div className='pro-section'>
          {
             kfootwearData.map((item)=>{
                return(
                  <div className='img-box'  key={item.id}  target="_blank">
                        
                  <Link to={`/kfootwear/${item.id}`}>
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

export default Kfootwear;