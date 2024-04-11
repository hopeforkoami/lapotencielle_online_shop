import { FC, useState } from 'react';
import {
    Link, useLocation, useNavigate, useParams
} from "react-router-dom";
import DataTable from 'react-data-table-component';
import { useEffect } from 'react';
import CartService from './service'; 
import ImageGallery from 'react-image-gallery';

import * as Utils from '../../Utils';
import ReleatedProductBox from '../../Components/ReleatedProductBox';

import { Formik, Field, Form, FormikProps } from 'formik'
import * as yup from 'yup';

import { useAppDispatch, useAppSelector } from '../../Hooks/customSelector';
import { addProduct, removeProduct, updateProductQty, updateProducts } from '../../Redux/Reducers/storeReducer';
import Footer from '../../Layouts/Footer';
import { RootState } from '../../Redux/store';

const Cart: FC = () => {   
    
    let location = useLocation();
    let navigate = useNavigate();
    const store = useAppSelector((state) => state.store)
    const dispatch = useAppDispatch();
    const user = useAppSelector((state: RootState) => state.users.user );
    const cartService = new CartService();
    const [ loading, setLoading ] = useState(false);

   

    const [ showShppingForm, setShowShppingForm ] = useState(false);

    let initialTotal: number = 0;
    let [ storeTotal, setStoreTotal ] = useState(initialTotal);

    const getStoreTotal = () => {
        let strTtl = 0;
        store.products.forEach(
            (row) => {
                strTtl += ( (Number(row.product?.capitalUnitaireProduit) + Number(row.product?.interetUnitaireProduit)) * row.qty );
            }
        );
        setStoreTotal( strTtl );
    }

    
 

    useEffect(() => {   
        console.log(user);
        getStoreTotal();
    }, []);

    useEffect(() => {   
        getStoreTotal();
    }, [store.products]);
    
    const columns = [
        {
            name: ` `,
            selector: (row: any) => 
            <img width={150} height={150} style={{ height: '120px', width: '100px' }}
            src={ Utils._mediaUrl + row.product?.image } alt="" /> ,
        },
        {
            name: `Product`,
            selector: (row: any) => row.product.libProduit ,
        },
        {
            name: `Price`,
            selector: (row: any) => <>
                <b> USD : $ { (Number(row.product?.capitalUnitaireProduit) + Number(row.product?.interetUnitaireProduit) ) } </b>
            </>,
        },
        {
            name: `Quantity`,
            selector: (row: any) => <>
                <div  >
                    <div   style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between' }}> 
                        <div onClick={ () => {
                                
                                var qty = row.qty;
                                if (qty > 1) {
                                    qty = qty - 1;
                                } 
                               
                                dispatch( updateProductQty( { product: row.product, qty: qty } ) );
                                
                            }} className='store-minus' style={ { backgroundColor: 'white', margin: '10px',
                             width: '25px', height: '25px', color: "black", border: '1px black solid',
                              display: 'inline-block', textAlign: 'center', cursor: 'pointer',
                             borderRadius: '100%', fontSize: "15px" } } > <b>-</b> </div> 
                        <div style={{ fontSize: "15px", margin: '10px'   }}>
                            <b>{ row.qty }</b> 
                        </div>
                        <div onClick={ () => {
                                
                                var qty = row.qty; 
                                qty = qty + 1; 
                               
                                dispatch( updateProductQty( { product: row.product, qty: qty } ) );
                                
                            }} className='store-plus' style={ { backgroundColor: 'white', margin: '10px',
                             width: '25px', height: '25px', color: "black", cursor: 'pointer',
                              display: 'inline-block', textAlign: 'center', border: '1px black solid',
                             borderRadius: '100%', fontSize: "15px" } }> <b>+</b>  
                        </div>
                    </div>
                </div>
            </>,
        },
        {
            name: `Subtotal`,
            selector: (row: any) => <>
            <b> USD : $ {
            ( (Number(row.product?.capitalUnitaireProduit) + Number(row.product?.interetUnitaireProduit)) * row.qty ) } </b> </>,
        },
        {
            name: `Actions`,
            selector: (row: any) => <>
                    <button onClick={() => {
                        dispatch( removeProduct( row ) )
                    }} className='button button-danger'>
                        Delete
                    </button>
                </>
            },

    ];

    return (
        <>
            <div id="ajax-content-wrap">
                    <div className="breadcrumb">
                        <span><span><Link to="/">Home</Link> / <span className="breadcrumb_last" aria-current="page">Cart</span></span></span>		</div>
            <div className="container-wrap">
                <div className="container main-content">
                    <div className="row">
                        
                    <div id="fws_630b971b1614a" data-column-margin="default" data-midnight="dark" className="wpb_row vc_row-fluid vc_row top-level "
                     style={{ paddingTop: '0px', paddingBottom: '0px' }}>
            <div className="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div className="inner-wrap"><div className="row-bg"></div></div></div>
            <div className="row_col_wrap_12 col span_12 dark left">
                <div className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone " data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
            <br/>     
            <div className="wpb_text_column wpb_content_element ">
                <div className="wpb_wrapper">
                    <div className="woocommerce">
                        <div className="woocommerce-notices-wrapper"></div>
                        {
                            store.products.length > 0 ?
                            <><DataTable
                                            responsive={true}
                                            className="table table-striped table-bordered"
                                            columns={columns}
                                            data={ store.products }
                                            progressPending={loading}
                                            pagination
                                        />  
                    <div style={{ display: 'flex', flexFlow: 'row', justifyContent: 'space-between', maxHeight: '50px' }}>
                        <div className="coupon">
							<label htmlFor="coupon_code">Coupon:</label> 
                            <div  style={{ display: 'flex', flexFlow: 'row ', justifyContent: 'space-between' }}>
                                <input type="text" name="coupon_code" className="input-text" id="coupon_code" value="" placeholder="Coupon code" /> 
                                <button type="submit" className="button" name="apply_coupon" value="Apply coupon">Apply coupon</button>
                            </div>
                            
						</div>
                        {/* <button type="submit" className="button" name="update_cart" value="Update cart" disabled={true} aria-disabled="true">Update cart</button> */}
                    </div>
                    <br /> <br />
                    <div style={{ display: 'flex', flexFlow: 'row', justifyContent: 'flex-end' }}>
                        <div className="cart-collaterals">
                            <div className="cart_totals ">

                            
                            <h2>Cart totals</h2>

                            <table cellSpacing="0" className="shop_table shop_table_responsive">

                                <tbody>
                                    <tr className="cart-subtotal">
                                        <th>Subtotal</th>
                                        <td data-title="Subtotal"><span className="woocs_special_price_code">USD : <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>{storeTotal}</bdi></span></span></td>
                                    </tr>
                                    <tr className="woocommerce-shipping-totals shipping">
                            <th>Shipping</th>
                            <td data-title="Shipping">
                                Enter your address to view shipping options.
                                        
                            <form className="woocommerce-shipping-calculator" action="https://www.lapotencielle.com/cart/" method="post">

                            <div style={ { cursor: 'pointer' } } onClick={ () => { setShowShppingForm( !showShppingForm ) } } className="shipping-calculator-button">
                                <b>Calculate shipping</b></div>
                            { showShppingForm ?
                            <section className="shipping-calculator-form" >

                                            <p className="form-row form-row-wide" id="calc_shipping_country_field">
                                        <select name="calc_shipping_country" id="calc_shipping_country" className="country_to_state country_select" >
                                            <option value="default">Select a country / region…</option>
                                            <option value="AF">Afghanistan</option><option value="AX">Åland Islands</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctica</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="PW">Belau</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BQ">Bonaire, Saint Eustatius and Saba</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BV">Bouvet Island</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos (Keeling) Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CG">Congo (Brazzaville)</option><option value="CD">Congo (Kinshasa)</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curaçao</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="SZ">Eswatini</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island and McDonald Islands</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="CI">Ivory Coast</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="KP">North Korea</option><option value="MK">North Macedonia</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PS">Palestinian Territory</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RU">Russia</option><option value="RW">Rwanda</option><option value="ST">São Tomé and Príncipe</option><option value="BL">Saint Barthélemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="SX">Saint Martin (Dutch part)</option><option value="MF">Saint Martin (French part)</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia/Sandwich Islands</option><option value="KR">South Korea</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syria</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TL">Timor-Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom (UK)</option><option value="US">United States (US)</option><option value="UM">United States (US) Minor Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VA">Vatican</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option><option value="VG">Virgin Islands (British)</option><option value="VI">Virgin Islands (US)</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option>				</select>
                                    </p>
                                
                                            <p className="form-row validate-required form-row-wide address-field" id="calc_shipping_state_field">
                                                            <input type="text" className="input-text" value="" placeholder="State / County" name="calc_shipping_state" id="calc_shipping_state" data-placeholder="State / County" />
                                                        </p>
                                
                                            <p className="form-row validate-required form-row-wide address-field" id="calc_shipping_city_field">
                                        <input type="text" className="input-text" value="" placeholder="Town / City" name="calc_shipping_city" id="calc_shipping_city" data-placeholder="Town / City" />
                                    </p>
                                
                                            <p className="form-row validate-required form-row-wide address-field" id="calc_shipping_postcode_field">
                                        <input type="text" className="input-text" value="" placeholder="Postcode / ZIP" name="calc_shipping_postcode" id="calc_shipping_postcode" data-placeholder="Postcode / ZIP" />
                                    </p>
                                
                                <p><button type="submit" name="calc_shipping" value="1" className="button">Update</button></p>
                                <input type="hidden" id="woocommerce-shipping-calculator-nonce" name="woocommerce-shipping-calculator-nonce" value="866e268b02" /><input type="hidden" name="_wp_http_referer" value="/cart/" />	
                            </section> : <></>
                            }
                        </form>

                                    </td>
                        </tr>
                                <tr className="order-total">
                                    <th>Total</th>
                                    <td data-title="Total"><strong><span className="woocs_special_price_code">USD : <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>{ storeTotal }</bdi></span></span></strong> </td>
                                </tr>

                                
                            </tbody></table>

                            <div className="wc-proceed-to-checkout">
                        <button onClick={() => {

                            if (user !== null && user !== undefined) {
                                navigate('/cart/checkout');
                                // setLoading(true);
                                // console.log(user);
                                // cartService.initializeBasketId({
                                //     "idClient": user?.id
                                // }).then(async function (response: any) {
                                //     console.log(response); 
                                //     setLoading(false);
                                // })
                                // .catch(function (error: any) {
                                //     console.log(error); 
                                // });
                                // 
                            } else {
                                alert("Please, you must login first");
                            }

                        }} className="checkout-button button alt wc-forward">
                            Proceed to checkout  
                               {
                                loading && <i className="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>
                               }
                        </button>
                        <Link to="/myaccount" className="checkout-button button alt wc-forward">
                            Sign Up / Login</Link>
                        <Link to="/products/OUR-ORANGE-AND-VANILLA-PRODUCTS/orange" className="checkout-button button alt wc-forward">
                            Continue Shopping</Link>	</div>
                            
                            </div>
                        </div>
                    </div>
                    </>
                    :
                            <>
                                <p className="cart-empty woocommerce-info">Your cart is currently empty.</p>	
                                <p className="return-to-shop">
                                        <Link to="/products/OUR-ORANGE-AND-VANILLA-PRODUCTS/orange" className="button wc-backward" >
                                            Return to shop		</Link>
                                </p>
                            </>
                        }
                        
                    </div>
                </div>
            </div>
                        </div> 
                    </div>
                </div> 
            </div>
            </div>		</div>
	        </div>
            <Footer />
                {/* Footer  */}
            </div>
            </div>
        </>
    );
}

export default Cart;