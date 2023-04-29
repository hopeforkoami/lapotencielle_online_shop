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
              <Route  path="/myaccount" element={ <Myaccount />} />
              <Route  path="/news/:title" element={ <News />} />
              <Route  path="/kits/:group/:category" element={ <Kits />} />
              <Route  path="/kit/:id" element={ <Kit />} />
              <Route  path="/about" element={ <About />} />
              <Route  path="/contact" element={ <Contact />} />
            </Route>
            
            <Route path="*" element={ <NotFound />} />
          </Routes>
          
      </Router>
     
  );
}

export default App;
