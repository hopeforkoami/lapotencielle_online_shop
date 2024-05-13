import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

 
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound';

import Track from './Pages/Track';
import Products from './Pages/Products';
import Product from './Pages/Product';

//Core  
import Main from './Core/Main';
import Cart from './Pages/Cart';
import Myaccount from './Pages/Myaccount';
import News from './Pages/News';
import Kits from './Pages/Kits';
import Kit from './Pages/Kit';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Terms from './Pages/Terms/Terms';
import Privacy from './Pages/Privacy/Privacy';
import ShippingPolicy from './Pages/ShippingPolicy/ShippingPolicy';
import CookiesPolicy from './Pages/CookiesPolicy/CookiesPolicy';
import ReturnPolicy from './Pages/Return/ReturnPolicy';
import Legal from './Pages/Legal/Legal';
import Checkout from './Pages/Cart/checkout';
import Search from './Pages/Search';

function App() {
  return ( 
      <Router  > 
        <Track />
          <Routes > 

            <Route path="/" element={ <Main />} >
              <Route index element={<Home />} />
              <Route  path="/products/:group/:category" element={ <Products />} />
              <Route  path="/product/:id" element={ <Product />} />

              <Route  path="/cart" element={ <Cart />} />
              <Route  path="/cart/checkout" element={ <Checkout />} />

              <Route  path="/myaccount" element={ <Myaccount />} />

              <Route  path="/news/:title" element={ <News />} />
              <Route  path="/kits/:group/:category" element={ <Kits />} />
              <Route  path="/kit/:id" element={ <Kit />} />
              <Route  path="/kit/:id" element={ <Kit />} />
              
              <Route  path="/about" element={ <About />} />
              <Route  path="/contact" element={ <Contact />} />
              <Route  path="/terms-conditions" element={ <Terms/>} />
              <Route  path="/privacy-policy" element={ <Privacy/>} />
              <Route  path="/shipping-policy" element={ <ShippingPolicy/>} />
              <Route  path="/cookie-policy" element={ <CookiesPolicy/>} />
              <Route  path="/return-policy" element={ <ReturnPolicy/>} />
              <Route  path="/legal-disclaimer" element={ <Legal/>} />

              <Route  path="/search" element={ <Search />} />
            </Route>
            
            <Route path="*" element={ <NotFound />} />
          </Routes>
          
      </Router>
     
  );
}

export default App;
