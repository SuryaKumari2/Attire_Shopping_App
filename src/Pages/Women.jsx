

import Wsarees from "../SmallComponents/Wsarees";
import Wethnic from "../SmallComponents/Wethnic";
import Wwestern from "../SmallComponents/Wwestern";
import Wkurtas from "../SmallComponents/Wkurtas";
import Wtshirt from "../SmallComponents/Wtshirt";
import Wjeans from "../SmallComponents/Wjeans";
import Wfootwear from "../SmallComponents/Wfootwear";

import '../SmallComponents/Headbar.css'
import Wletter from "../SmallComponents/Wletter";




function Women() {
    return ( 
        <div className="women-head">   
        <Wletter/>
    <div className="pro-head">
        <h1>Sarees</h1>
    </div>
    <Wsarees/>
        
    <div className="pro-head">
        <h1>Ethnic-wear</h1>
    </div>
        <Wethnic/>     
<div className="pro-head">
    <h1>Western-wear</h1>
</div>
    <Wwestern/>
       
<div className="pro-head">
    <h1>Kurtas</h1>
</div>
    <Wkurtas/>
 
       
<div className="pro-head">
    <h1>T-shirts</h1>
</div>
    <Wtshirt/>
       
<div className="pro-head">
    <h1>Jeans</h1>
</div>
<Wjeans/>
   
<div className="pro-head">
    <h1>Foot-wear</h1>
</div>
<Wfootwear/>
            
            
           
            
            
          

        </div>
     );
}

export default Women;