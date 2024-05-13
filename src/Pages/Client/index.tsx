import './style.css';
import { FC, useEffect, useState } from 'react'; 
import {
    Outlet,
    Link,
    useLocation
} from "react-router-dom";
import Footer from '../../Layouts/Footer';
 

const Client: FC = () => { 
    
    const location = useLocation();

    useEffect(() => {
        console.log(location);
    }, [location])
   
    
    return (
        <> 
            <div id="ajax-content-wrap">
                    <div className="breadcrumb">
                        <span><span><a href="/">Home</a> / <span className="breadcrumb_last" aria-current="page">My account</span></span></span>		
                    </div>
                    <div className="container-wrap" style={{ minHeight: "547px" }} >
                    <br/>
                    <div className="container main-content">
                        <div className="row">
                            <div className="woocommerce">

                                <nav className="woocommerce-MyAccount-navigation">
                                    <ul>
                                            <li className={`woocommerce-MyAccount-navigation-link 
                                            woocommerce-MyAccount-navigation-link--dashboard ${ location.pathname === '/client' ? "is-active" : "" }`}>
                                                <Link to="/client" >Dashboard</Link>
                                            </li>
                                                    <li className={`woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders ${ location.pathname.indexOf('orders') > 0 ? "is-active" : "" }`}>
                                                <Link to="/client/orders" > Orders</Link>
                                            </li>
                                                    <li className={`woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--downloads ${ location.pathname.indexOf('downloads') > 0 ? "is-active" : "" }`}>
                                                    <Link to="/client/downloads" > Downloads</Link>
                                            </li>
                                                    <li className={`woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-address ${ location.pathname.indexOf('adresses') > 0 ? "is-active" : "" }`}>
                                                    <Link to="/client/adresses" >Addresses</Link>
                                            </li>
                                                    <li className={`woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-account ${ location.pathname.indexOf('account') > 0 ? "is-active" : "" }`} >
                                                    <Link to="/client/account-details" >Account details</Link>
                                            </li>
                                                    <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout">
                                                    <Link to="#" >Log out</Link>
                                            </li>
                                            </ul>
                                </nav>


                                <div className="woocommerce-MyAccount-content">
                                    <div className="woocommerce-notices-wrapper"></div>
                                    <Outlet />
                                </div>

                            </div>
		                </div>
                    </div>

                <Footer />
            </div>

            </div>
     
        </>
    );
}

export default Client