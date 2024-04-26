
import { wsareesData } from "../Data/Women/Sarees";
import { useParams } from "react-router-dom";
import './Single.css'
import { useCart } from "../Pages/CartContext";
const Wsareessingle=()=> {
    const {id}=useParams()
    const {addToCart,cartItems}=useCart()
const products=wsareesData.find((item)=>item.id===id)
    return (
        <>
       
            <div className="in-page">
            <div className="in-left">
            <div className="in-side-box">
           
            <img src={products.image} alt="" />
            <img src={products.image} alt="" />
            
            </div>
            
            </div>
            <div className="in-mid">
            <div className="in-img-box">
                <img className="in-img" src={products.image} alt="" />
            </div>
            </div>
            
            <div className="in-right">
            <div className="in-model">
                <h3>{products.company}</h3>
            </div>
            <div className="in-descri">
                <h4>{products.product}</h4>
            </div>
            <button className="ratings">4.2 &#x2605; | Ratings</button>
            <hr/>
            <div className="in-price">
                <h4>&#x20B9;{products.price} <span className="in-off">(50% off)</span> </h4>
            </div>
            <p>Including all taxes</p>
            
            <button className="cart-btn" onClick={()=>addToCart(products)}>&#x1F512; Add to Cart</button>
            </div>
           
        </div>
        </>
        
      );
}

export default Wsareessingle;