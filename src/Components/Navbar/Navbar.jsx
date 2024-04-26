
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useCart } from '../../Pages/CartContext';
function Nav() {
    const {cartItems}=useCart()
    return ( 
       <div className='navbar'>
            <div className='nav-logo'>
                <img src="/Dresses/Women/woman.png" alt="" />
                <p>Attire</p>
            </div>
            <ul className='nav-menu'>
            <li>
                <Link style={{textDecoration:'none'}} to='/' >Shop</Link>
            </li>
            <li>
                <Link style={{textDecoration:'none'}}  to='/womens'>Women</Link>
            </li>
            <li>
                <Link style={{textDecoration:'none'}} to='/mens'>Men</Link>
            </li>
            <li>
                <Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>
            </li>
            
            </ul>
            <div className="nav-login">
           
                <Link style={{textDecoration:'none'}}  to='/cart' >
                <img src="/Dresses/Women/carts.png" alt="" /> 
                </Link>
                
                <div className="nav-cart-count">{cartItems.length}</div>
            </div>

       </div>
     );
}

export default Nav;