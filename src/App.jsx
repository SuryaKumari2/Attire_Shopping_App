

import React from 'react'
import Nav from './Components/Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop'

import Product from './Pages/Product'

import Footer from './Components/Navbar/Footer/Footer'
import Women from './Pages/Women'
import Men from './Pages/Men'
import Kids from './Pages/Kids'
import './App.css'
import Wethnicsingle from './SingleImages/Wethnicsingle'
import UserCart from './Pages/UserCart'
import Wwesternsingle from './SingleImages/Wwesternsingle'
import Wsareessingle from './SingleImages/Wsareessingle'
import Wtshirtssingle from './SingleImages/Wtshirtssingle'
import Wfootwearsingle from './SingleImages/Wfootwearsingle'
import Wjeanssingle from './SingleImages/Wjeanssingle'
import Wkurtassingle from './SingleImages/Wkurtassingle'
import Kethnicsingle from './SingleImages/Kethnicsingle'
import Kfootwearsingle from './SingleImages/Kfootwearsingle'
import Mcasualsingle from './SingleImages/Mcasualsingle'
import Mtshirtsingle from './SingleImages/Mtshirtsingle'
import Mfootwearsingle from './SingleImages/Mfootwearsingle'
import Mformalsingle from './SingleImages/Mformalsingle'
import Mjeanssingle from './SingleImages/Mjeanssingle'


const App=()=>{
  return(
    <div>
      
      <Router>

     
      <Nav/>
     

      
      <Routes>
       < Route path='/' element={<Shop/>}/>
       < Route path='/mens/*'element={<Men/>}  />
       < Route path='/womens/*' element={<Women/>} />
       < Route path='/kids/*' element={<Kids/>} />
       <Route path='/product' element={<Product/>} >
        <Route  path=':productId' element={<Product/>}  />
       </Route>
       < Route path='/cart' element={<UserCart/>}/>
       
       < Route path='/wethnic/:id' element={<Wethnicsingle/>} />
       < Route path='/wwestern/:id' element={<Wwesternsingle/>} />
       < Route path='/wsarees/:id' element={<Wsareessingle/>} />
       < Route path='/wtshirts/:id' element={<Wtshirtssingle/>} />
       < Route path='/wfootwear/:id' element={<Wfootwearsingle/>} />
       < Route path='/wjeans/:id' element={<Wjeanssingle/>} />
       < Route path='/wkurtas/:id' element={<Wkurtassingle/>} />
       < Route path='/kethnic/:id' element={<Kethnicsingle/>} />
       < Route path='/kfootwear/:id' element={<Kfootwearsingle/>} />
       < Route path='/mcasual/:id' element={<Mcasualsingle/>} />
       < Route path='/mtshirt/:id' element={<Mtshirtsingle/>} />
       < Route path='/mfootwear/:id' element={<Mfootwearsingle/>} />
       < Route path='/mformal/:id' element={<Mformalsingle/>} />
       < Route path='/mjeans/:id' element={<Mjeanssingle/>} />
      </Routes>
      </Router>
      <Footer/>

      
    </div>
  )
}
export default App;