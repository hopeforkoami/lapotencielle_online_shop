import React from 'react';
import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate
} from "react-router-dom";

// Redux
import { useAppDispatch } from './Hooks/customSelector';
import { setUser } from './Redux/Reducers/userReducer';

//Core  
import Main from './Core/Main';

// Pages
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound';
import Track from './Pages/Track';
import Products from './Pages/Products';
import Product from './Pages/Product';
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
import Client from './Pages/Client';
import Dashboard from './Pages/Client/Dashboard';
import Order from './Pages/Client/Order';
import Download from './Pages/Client/Download';
import Adress from './Pages/Client/Adress';
import Account from './Pages/Client/Account';
import OrderDetails from './Pages/Client/Order/details';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
type ProtectedRouteProps = { 
  outlet: JSX.Element;
};


function ProtectedRoute({ outlet }: ProtectedRouteProps) {

  const dispatch = useAppDispatch();
  const user = window.localStorage.getItem('__user');

  if( user !== null && user !== undefined ) {
    dispatch( setUser( JSON.parse(user)  ) ); 
    return outlet;
  } else {
    window.location.href = "/myaccount"
    return <Navigate to={{ pathname: '/myaccount' }}  replace={true} />;
  }

};

function App() {
  return ( 
      <Router  > 
        <Track />
          <Routes > 

            <Route path="/" element={ <Main />} >
              <Route index element={<Home />} />
              <Route  path="/products/:group/:category" element={ <Products />} />
              <Route  path="/product/:id" element={ <Product />} />
              <Route  path="/product/:id/:forKit" element={ <Product />} />

              <Route  path="/cart" element={ <Cart />} />
              <Route  path="/cart/checkout" element={ <Checkout />} />

              <Route  path="/myaccount" element={ <Myaccount />} />

              <Route  path="/news/:title" element={ <News />} />
              <Route  path="/kits/:group/:category" element={ <Kits />} /> 
              <Route  path="/kit/:id" element={ <Product />} />
              <Route  path="/kit/:id/:forKit" element={ <Product />} />
              
              <Route  path="/about" element={ <About />} />
              <Route  path="/contact" element={ <Contact />} />
              <Route  path="/terms-conditions" element={ <Terms/>} />
              <Route  path="/privacy-policy" element={ <Privacy/>} />
              <Route  path="/shipping-policy" element={ <ShippingPolicy/>} />
              <Route  path="/cookie-policy" element={ <CookiesPolicy/>} />
              <Route  path="/return-policy" element={ <ReturnPolicy/>} />
              <Route  path="/legal-disclaimer" element={ <Legal/>} />

              <Route  path="/search/:keyword" element={ <Search />} />

              {/* Client */}
              <Route path="client" element={<ProtectedRoute  outlet={ <Client />} />} >
                <Route index element={<ProtectedRoute  outlet={ <Dashboard />} />} />
                <Route path="orders" element={<ProtectedRoute  outlet={ <Order />} />} />
                <Route path="orders/:id" element={<ProtectedRoute  outlet={ <OrderDetails />} />} /> 
                <Route path="downloads" element={<ProtectedRoute  outlet={ <Download />} />} /> 
                <Route path="adresses" element={<ProtectedRoute  outlet={ <Adress />} />} /> 
                <Route path="account-details" element={<ProtectedRoute  outlet={ <Account />} />} /> 
              </Route>

            </Route>
            
            <Route path="*" element={ <NotFound />} />
          </Routes>
          
      </Router>
     
  );
}

export default App;
