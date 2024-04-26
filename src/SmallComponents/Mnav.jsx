
import './Wnav.css'
import { Link } from 'react-router-dom'
function Mnav() {
    return ( 
       <div className='W-bar'>
            
            <ul className='W-menu'>
            <li>
                <Link style={{textDecoration:'none'}} to='/mcausal' >Casual-shirts</Link>
            </li>
            <li>
                <Link style={{textDecoration:'none'}} to='/mtshirt' >T-shirts</Link>
            </li>
            <li>
                <Link style={{textDecoration:'none'}}  to='/mformal'>Formal-shirts</Link>
            </li>
            <li>
                <Link style={{textDecoration:'none'}} to='/mfootwear'>Footwear</Link>
            </li>
            <li>
                <Link style={{textDecoration:'none'}}  to='/mjeans'>Jeans</Link>
            </li>
            
            
            </ul>
           
       </div>
     );
}

export default Mnav;