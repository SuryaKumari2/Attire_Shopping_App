
import './Wnav.css'
import { Link } from 'react-router-dom'
function Knav() {
    return ( 
       <div className='W-bar'>
            
            <ul className='W-menu'>
            
            <li>
                <Link style={{textDecoration:'none'}} to='/kethnic' >Ethnic-wear</Link>
            </li>
           
            <li>
                <Link style={{textDecoration:'none'}} to='/kfoot-wear'>Foot-wear</Link>
            </li>
            
            </ul>
           
       </div>
     );
}

export default Knav;