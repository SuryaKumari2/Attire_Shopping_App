import './Footer.css'

function Footer() {
    return ( 
        <div className='footer'>
            <div className="footer-logo">
                <img src="/Dresses/Women/woman.png" alt="logo" />
                <p>Attire</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon"  >
                <div className="footer-icons-container">
                    <img src="./Dresses/Women/whatsapp.png" alt="what"  />
                </div>
                <div className="footer-icons-container">
                    <img src="./Dresses/Women/instagram.png" alt="inst" />
                </div>
                <div className="footer-icons-container">
                    <img src="./Dresses/Women/facebook.png" alt="fa" />
                </div>
                <div className="footer-copyright">
                    <hr />
                    <p>CopyRight @2024-All Rights are Reserved</p>
                </div>
            </div>
        </div>
     );
}


export default Footer;