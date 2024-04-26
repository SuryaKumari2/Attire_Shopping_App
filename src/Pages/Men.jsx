import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Mcasual from "../SmallComponents/Mcasual";
import Mfootwear from "../SmallComponents/Mfootwear";
import Mformal from "../SmallComponents/Mformal";
import Mjeans from "../SmallComponents/Mjeans";
import Mtshirt from "../SmallComponents/Mtshirt";

import '../SmallComponents/Headbar.css'
import Mletter from '../SmallComponents/Mletter';


function Men() {
    return ( 
        <div className="men-head">
<Mletter/>
<div className="pro-head">
        <h1>Foraml-shirts</h1>
    </div>                     
<Mformal/>
    <div className="pro-head">
        <h1>Jeans</h1>
    </div>
    <Mjeans/>


    <div className="pro-head">
        <h1>Casual-shirts</h1>
    </div>
    <Mcasual/>

    <div className="pro-head">
        <h1>T-shirts</h1>
    </div> 
    <Mtshirt/>
    <div className="pro-head">
        <h1>Foot-wear</h1>
    </div>
    <Mfootwear/>
         


        </div>
     );
}

export default Men;