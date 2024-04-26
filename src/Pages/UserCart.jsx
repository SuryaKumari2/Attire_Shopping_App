import Nav from "../Components/Navbar/Navbar";
import { useCart } from "./CartContext";
import './Cart.css'


const UserCart = () => {

    const {cartItems, addToCart, removeFromCart} = useCart()

    

  return (
<>
<div>
    <h2 className='y-cart'></h2>
 {cartItems.length ===0 ?
    (<p className='empty'>Your Cart is Empty</p>):
   <div>
     {cartItems.map((item)=>(
            <div className='cart-section' key={item.id}>
                <div className="cart-img">
                    <img className="cart-img-img" src={item.image} alt="" />
                </div>
                <div className="cart-details">
                    <h2>{item.company}</h2>
                    <h3>{item.product}</h3>
                    <h4>
                    &#8377;{item.price}
                    </h4>
                </div>
                <button className='removeBtn' onClick={() => removeFromCart(item)}>Remove</button>
            </div>
        )
    )}
   </div>

}
     
    </div>
</>
  )
}

export default UserCart