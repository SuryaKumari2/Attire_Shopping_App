import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Kethnic from "../SmallComponents/Kethnic";
import Kfootwear from "../SmallComponents/Kfootwear";
import Knav from '../SmallComponents/Knav';
import Kletter from '../SmallComponents/Kletter';

import '../SmallComponents/Headbar.css'

function Kids() {
    return ( 
        <div className="kids-head">
            <Kletter/>
                       

   
   <div className="pro-head">
        <h1>Ethnic-wear</h1>
    </div> 
    <Kethnic/>
    <div className="pro-head">
        <h1>Foot-wear</h1>
    </div>
    <Kfootwear/>
             
       

        </div>
     );
}

export default Kids;