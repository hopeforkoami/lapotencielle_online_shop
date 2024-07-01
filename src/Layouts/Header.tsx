import { FC, useState } from 'react' 
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../Hooks/customSelector'; 
import { setUser } from '../Redux/Reducers/userReducer';
import { RootState } from '../Redux/store';
//importing the special css file for the header
import './header.css';
 
import { Formik, Field, Form, FormikProps } from 'formik'
import * as yup from 'yup';
import * as Utils from '../Utils';
import { setUnit } from '../Redux/Reducers/productPriceReducer';

import '../country-flags-master/dist/country-flag.css'
import AllService from '../Pages/service';
import PriceUnitBox from '../Components/PriceUnitBox';
import { deleteBasketProduct, getBasketContents, removeProduct } from '../Redux/Reducers/storeReducer';
const CountryFlag = require( '../country-flags-master/dist/country-flag.js');

var countries = require('country-data-list').countries ;

const Header: FC<{  }> = (  ) => { 

    const store = useAppSelector((state) => state.store);
    const user = useAppSelector((state: RootState) => state.users.user );
    const unit = useAppSelector((state: RootState) => state.units.unit );

    const currentRoutes = useAppSelector((state: RootState) => state.routes.currentRoute );

    const allService = new AllService();

    let [ currency, setCurrency ] = useState('USD')

    const productSearchResultsInit: Array<any> = [];
    let [ productSearchResults, setProductSearchResults ] = useState(productSearchResultsInit);

    let cchoose: any = null;
    let [ countryChoose, setCountryChoose ] = useState(cchoose);

    const dispatch = useAppDispatch();

    let navigate = useNavigate();

    let flagInit: any = null;

    let [ flag, setFlag ] = useState(flagInit);

    let cartDrop = document.getElementById('cartDropdown');

    let initialTotal: number = 0;
    let [ storeTotal, setStoreTotal ] = useState(initialTotal);

    const getStoreTotal = () => {
        let strTtl = 0;
        store.products.forEach(
            (row: any) => {
                strTtl += ( (Number(row.product?.capitalUnitaireProduit) + Number(row.product?.interetUnitaireProduit)) * row.qty );
            }
        );
        setStoreTotal( (e) => strTtl );
    }


    useEffect(() => {
        getStoreTotal();
    }, [store.products])

    useEffect(() => {
        if (cartDrop !== null) {

            cartDrop?.addEventListener("mouseover", (event: any) => { 
                event.preventDefault();
                document.getElementById('cartDropdown')?.classList.add('show-dropdown');
            }); 

            cartDrop?.addEventListener("mouseout", (event: any) => { 
                event.preventDefault();
                document.getElementById('cartDropdown')?.classList.remove('show-dropdown'); 
            }); 

        }
    }, [cartDrop])

    useEffect(() => { 

        dispatch( getBasketContents({ 
            dispatch: dispatch,
            navigate: navigate
        }));

        getStoreTotal();
        
        let serach_input = window.document.getElementById('630b971a47893');
        
        serach_input?.addEventListener("keyup", async (event)=> {

             

            if (event.keyCode === 13 || event.key === "Enter") {
                event.preventDefault();
            }

            const eventTarget: any = event?.target;

            console.log('Search str');
            console.log(eventTarget.value);
 
           if (eventTarget.value !== null && eventTarget.value !== '') {
            await allService.searchByBarcodeOrName(  eventTarget.value  ).then(async function (response: any) {
                console.log(response); 
                setProductSearchResults((d) => ([]));
                setProductSearchResults((d) => response?.data);
            })
              .catch(function (error: any) {
                console.log(error); 
            });
           } else {
            setProductSearchResults((d) => ([]));
           }
            
           
        });   

        const parentElement = document.getElementById("flag-parent-element");
        setFlag(new CountryFlag.CountryFlag(parentElement));

    }, []);

    useEffect(() => {

        window.onload = function() {

            // alert('Dom ready');

            const userPhoto = document.getElementById("user-photo");

            userPhoto?.addEventListener("click", (event)=> {
                document.getElementById('myDropdown')?.classList.toggle("show-dropdown");
            }); 

            window.onclick = function(event) {
                let targets: any = event.target;
                if (!targets?.matches('.user-photo')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show-dropdown')) {
                    openDropdown.classList.remove('show-dropdown');
                    }
                }
                }
            } 


            const cartDropdown = document.getElementById("cart-dropdown-icon");
 
            
            cartDropdown?.addEventListener("mouseover", (event: any) => {
                event.preventDefault();
                document.getElementById('cartDropdown')?.classList.add('show-dropdown');
            }); 

            cartDropdown?.addEventListener("mouseout", (event: any) => {
                event.preventDefault();
                document.getElementById('cartDropdown')?.classList.remove('show-dropdown'); 
            }); 

            window.onclick = function(event) {
                let targets: any = event.target; 
                if (!targets?.matches('.cart-dropdown-icon') &&
                    !targets?.matches('.icon-salient-cart')) {
                    var dropdowns = document.getElementsByClassName("cartDropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show-dropdown')) {
                        openDropdown.classList.remove('show-dropdown');
                        }
                    }
                }
            } 

            const subMenus = document.querySelectorAll('ul.sub-menu li');

            for(var i =0; i <= (subMenus.length - 1); i++) {

                console.log(subMenus[i]);

                subMenus[i].addEventListener("click", (event: any) => {
                    console.log("Menu is clicked");
                    let htmlEl = event.target.parentElement;

                    // classList.contains('menu-title-text')

                    while( !( htmlEl.classList.contains('menu-item-custom') ) ) {
                        htmlEl = htmlEl.parentElement;
                    }

                    console.log(htmlEl);
                    console.log(htmlEl.querySelector('.sub-menu'));

                    htmlEl.querySelector('.sub-menu').style.display = 'none'; 

                });
                
            }

            const mainMenus = document.querySelectorAll('.menu-item-custom');

            for(var i =0; i <= (mainMenus.length - 1); i++) {

                console.log(mainMenus[i]);

                mainMenus[i].addEventListener("mouseover", (event: any) => {
                    console.log("Menu over");
                    let htmlEl = event.target.parentElement; 

                    htmlEl.querySelector('.sub-menu').style.display = ''; 

                });
                
            }

        };

    }, []);

    useEffect(() => { 
             
    
        if (flag !==  null) { 
            flag.selectByAlpha2("us");
        }

    }, [flag]);

    
        const onCurrencyChange = (e: any) => {
            const c = countries.all.filter((ch: any) => ch.alpha2 ===e.target.value)[0];
            window.localStorage.setItem('currentCountry', JSON.stringify(c));
            setCountryChoose(c)
            setCurrency(c.currencies[0]);
            dispatch( setUnit(c.currencies[0]) );

        }

        useEffect(() => { 
             
    
            if (countryChoose !==  null) { 
                flag.selectByAlpha2(countryChoose.alpha2.toLowerCase());
            }
    
        }, [countryChoose]);

        const onProductSearch = (event: any) => {
            event.preventDefault();
            console.log(event.target.value);
        }

        useEffect(() => { 
             
            if (unit !== null) { 
                let currentCountry =  window.localStorage.getItem('currentCountry');
                if (currentCountry !== null && currentCountry !== '') {
                    currentCountry = JSON.parse(currentCountry);
                    setCountryChoose(currentCountry);
                    setCurrency(unit);
                }
                
            }
    
        }, [unit]);


      
        return (      
            < > 
    <div id="header-outer" data-has-menu="true" data-has-buttons="yes" data-header-button_style="default" data-using-pr-menu="false" data-mobile-fixed="1" data-ptnm="false" data-lhe="animated_underline" data-user-set-bg="#ffffff" data-format="centered-menu-bottom-bar" data-menu-bottom-bar-align="center" data-permanent-transparent="false" data-megamenu-rt="1" data-remove-fixed="1" data-header-resize="0" data-cart="true" data-transparency-option="0" data-box-shadow="large" data-shrink-num="6" data-using-secondary="0" data-using-logo="1" data-logo-height="100" data-m-logo-height="70" data-padding="28" data-full-width="true" data-condense="false">
        { productSearchResults.length > 0 && <div   className="aws-search-result"
         style={{ width: '289px', top: '104px', left: '20px' }}>
                    <ul>
                        {
                           productSearchResults.map(
                            (prd) => (<li className="aws_result_item" style={{ position: 'relative' }}>
                            <div className="aws_result_link">
                                {/* <a  
                            href="https://www.lapotencielle.com/product/organic-light-whipped-body-butter-coco-mousse/"> */}
                                <Link onClick={() => {  setProductSearchResults((d) => ([])); }} className="aws_result_link_top" to={ '/product/' + prd?.id } >
                                {prd?.fullName}</Link><span className="aws_result_image">
                                    <img src={'https://lapotnewapi2files.nogdevhouse.com/images/products/'+prd?.image} /></span>
                            <span className="aws_result_content">
                                <span className="aws_result_title"> 
                                <strong>{prd?.fullName}</strong></span>
                                {/* <span className="aws_result_excerpt">ORGANIC VIRGIN <strong>COCO</strong>
                                NUT OIL: It hydrates skin for 24 hours and helps to improve skin elasticity and collagen production.
                                </span> */}
                                <span className="aws_result_price">
                                    <span className="woocs_price_code" data-product-id="271"> <PriceUnitBox price={prd?.pu} /> </span></span></span></div></li>)
                           ) 
                        }
                        
                        <li className="aws_result_item aws_search_more"><a href="#">Voir tous les résultats</a></li>
                    </ul>
                </div> 
        }
        <div id="search-outer" className="nectar">
          <div id="search">
            <div className="container">
              <div id="search-box">
                <div className="inner-wrap">
                  <div className="col span_12">
                        <form>
                            <input type="text" aria-label="Search" 
                            placeholder="Search 2"  />
                            <span>Hit enter to search or ESC to close</span>
                            <input type="hidden" name="post_type" value="product" />						
                        </form>
                  </div> 
                </div> 
              </div> 
                <div id="close"><a href="#"><span className="screen-reader-text">Close Search</span>
                    <span className="close-wrap"> <span className="close-line close-line1"></span> <span className="close-line close-line2"></span>
                    </span>				 </a>
                </div>
                
            </div> 
          </div> 
        </div> 
  
  <header id="top">
      <div className="container">
          <div className="row">
              <div className="countries-modal">
                  
  <div className="modal show fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" style={{ paddingRight: "17px", display: "none" }}>
      <div className="modal-dialog" role="document">
          <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Choose country</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                  </button>
              </div>
              <div className="modal-body">
                  <div className="borderfree__dropdown" data-role="dropdownDialog" data-mage-init="{&quot;dropdownDialog&quot;:{
                      &quot;appendTo&quot;:&quot;[data-block=borderfree__dropdown]&quot;,
                      &quot;triggerTarget&quot;:&quot;.borderfree__link&quot;,
                      &quot;timeout&quot;: &quot;500&quot;,
                      &quot;closeOnMouseLeave&quot;: false,
                      &quot;closeOnEscape&quot;: false,
                      &quot;triggerClass&quot;:&quot;active&quot;,
                      &quot;triggerEvent&quot;:&quot;click&quot;,
                      &quot;parentClass&quot;:&quot;active&quot;,
                      &quot;buttons&quot;:[]}}" data-bind="scope: 'borderfree_dropdown'">
                   
                      <form action="" id="borderfree-dropdown-form">
                          
                          <label>
                              I'm shipping to: 
                              <select  onChange={ onCurrencyChange } value={ countryChoose ? countryChoose.alpha2 : 'US' }  name="country" id="con" >
                                 
                                  {
                                    countries !== null ? countries.all.map((c:any, index: number) => 
                                    <option key={index} value={ c.alpha2  } selected={ c.alpha2 === 'US' }  label={c.name}>
                                         {c.name}</option>)
                                    : <></>
                                  }
                                 
                              </select>

                              <input type="text" id="curr" 
                                style={{ borderRadius: 0,
                                border: "1px solid #979797",
                                backgroundColor: "#fff",
                                boxSizing: "border-box",
                                fontSize: "14px",
                                height: "48px",
                                lineHeight: "26px",
                                padding: "10px 18px", 
                                verticalAlign: "baseline",
                                width: "100%" }} size={40} name="currency" value={currency} />
                              
                          </label>
                          <input type="button" onClick={() => {
                            const modalcurrency = document.getElementById('exampleModal');
                            if (modalcurrency !== null) {
                                modalcurrency.style.display = 'none';
                            }
                          }} className="button button-small button-default" value="Ok" />
                      </form>
                  </div>
              </div>
              
          </div>
      </div>
  </div>			</div>
              <div className="col span_3">
                                  <a id="logo" href="/" data-supplied-ml-starting-dark="false" data-supplied-ml-starting="false" data-supplied-ml="false">
                      <img className="stnd skip-lazy dark-version" width="234" height="112" alt="lapOtencielle"
                       src="/assets/wp-content/uploads/2022/01/images-logo_solo2.png" />				</a>
                                      <nav className="left-side" data-using-pull-menu="true">
                          <div className="header_slider">
                            <section className="vertical-center slider">
                              <div className="slide-heart">
                                  <img src="/assets/wp-content/uploads/2022/02/22.png" /><p>Price match guarantee </p>
                              </div>
                              <div className="slide-bear">
                                  <img src="/assets/wp-content/uploads/2022/02/11-2.png" /><p><b>Delivery Schedule:</b> Delivery may take longer than usual due to covid-19</p>
                              </div>
                            </section>
                          </div>
                          <div className="search_bar">
                          <div className="aws-container" data-url="/?wc-ajax=aws_action" data-siteurl="." data-lang="" data-show-loader="true" data-show-more="true" data-show-page="true" data-ajax-search="true" data-show-clear="true" data-mobile-screen="false" data-use-analytics="false" data-min-chars="1" data-buttons-order="2" data-timeout="300" data-is-mobile="false" data-page-id="5" data-tax="">
                          <Formik
        initialValues={ 
            {
                searchStr: '' 
        }}

        validationSchema={
            yup.object().shape({
                 
                searchStr: yup 
                    .string()
                    .required(`${'You must accept the terms and conditions'}`)
            })
        }
        // innerRef={formRef}
        onSubmit={async (
            values 
          ) => {
                console.log(values);
               if (values.searchStr !== null  && values.searchStr !== '') {
                    navigate( '/products/' + 'SEARCH-'+ values.searchStr.toUpperCase() + '/' + values.searchStr.toLowerCase() );
                    values.searchStr = '';
               }
            }}
        >
            {({ dirty, errors, touched, isValid, handleChange, handleBlur, handleSubmit, values }) => (
                    <Form className="aws-search-form" > 
                        <div className="aws-wrapper">
                        <label className="aws-search-label" htmlFor="630b971a47893">Search</label>
                        <input  type="search"  id="630b971a47893" onChange={handleChange('searchStr')}
                                            onBlur={handleBlur('searchStr')}
                                                value={values.searchStr}  className="aws-search-field" 
                        placeholder="Search" autoComplete="off" />
                        {/* <input type="hidden" value="product"/>
                        <input type="hidden" name="type_aws" value="true" /> */}
                        <div className="aws-search-clear"><span>×</span></div>
                        <div className="aws-loader"></div>
                        </div>
                        <button type='submit' className="aws-form-btn">
                            <span className="aws-search-btn_icon"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></span>
                        </button>
                    </Form>
            )}
        </Formik>
  </div>						</div>	
                                              </nav>
                      <nav className="right-side">
  						{/* <div className="woo_currency_switcher">
                                                      </div>  */}
                          <div className="woocs_currency_switcher">
                              <div className="country_btn">
                                      <div style={{ marginTop:"-7px" }}
                                            className="borderfree bfx_hidden" data-block="borderfree__dropdown">
                                            <a className="show-btn borderfree__link" style={{ cursor: 'pointer' }}>
                                                <div id="flag-parent-element"
                                                 className='flag-element'></div><span> { currency } </span>
                                            </a>
                                      </div>
                                  </div>
                                                                                                              </div> 
                          <ul id="menu-right_nav" className="sf-menu"><li style={{ position:"relative"}} className="menu-item menu-item-gtranslate">
 
<select   className="notranslate" id="gtranslate_selector" aria-label="Website Language Selector"><option value="">Select Language</option>
    <option value="en|en">English</option>
    <option value="en|fr">French</option>
    <option value="en|de">German</option>
    <option value="en|it">Italian</option>
    <option value="en|ru">Russian</option>
    <option value="en|es">Spanish</option>
</select>

  <div id="google_translate_element2"></div>
  {/* <script>function googleTranslateElementInit2() {new google.translate.TranslateElement({pageLanguage: 'en',autoDisplay: false}, 'google_translate_element2');}if(!window.gt_translate_script){window.gt_translate_script=document.createElement('script');gt_translate_script.src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2';document.body.appendChild(gt_translate_script);}</script>
  
  <script>
  function GTranslateGetCurrentLang() {var keyValue = document['cookie'].match('(^|;) ?googtrans=([^;]*)(;|$)');return keyValue ? keyValue[2].split('/')[2] : null;}
  function GTranslateFireEvent(element,event){try{if(document.createEventObject){var evt=document.createEventObject();element.fireEvent('on'+event,evt)}else{var evt=document.createEvent('HTMLEvents');evt.initEvent(event,true,true);element.dispatchEvent(evt)}}catch(e){}}
  function doGTranslate(lang_pair){if(lang_pair.value)lang_pair=lang_pair.value;if(lang_pair=='')return;var lang=lang_pair.split('|')[1];if(GTranslateGetCurrentLang() == null && lang == lang_pair.split('|')[0])return;if(typeof ga=='function'){ga('send', 'event', 'GTranslate', lang, location.hostname+location.pathname+location.search);}var teCombo;var sel=document.getElementsByTagName('select');for(var i=0;i<sel.length;i++)if(sel[i].className.indexOf('goog-te-combo')!=-1){teCombo=sel[i];break;}if(document.getElementById('google_translate_element2')==null||document.getElementById('google_translate_element2').innerHTML.length==0||teCombo.length==0||teCombo.innerHTML.length==0){setTimeout(function(){doGTranslate(lang_pair)},500)}else{teCombo.value=lang;GTranslateFireEvent(teCombo,'change');GTranslateFireEvent(teCombo,'change')}}
  </script> */}
  </li></ul>						<ul className="buttons" data-user-set-ocm="off">
  <li id="search-btn">
  <div><a href="#searchbox"><span className="icon-salient-search" aria-hidden="true"></span><span className="screen-reader-text">search</span></a></div> </li>			 <li id="nectar-user-account" className="">
  <div>
    {
        user !== null ? 
        <div className="user-account-btn " >
            <img style={{ cursor: 'pointer' }} id='user-photo' className='user-photo user-account-btn' 
            src="/assets/images/user.png" alt="" /> 
            <span className="screen-reader-text">
                   account </span>
            <div id="myDropdown" className="dropdown-content">
                <ul style={{ listStyle: "none", marginLeft: "4px", minWidth: "160px" }}>
                    <li>
                        <Link to="/client">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/client/account-details">My account</Link>
                    </li>
                    <li>
                        <Link to="/client/orders">My orders</Link>
                    </li>
                    <li>
                        <Link onClick={() => {  
                            const response = window.confirm("Are you Sure to log-out ?");
                            if (response) {
                                window.localStorage.removeItem('__user');
                                window.location.reload(); 
                            }
                        }} to="#">  Log-out  </Link>
                    </li>
                </ul>
                
               
            </div>
        </div> : 
        <Link className="user-account-btn" to="/myaccount">
        <span className="icon-salient-m-user" aria-hidden="true"></span>
        <span className="screen-reader-text">
                   account </span></Link>
    } 
    </div>  </li> 
    <li className="nectar-woo-cart">
              <div className="cart-outer" data-user-set-ocm="off" data-cart-style="dropdown">
                  <div className="cart-menu-wrap">
                      <div className="cart-menu">
                          <a id="cart-dropdown-icon"  className="cart-contents cart-dropdown-icon" ><div className="cart-icon-wrap">
                            <i className="icon-salient-cart" aria-hidden="true"></i> <div className="cart-wrap"><span>{ store.products.length } 
                                </span></div> </div></a>

                                <div id="cartDropdown" className="cartDropdown-content">
                                <div className="widget"  >
                                    <h5> <b>Cart</b> </h5>
                                { store.loading ? <b>Loading</b> : store.products.length > 0  ? <div className="">

                <ul style={{ width: "100%" }} className="woocommerce-mini-cart cart_list product_list_widget " >
                    {
                        store.products.map(
                            (row: any) => <li style={{ width: "100%" }} className="woocommerce-mini-cart-item mini_cart_item">
                                <span onClick={(event: any) => {
                                    event.preventDefault();
                                    // dispatch( removeProduct( row ) );

                                    dispatch( deleteBasketProduct({ 
                                        idLigne: Number(row.contentLine),
                                        dispatch: dispatch,
                                        navigate: navigate,
                                        kit: row.grpType !== undefined ? true : false
                                    })  )

                                }} style={{ position: 'absolute', left: '1px', top: '1px', cursor: 'pointer', fontSize: '20px' }} 
                                className="remove remove_from_cart_button" aria-label="Remove this item">×</span>											
                                <Link to={ '/product/' + row.product.id } >
                                        <img style={{ width: '50px', height: '50px', float: 'left'  }} 
                                        src={ Utils._mediaUrl + row.product?.image } 
                                        alt=""  decoding="async" loading="lazy"  />
                                        <span style={{ fontSize: '19px' }}> { row.product.libProduit } </span> </Link>
                                <span>{row.qty} × <span className="woocs_special_price_code"> <PriceUnitBox price={ (Number(row.product?.capitalUnitaireProduit) + Number(row.product?.interetUnitaireProduit) ) } />
                                    </span></span>				
                            </li>   
                        )
                    }
                   
                </ul>

<p className='woocommerce-mini-cart__total total' >
    <strong>Subtotal: </strong> <span className="woocs_special_price_code"> <PriceUnitBox price={  storeTotal  } /></span>	</p>


<p className="woocommerce-mini-cart__buttons buttons">
    <button style={{ display: 'inline-block', backgroundColor: 'black' }} onClick={() => { 
        navigate('/cart');
     }} className='button hover-cart-btn'>
        View cart
    </button>
    <button style={{ display: 'inline-block', backgroundColor: 'black' }} onClick={() => { 
        navigate('/cart');
     }} className='button hover-cart-btn'>
        Checkout
    </button>
    {/* <a href="https://www.lapotencielle.com/cart/" className="button wc-forward"></a>
    <a href="https://www.lapotencielle.com/checkout/" className="button checkout wc-forward"></a> */}
</p>

</div> :<p> <b> No products in the card </b> </p> } </div>
                                </div>

                      </div>
                  </div>
  
                                      {/* <div className="cart-notification">
                          <span className="item-name"></span> was successfully added to your cart.					</div> */}
                  
                  {/* <div className="widget woocommerce widget_shopping_cart">
  <h2 className="widgettitle">Cart</h2>
  <div className="widget_shopping_cart_content"></div>
  </div> */}
 

              </div>
  
              </li>
  </ul>
                                                                              <div className="slide-out-widget-area-toggle mobile-icon slide-out-from-right" data-custom-color="false" data-icon-animation="simple-transform">
                                  <div> <a href="#sidewidgetarea" aria-label="Navigation Menu" aria-expanded="false" className="closed">
                                      <span className="screen-reader-text">Menu</span><span aria-hidden="true"> <i className="lines-button x2"> <i className="lines"></i> </i> </span> </a> </div>
                              </div>
                                              </nav>
                              </div>
  
              <div className="col span_9 col_last">
                                      <a className="mobile-search" href="#searchbox"><span className="nectar-icon icon-salient-search" aria-hidden="true"></span><span className="screen-reader-text">search</span></a>
                                          <a className="mobile-user-account" href="http://lapotencielle.com/my-account/"><span className="normal icon-salient-m-user" aria-hidden="true"></span><span className="screen-reader-text">account</span></a>
                      
                          <a id="mobile-cart-link" data-cart-style="dropdown" href="./cart/index.html"><i className="icon-salient-cart"></i><div className="cart-wrap"><span>0 </span></div></a>
                                          <a className="show-btn borderfree__link"  >
                                                {/* <img src="/assets/wp-content/uploads/2022/02/flags-borderflag.gif" width="18px" height="12px" alt="United States" /> */}
                                                <div id="flag-parent-element" className='flag-element'></div><span> { currency }</span>
                                          </a>
                                                                              <div className="slide-out-widget-area-toggle mobile-icon slide-out-from-right" data-custom-color="false" data-icon-animation="simple-transform">
                          <div> <a href="#sidewidgetarea" aria-label="Navigation Menu" aria-expanded="false" className="closed">
                              <span className="screen-reader-text">Menu</span><span aria-hidden="true"> <i className="lines-button x2"> <i className="lines"></i> </i> </span>
                          </a>
  </div>
                      </div>
                  
                                      <nav>
                                      {/* current-menu-ancestor current-menu-parent current_page_parent  */}
        <ul className="sf-menu">
            <li id="menu-item-475" className={`menu-item-custom columns menu-item menu-item-type-custom 
            menu-item-object-custom menu-item-has-children 
            nectar-regular-menu-item megamenu nectar-megamenu-menu-item 
            align-left width-100 sf-with-ul menu-item-475
             ${ currentRoutes.includes('orange') || currentRoutes.includes('lavender') 
                || currentRoutes.includes('accessories') 
                || currentRoutes.includes('collection') ? 'current_page_ancestor' : ''
            }`}>
            <Link to="/products/OUR COLLECTION/collection"><span className="menu-title-text">
            OUR COLLECTION</span><span className="sf-sub-indicator"><i className="fa fa-angle-down icon-in-menu" aria-hidden="true"></i>
            </span></Link>
        <ul className="sub-menu">
            <li id="menu-item-594" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nectar-regular-menu-item hide-title megamenu-column-padding-default menu-item-hidden-text menu-item-594">
            <a href="#"><span className="menu-title-text">OUR COLLECTION</span><span className="sf-sub-indicator">
                <i className="fa fa-angle-right icon-in-menu" aria-hidden="true"></i></span></a>
                <ul className="sub-menu">
                    <li id="menu-item-490" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-490">
                        <Link to="/products/OUR-ORANGE-AND-VANILLA-PRODUCTS/orange">
                            <span className="menu-title-text">OUR ORANGE AND VANILLA PRODUCTS</span></Link></li>
                    <li id="menu-item-485" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-485">
                        <Link to="/products/OUR-LILY-AND-LAVENDER-PRODUCTS/lavender">
                            <span className="menu-title-text">OUR LILY AND LAVENDER PRODUCTS</span></Link></li>
                    {/* <li id="menu-item-484" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-484">
                        <Link to="/products/OUR-AGE-GRACEFULLY-PRODUCTS/age" >
                            <span className="menu-title-text">OUR AGE GRACEFULLY PRODUCTS</span></Link></li>
                    <li id="menu-item-495" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-495">
                        <Link to="/products/IN-PARIS-BODY-CRÉME-SOUFFLÉ-PRODUCTS/paris">
                            <span className="menu-title-text">IN PARIS BODY CRÉME SOUFFLÉ PRODUCTS</span></Link></li>
                    <li id="menu-item-498" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-498">
                        <Link to="/products/OUR-BELLE-COMME-LE-JOUR-PRODUCTS/belle">
                            <span className="menu-title-text">OUR BELLE COMME LE JOUR PRODUCTS</span></Link></li> */}
                    <li id="menu-item-501" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-501">
                        <Link to="/products/ACCESSORIES-&-TOOLS/accessories">
                        <span className="menu-title-text">ACCESSORIES &#038; TOOLS</span></Link></li>
                </ul>
            </li>
        </ul>
    </li>
  <li id="menu-item-508" className={`menu-item-custom text_center menu-item menu-item-type-post_type 
  menu-item-object-page menu-item-has-children nectar-regular-menu-item megamenu nectar-megamenu-menu-item 
  align-left width-100 sf-with-ul menu-item-508 ${ currentRoutes.includes('bath') || 
    currentRoutes.includes('body') 
    || currentRoutes.includes('duo') ? 'current_page_ancestor' : ''
}`}>
<Link to="/products/BATH-AND-BODY/bath" >
    <span className="menu-title-text">BATH AND BODY</span><span className="sf-sub-indicator">
        <i className="fa fa-angle-down icon-in-menu" aria-hidden="true"></i></span></Link>
  <ul className="sub-menu">
      <li id="menu-item-505" className="text_center_txt menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item megamenu-column-width-40 megamenu-column-padding-default menu-item-505">
        <Link to="/kits/OUR-DUO-COLLECTION/duo" ><span className="menu-title-text">
            OUR DUO COLLECTION</span></Link></li>
      <li id="menu-item-591" className="border_left menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item megamenu-column-width-60 megamenu-column-padding-default menu-item-591">
        <Link to="/products/BATH-AND-BODY/bath"><div className="nectar-ext-menu-item style-img-above-text">
  <div className="image-layer-outer hover-default">
  <div className="image-layer"></div>
  <div className="color-overlay"></div>
  </div>
  <div className="inner-content"><span className="title inherit-default"><span className="menu-title-text">DISCOVER NOW</span></span></div>
  </div></Link></li>
  </ul>
  </li>
  <li id="menu-item-519" className={`menu-item-custom menu-item menu-item-type-post_type menu-item-object-page
   menu-item-has-children nectar-regular-menu-item megamenu nectar-megamenu-menu-item align-left
    width-100 sf-with-ul menu-item-519 ${ 
        currentRoutes.includes('polish') || currentRoutes.includes('spa')  ? 'current_page_ancestor' : ''
    }`}>
  <Link to="/products/HOME-SPA/spa" >
    <span className="menu-title-text">HOME SPA</span><span className="sf-sub-indicator"><i className="fa fa-angle-down icon-in-menu" aria-hidden="true"></i></span></Link>
  <ul className="sub-menu">
      <li id="menu-item-522" className="text_center_txt menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item megamenu-column-width-40 megamenu-column-padding-default menu-item-522">
      <Link to="/products/BODY-POLISH/polish" ><span className="menu-title-text">BODY POLISH</span></Link></li>
      <li id="menu-item-596" className="border_left menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item megamenu-column-width-60 megamenu-column-padding-default menu-item-596">
        <Link to="/products/BODY-POLISH/polish" >
            <div className="nectar-ext-menu-item style-img-above-text">
  <div className="image-layer-outer hover-default">
  <div className="image-layer"></div>
  <div className="color-overlay"></div>
  </div>
  <div className="inner-content"><span className="title inherit-default"><span className="menu-title-text">DISCOVER NOW</span></span></div>
  </div></Link></li>
  </ul>
  </li>
  <li id="menu-item-525" className={`menu-item-custom menu-item menu-item-type-post_type menu-item-object-page
   menu-item-has-children nectar-regular-menu-item megamenu nectar-megamenu-menu-item align-left width-100
    sf-with-ul menu-item-525 ${ 
        currentRoutes.includes('gifts sets') || currentRoutes.includes('gifts') || currentRoutes.includes('sets') 
        ? 'current_page_ancestor' : ''
    }`}>
  <Link to="/products/GIFTS-AND-SETS/gifts sets" ><span className="menu-title-text">GIFTS &#038; SETS</span><span className="sf-sub-indicator"><i className="fa fa-angle-down icon-in-menu" aria-hidden="true"></i></span></Link>
  <ul className="sub-menu">
      <li id="menu-item-528" className="text_center_txt menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item megamenu-column-width-40 megamenu-column-padding-default menu-item-528">
        <Link to="/kits/OUR-GIFTS-AND-SETS-COLLECTION/gifts" ><span className="menu-title-text">
            OUR GIFTS &#038; SETS COLLECTION</span></Link></li>
      <li id="menu-item-597" className="border_left menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item megamenu-column-width-60 megamenu-column-padding-default menu-item-597">
        <Link to="/products/OUR-GIFTS-AND-SETS-COLLECTION/gifts" >
            <div className="nectar-ext-menu-item style-img-above-text">
  <div className="image-layer-outer hover-default">
  <div className="image-layer"></div>
  <div className="color-overlay"></div>
  </div>
  <div className="inner-content"><span className="title inherit-default"><span className="menu-title-text">DISCOVER NOW</span></span></div>
  </div></Link></li>
  </ul>
  </li>
  <li id="menu-item-531" className={`menu-item-custom menu-item menu-item-type-post_type menu-item-object-page
   menu-item-has-children nectar-regular-menu-item megamenu nectar-megamenu-menu-item align-left width-100
    sf-with-ul menu-item-531 ${ currentRoutes.includes('body care') || currentRoutes.includes('care') || currentRoutes.includes('body') ? 'current_page_ancestor' : ''
    }`}>
  <Link to="/products/BODY-CARE/body care">
    <span className="menu-title-text">BODY CARE</span><span className="sf-sub-indicator"><i className="fa fa-angle-down icon-in-menu" aria-hidden="true"></i></span></Link>
  <ul className="sub-menu">
      <li id="menu-item-599" className="text_center_txt menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nectar-regular-menu-item hide-title megamenu-column-width-40 megamenu-column-padding-default menu-item-599">
  <a href="#"><span className="menu-title-text">BODY CARE</span><span className="sf-sub-indicator"><i className="fa fa-angle-right icon-in-menu" aria-hidden="true"></i></span></a>
      <ul className="sub-menu">
          <li id="menu-item-534" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-534"><Link to="/products/BODY-LOTION/body lotion" ><span className="menu-title-text">BODY LOTION</span></Link></li>
          <li id="menu-item-551" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-551"><Link to="/products/BODY-CREAM/body cream" ><span className="menu-title-text">BODY CREAM</span></Link></li>
          <li id="menu-item-550" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-550"><Link to="/products/BODY-CREAM-BUTTER/body butter" ><span className="menu-title-text">BODY CREAM BUTTER</span></Link></li>
          <li id="menu-item-549" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-549"><Link to="/products/BODY-OIL/body oil"><span className="menu-title-text">BODY OIL</span></Link></li>
          <li id="menu-item-548" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-548"><Link to="/products/BODY-SCRUB/body scrub"><span className="menu-title-text">BODY SCRUB</span></Link></li>
          <li id="menu-item-547" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-547"><Link to="/products/BODY-BALM/body balm" ><span className="menu-title-text">BODY BALM</span></Link></li>
          {/* <li id="menu-item-554" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-554"><Link to="/products/WHIPPED-BODY-BUTTER/body whipped" ><span className="menu-title-text">WHIPPED BODY BUTTER</span></Link></li> */}
      </ul>
  </li>
      <li id="menu-item-600" className="border_left menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item megamenu-column-width-60 megamenu-column-padding-default menu-item-600">
        <Link to="/products/BODY-CARE/body care" >
            <div className="nectar-ext-menu-item style-img-above-text">
            <div className="image-layer-outer hover-default">
            <div className="image-layer"></div>
            <div className="color-overlay"></div>
            </div>
  <div className="inner-content"><span className="title inherit-default"><span className="menu-title-text">DISCOVER NOW</span></span></div>
  </div></Link></li>
  </ul>
  </li>
  <li id="menu-item-572" className={`menu-item-custom menu-item menu-item-type-post_type menu-item-object-page
   nectar-regular-menu-item menu-item-33 ${ currentRoutes.includes('facial care') ? 'current_page_ancestor' : ''
    }`}>
  <Link to="/products/FACIAL-CARE/facial care" >
    <span className="menu-title-text">FACIAL CARE</span>
  {/* <span className="sf-sub-indicator"><i className="fa fa-angle-down icon-in-menu" aria-hidden="true"></i></span> */}
  </Link>
  {/* <ul className="sub-menu">
      <li id="menu-item-602" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nectar-regular-menu-item hide-title megamenu-column-width-40 megamenu-column-padding-default menu-item-602">
  <a href="#"><span className="menu-title-text">FACIAL CARE</span><span className="sf-sub-indicator"><i className="fa fa-angle-right icon-in-menu" aria-hidden="true"></i></span></a>
      <ul className="sub-menu">
          <li id="menu-item-843" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-843">
            <Link to="/products/FACIAL-CLEANSER/cleanser" ><span className="menu-title-text">
            FACIAL CLEANSER</span></Link></li>
          <li id="menu-item-568" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-568">
            <Link to="/products/FACIAL-CREAM/facial cream" ><span className="menu-title-text">
                FACIAL CREAM</span></Link></li>
          <li id="menu-item-569" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-569">
            <Link to="/products/FACIAL-MASK/facial mask"><span className="menu-title-text">
                FACIAL MASK</span></Link></li>
          <li id="menu-item-570" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-570">
            <Link to="/products/FACIAL-OIL/facial oil" ><span className="menu-title-text">FACIAL OIL</span></Link></li>
          <li id="menu-item-571" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-571">
          <Link to="/products/FACIAL-TONER/facial toner" ><span className="menu-title-text">FACIAL TONER</span></Link></li>
      </ul>
  </li>
      <li id="menu-item-603" className="border_left menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item megamenu-column-width-60 megamenu-column-padding-default menu-item-603">
      <Link to="/products/FACIAL-CARE/facial care" ><div className="nectar-ext-menu-item style-img-above-text">
  <div className="image-layer-outer hover-default">
  <div className="image-layer"></div>
  <div className="color-overlay"></div>
  </div>
  <div className="inner-content"><span className="title inherit-default"><span className="menu-title-text">DISCOVER NOW</span></span></div>
  </div></Link></li>
  </ul> */}
  </li>
  <li id="menu-item-33" className={`menu-item-custom menu-item menu-item-type-post_type menu-item-object-page 
  nectar-regular-menu-item menu-item-33 ${ currentRoutes.includes('hair') ? 'current_page_ancestor' : ''
  } `}>
  <Link to="/products/HAIR-CARE/hair"><span className="menu-title-text">HAIR CARE</span></Link></li>
  <li id="menu-item-27" className={`menu-item-custom menu-item menu-item-type-post_type menu-item-object-page
   nectar-regular-menu-item menu-item-27 ${ currentRoutes.includes('about') ? 'current_page_ancestor' : ''
   }`}>
    <Link to="/about">
        <span className="menu-title-text">ABOUT US</span>
    </Link>
    </li>
  <li id="menu-item-30" className={`menu-item-custom menu-item menu-item-type-post_type menu-item-object-page
   nectar-regular-menu-item menu-item-30 ${ currentRoutes.includes('contact') ? 'current_page_ancestor' : ''
   }`}>
    <Link to="/contact">
        <span className="menu-title-text">CONTACT</span>
    </Link>
    </li>
                              </ul>
                          
                      </nav>
  
                      
                  </div>
  
                  
              </div>
       </div> 
      </header>		
      </div>
  
            </>
        )
}       

export default Header