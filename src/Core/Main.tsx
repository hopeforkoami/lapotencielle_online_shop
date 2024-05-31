import { FC, useEffect, useState } from 'react';
import Header from '../Layouts/Header'; 
import {
    Outlet
} from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../Hooks/customSelector'; 
import { setUser } from '../Redux/Reducers/userReducer';
import { RootState } from '../Redux/store';
import { updateProducts,  setShippingCosts, setReductions, setCurrentShippingAddress  } from '../Redux/Reducers/storeReducer';
import { setUnit } from '../Redux/Reducers/productPriceReducer';




const Main: FC = () => {  
    const store = useAppSelector((state) => state.store);
    const user = useAppSelector((state: RootState) => state.users.user );
    const dispatch = useAppDispatch();

    const routes = useAppSelector((state) => state.routes);
    let [ lastRoute, setLastRoute ] = useState("/");

    let [
        showModal, setShowModal
    ] = useState(false);

    useEffect(
        () => {
            let user  = window.localStorage.getItem('__user');
            if (user !== null) { 
                dispatch( setUser( JSON.parse(user) ) );
            }
            let storeProducts = window.localStorage.getItem('_store_products');
            if (storeProducts !== null) { 
                dispatch( updateProducts( JSON.parse(storeProducts) ) );
            }

            let _store_reduction = window.localStorage.getItem('_store_reduction');
            if (_store_reduction !== null) { 
                dispatch( setReductions(Number( _store_reduction )) );
            }

            let _store_shipping_cost = window.localStorage.getItem('_store_shipping_cost');
            if (_store_shipping_cost !== null) { 
                dispatch( setShippingCosts(Number( _store_shipping_cost )) );
            }

            let _store_current_shipping_address = window.localStorage.getItem('_store_current_shipping_address');
            if (_store_current_shipping_address !== null) { 
                dispatch( setCurrentShippingAddress( _store_current_shipping_address ) );
            }

        }, []
    )

    const smoothScroll = (elementId: string) => { 
        // console.log(elementId);
        // console.log(document.querySelector('#'+elementId));
        document.querySelector('#'+elementId)?.scrollIntoView({
            behavior: 'smooth'
        });
    }
    
    useEffect(() => {
        // console.log(routes);
        // window.scrollTo(0, 0);
        smoothScroll("body-top");
        
        if (routes.currentPath == "/" && lastRoute != routes.currentPath) {
            window.location.reload();
        }

        setLastRoute(routes.currentPath);

    }, [ routes ]);

    useEffect(() => {  
 
        window.addEventListener("beforeunload", (event) => {
            
            // event.preventDefault(); 

            // const pageAccessedByReload = (
            //     (window.performance.navigation && window.performance.navigation.type === 1) ||
            //       window.performance
            //         .getEntriesByType('navigation')
            //         .map((nav: any) => nav.type)
            //         .includes('reload')
            //   ); 
            

            const navigationType = 
                (window.performance.getEntriesByType('navigation')
                    [0] as PerformanceNavigationTiming).type;

            console.log(navigationType);

            const isPageReload = navigationType === 'reload';

            console.log("Page is on relaod or not");
            console.log(isPageReload);

            if(!isPageReload) { 
                console.error('Clear storage');
                window.localStorage.removeItem("popup");  
            }  

            return;

        });
         
    
        const pop = window.localStorage.getItem('popup');

        console.log("Pop value");
        console.log(pop);

        if (!(pop === 'true')) {
            console.log("Set pop value");
            setShowModal(true);
        }
        
        window.localStorage.setItem('popup', "true");

        const currency = window.localStorage.getItem('currency');

        if (currency !== null && currency !== '') {
            dispatch( setUnit(currency) );
        }
        

    }, []);
    
    return (
        <> 
            <Header />
            <Outlet />

            { showModal ? <div className="sgpb-main-popup-data-container-464" id="pubpopup"
                style={{ position:'fixed', opacity: '0', filter: 'opacity(0%)', transform: 'scale(0)' }}>
				<div className="sg-popup-builder-content" id="sg-popup-content-wrapper-464" data-id="464" 
                 data-events="[{&quot;param&quot;:&quot;load&quot;,&quot;value&quot;:&quot;&quot;,&quot;hiddenOption&quot;:[]}]" 
                 data-options="{&quot;sgpb-type&quot;:&quot;html&quot;,&quot;sgpb-is-preview&quot;:&quot;0&quot;,&quot;sgpb-is-active&quot;:&quot;checked&quot;,&quot;sgpb-behavior-after-special-events&quot;:[[{&quot;param&quot;:&quot;select_event&quot;}]],&quot;sgpb-content-padding&quot;:&quot;7&quot;,&quot;sgpb-popup-z-index&quot;:&quot;9999&quot;,&quot;sgpb-popup-themes&quot;:&quot;sgpb-theme-1&quot;,&quot;sgpb-overlay-color&quot;:&quot;&quot;,&quot;sgpb-overlay-opacity&quot;:&quot;0.8&quot;,&quot;sgpb-content-custom-class&quot;:&quot;sg-popup-content&quot;,&quot;sgpb-background-image-mode&quot;:&quot;no-repeat&quot;,&quot;sgpb-esc-key&quot;:&quot;on&quot;,&quot;sgpb-enable-close-button&quot;:&quot;on&quot;,&quot;sgpb-close-button-delay&quot;:&quot;0&quot;,&quot;sgpb-close-button-position&quot;:&quot;bottomRight&quot;,&quot;sgpb-button-position-top&quot;:&quot;&quot;,&quot;sgpb-button-position-right&quot;:&quot;9&quot;,&quot;sgpb-button-position-bottom&quot;:&quot;9&quot;,&quot;sgpb-button-position-left&quot;:&quot;&quot;,&quot;sgpb-button-image&quot;:&quot;&quot;,&quot;sgpb-button-image-width&quot;:&quot;21&quot;,&quot;sgpb-button-image-height&quot;:&quot;21&quot;,&quot;sgpb-border-color&quot;:&quot;#000000&quot;,&quot;sgpb-border-radius&quot;:&quot;0&quot;,&quot;sgpb-border-radius-type&quot;:&quot;%&quot;,&quot;sgpb-button-text&quot;:&quot;Close&quot;,&quot;sgpb-overlay-click&quot;:&quot;on&quot;,&quot;sgpb-popup-dimension-mode&quot;:&quot;responsiveMode&quot;,&quot;sgpb-responsive-dimension-measure&quot;:&quot;auto&quot;,&quot;sgpb-width&quot;:&quot;640px&quot;,&quot;sgpb-height&quot;:&quot;480px&quot;,&quot;sgpb-max-width&quot;:&quot;&quot;,&quot;sgpb-max-height&quot;:&quot;&quot;,&quot;sgpb-min-width&quot;:&quot;120px&quot;,&quot;sgpb-min-height&quot;:&quot;&quot;,&quot;sgpb-show-popup-same-user&quot;:&quot;on&quot;,&quot;sgpb-show-popup-same-user-count&quot;:&quot;1&quot;,&quot;sgpb-show-popup-same-user-expiry&quot;:&quot;1&quot;,&quot;sgpb-open-animation-effect&quot;:&quot;No effect&quot;,&quot;sgpb-close-animation-effect&quot;:&quot;No effect&quot;,&quot;sgpb-enable-content-scrolling&quot;:&quot;on&quot;,&quot;sgpb-popup-order&quot;:&quot;0&quot;,&quot;sgpb-popup-delay&quot;:&quot;0&quot;,&quot;sgpb-post-id&quot;:&quot;464&quot;,&quot;sgpb-enable-popup-overlay&quot;:&quot;on&quot;,&quot;sgpb-button-image-data&quot;:null,&quot;sgpb-background-image-data&quot;:null,&quot;sgpbConditions&quot;:null}">
					<div className="sgpb-popup-builder-content-464 sgpb-popup-builder-content-html">
                        <div className="sgpb-main-html-content-wrapper">
                            <div id="custom_html-2" className="widget_text widget widget_custom_html widget-shortcode area-footer-area-1 ">
                                <div className="textwidget custom-html-widget">
                                    <div id="newsletterwidgetminimal-5">
                                        <div className="tnp tnp-widget-minimal">
                                            <form className="tnp-form"  >
                                                <input id="userInput" type="email" name="email" className="tnp-email" placeholder="Email" />
                                                <input className="tnp-submit" type="submit" value="Sign Up" />
                                            </form>
                                        </div>
                                    </div></div></div> 
                                    <style></style>
                                </div></div>
							</div>
            </div> : <></> }
     
        </>
    );
}

export default Main