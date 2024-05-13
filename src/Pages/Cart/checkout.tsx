

import './style.css';
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

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PriceUnitBox from '../../Components/PriceUnitBox';


const Checkout: FC = () => {   
    
    let location = useLocation();
    const store = useAppSelector((state) => state.store)
    const dispatch = useAppDispatch();
    const user = useAppSelector((state: RootState) => state.users.user );
    const cartService = new CartService();
    const [ loading, setLoading ] = useState(false);
    const [ showShppingForm, setShowShppingForm ] = useState(false);

    const [ shippings, setShippings ] = useState( [] );

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

    const getShippings = () => {
        cartService.getShippings().then(async function (response: any) {
                console.log(response);  
            })
            .catch(function (error: any) {
                console.log(error); 
            });
    }
 

    useEffect(() => {   
        console.log(user);
        console.log(store);
        getStoreTotal();
        getShippings();
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
			<span><span><a href="https://www.lapotencielle.com/">Home</a></span> / <span className="breadcrumb_last" aria-current="page">Checkout</span></span>		</div>
<div className="container-wrap" style={{ minHeight: '566px' }}>
	<div className="container main-content">
		<div className="row">
			
		<div id="fws_644ecf3062ac5" data-column-margin="default" data-midnight="dark" className="wpb_row vc_row-fluid vc_row top-level  " style={{ paddingTop: '0px', paddingBottom: '0px' }}><div className="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div className="inner-wrap"><div className="row-bg" ></div></div></div><div className="row_col_wrap_12 col span_12 dark left">
	<div className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone " data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div className="vc_column-inner">
			<div className="wpb_wrapper">
				
<div className="wpb_text_column wpb_content_element ">
	<div className="wpb_wrapper">
		<div className="woocommerce"><div className="woocommerce-notices-wrapper"></div>
{/* <div className="woocommerce-form-login-toggle">
	<br />
	<div className="woocommerce-info">
		Returning customer? <Link to={ "/myaccount" } className="showlogin">Click here to login</Link>	</div>
</div> */}
{/* <form className="woocommerce-form woocommerce-form-login login" method="post" style={{ display:'none' }}>

	
	<p>If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing section.</p>

	<p className="form-row form-row-first">
		<label htmlFor="username">Username or email&nbsp;<span className="required">*</span></label>
		<input type="text" className="input-text" name="username" id="username" autoComplete="username" />
	</p>
	<p className="form-row form-row-last">
		<label htmlFor="password">Password&nbsp;<span className="required">*</span></label>
		<input className="input-text" type="password" name="password" id="password" autoComplete="current-password" />
	</p>
	<div className="clear"></div>

	
	<p className="form-row">
		<label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
			<input className="woocommerce-form__input woocommerce-form__input-checkbox" name="rememberme" type="checkbox" id="rememberme" value="forever" /> <span>Remember me</span>
		</label>
		<input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" value="c928283931" /><input type="hidden" name="_wp_http_referer" value="/checkout/" />		<input type="hidden" name="redirect" value="https://www.lapotencielle.com/checkout/" />
		<button type="submit" className="woocommerce-button button woocommerce-form-login__submit" name="login" value="Login">Login</button>
	</p>
	<p className="lost_password">
		<a href="https://www.lapotencielle.com/my-account/lost-password/">Forgot your Password?</a>
	</p>

	<div className="clear"></div>

	
</form> */}
<div className="woocommerce-form-coupon-toggle">
	
	<div className="woocommerce-info">
		Have a coupon? <a onClick={() =>{
            document.getElementById('couponForm')?.classList.toggle("show-form");
        }} className="showcoupon">Click here to enter your code</a>	</div>
</div>

<form id="couponForm" className="checkout_coupon woocommerce-form-coupon" method="post" style={{ display:'none' }}>

	<p>If you have a coupon code, please apply it below.</p>

	<p className="form-row form-row-first">
		<input type="text" name="coupon_code" className="input-text" placeholder="Coupon code" id="coupon_code" value="" />
	</p>

	<p className="form-row form-row-last">
		<button type="submit" className="button" name="apply_coupon" value="Apply coupon">Apply coupon</button>
	</p>

	<div className="clear"></div>
</form>
<div className="woocommerce-notices-wrapper"></div>
{  user !== null && user !== undefined ?
<Formik
                                initialValues={ 
                                    {
                                        idVente: store?.basketId,
                                        firstname: user?.prenomClient,
                                        lastname: user?.nomClient,
                                        deliveryCountry: '', 
                                        deliveryCity: '', 
                                        deliveryState: '', 
                                        deliveryZip: '', 
                                        deliveryAdrLine1: '', 
                                        deliveryAdrLine2: '',
 				                        shippingCountry: '', 
                                        shippingCity: '', 
                                        shippingState: '', 
                                        shippingZip: '', 
                                        shippingAdrLine1: '', 
                                        shippingAdrLine2: '',
 				                        shippingServiceID: '', 
                                        paymentMethodID: '', 
                                        shippingFees: '', 
                                        taxesFees: '', 
                                        reductionMontant: '', 
                                        promoCode: ''
                                }}

                                validationSchema={
                                    yup.object().shape({ 
                                        deliveryCountry: yup 
                                            .string()
                                            .required('This field is required'),
                                        deliveryCity: yup
                                            .string()
                                            .required('This field is required'),
                                        deliveryState: yup
                                            .string()
                                            .required('This field is required'),
                                    })
                                }
                                // innerRef={formRef}
                                onSubmit={async (
                                    values 
                                ) => {
                                        console.log(values); 
                                    }}
                                >
                                    {({ dirty, errors, touched, isValid, handleChange, handleBlur, handleSubmit, values }) => (
                                    <Form >
 

	
		
		<div className="col2-set" id="customer_details">
			<div className="col-1">
				<div className="woocommerce-billing-fields">
	
		<h3>Billing details</h3>

	
	
	<div className="woocommerce-billing-fields__field-wrapper">
		<p className="form-row form-row-first validate-required" id="billing_first_name_field" data-priority="10"><label htmlFor="billing_first_name" className="">First name&nbsp;<abbr className="required" title="required">*</abbr></label><span className="woocommerce-input-wrapper"><input type="text" className="input-text " name="billing_first_name" id="billing_first_name" placeholder="" value="" autoComplete="given-name" /></span></p><p className="form-row form-row-last validate-required" id="billing_last_name_field" data-priority="20"><label htmlFor="billing_last_name" className="">Last name&nbsp;<abbr className="required" title="required">*</abbr></label><span className="woocommerce-input-wrapper"><input type="text" className="input-text " name="billing_last_name" id="billing_last_name" placeholder="" value="" autoComplete="family-name" /></span></p><p className="form-row form-row-wide" id="billing_company_field" data-priority="30"><label htmlFor="billing_company" className="">Company name&nbsp;<span className="optional">(optional)</span></label><span className="woocommerce-input-wrapper"><input type="text" className="input-text " name="billing_company" id="billing_company" placeholder="" value="" autoComplete="organization" /></span></p><p className="form-row form-row-wide address-field update_totals_on_change validate-required" id="billing_country_field" data-priority="40"><label htmlFor="billing_country" className="">Country / Region&nbsp;<abbr className="required" title="required">*</abbr></label><span className="woocommerce-input-wrapper"><select name="billing_country" id="billing_country" className="country_to_state country_select select2-hidden-accessible" autoComplete="country" data-placeholder="Select a country / region…" data-label="Country / Region" tabIndex={-1} aria-hidden="true"><option value="">Select a country / region…</option><option value="AF">Afghanistan</option><option value="AX">Åland Islands</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctica</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="PW">Belau</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BQ">Bonaire, Saint Eustatius and Saba</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BV">Bouvet Island</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos (Keeling) Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CG">Congo (Brazzaville)</option><option value="CD">Congo (Kinshasa)</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curaçao</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="SZ">Eswatini</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island and McDonald Islands</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="CI">Ivory Coast</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="KP">North Korea</option><option value="MK">North Macedonia</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PS">Palestinian Territory</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RU">Russia</option><option value="RW">Rwanda</option><option value="ST">São Tomé and Príncipe</option><option value="BL">Saint Barthélemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="SX">Saint Martin (Dutch part)</option><option value="MF">Saint Martin (French part)</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia/Sandwich Islands</option><option value="KR">South Korea</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syria</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TL">Timor-Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom (UK)</option><option value="US">United States (US)</option><option value="UM">United States (US) Minor Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VA">Vatican</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option><option value="VG">Virgin Islands (British)</option><option value="VI">Virgin Islands (US)</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option></select><span className="select2 select2-container select2-container--default select2-container--below" dir="ltr" 
        style={{ width: '100%' }}><span className="selection"><span className="select2-selection select2-selection--single" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-label="Country / Region" role="combobox"><span className="select2-selection__rendered" id="select2-billing_country-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Select a country / region…</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span><noscript><button type="submit" name="woocommerce_checkout_update_totals" value="Update country / region">Update country / region</button></noscript></span></p><p className="form-row form-row-wide address-field validate-required" id="billing_address_1_field" data-priority="50"><label htmlFor="billing_address_1" className="">Street address&nbsp;<abbr className="required" title="required">*</abbr></label><span className="woocommerce-input-wrapper"><input type="text" className="input-text " name="billing_address_1" id="billing_address_1" placeholder="House number and street name" value="" autoComplete="address-line1" /></span></p><p className="form-row form-row-wide address-field" id="billing_address_2_field" data-priority="60"><label htmlFor="billing_address_2" className="screen-reader-text">Apartment, suite, unit, etc.&nbsp;<span className="optional">(optional)</span></label><span className="woocommerce-input-wrapper"><input type="text" className="input-text " name="billing_address_2" id="billing_address_2" placeholder="Apartment, suite, unit, etc. (optional)" value="" autoComplete="address-line2" /></span></p><p className="form-row form-row-wide address-field validate-required" id="billing_city_field" data-priority="70"><label htmlFor="billing_city" className="">Town / City&nbsp;<abbr className="required" title="required">*</abbr></label><span className="woocommerce-input-wrapper"><input type="text" className="input-text " name="billing_city" id="billing_city" placeholder="" value="" autoComplete="address-level2" /></span></p><p className="form-row form-row-wide address-field validate-required validate-state" id="billing_state_field" data-priority="80"><label htmlFor="billing_state" className="">State&nbsp;<abbr className="required" title="required">*</abbr></label><span className="woocommerce-input-wrapper"><select name="billing_state" id="billing_state" className="state_select select2-hidden-accessible" autoComplete="address-level1" data-placeholder="Select an option…" data-input-classes="" data-label="State" tabIndex={-1} aria-hidden="true">
						<option value="">Select an option…</option><option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">District Of Columbia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option><option value="AA">Armed Forces (AA)</option><option value="AE">Armed Forces (AE)</option><option value="AP">Armed Forces (AP)</option></select><span className="select2 select2-container select2-container--default" dir="ltr" style={{ width: '100%' }} ><span className="selection"><span className="select2-selection select2-selection--single" aria-haspopup="true" aria-expanded="false" 
                        tabIndex={0} aria-label="State" role="combobox"><span className="select2-selection__rendered" id="select2-billing_state-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Select an option…</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span></span></p><p className="form-row form-row-wide address-field validate-required validate-postcode" id="billing_postcode_field" data-priority="90"><label htmlFor="billing_postcode" className="">ZIP Code&nbsp;<abbr className="required" title="required">*</abbr></label><span className="woocommerce-input-wrapper"><input type="text" className="input-text " name="billing_postcode" id="billing_postcode" placeholder="" value="" autoComplete="postal-code" /></span></p><p className="form-row form-row-wide validate-required validate-phone" id="billing_phone_field" data-priority="100"><label htmlFor="billing_phone" className="">Phone&nbsp;<abbr className="required" title="required">*</abbr></label><span className="woocommerce-input-wrapper"><input type="tel" className="input-text " name="billing_phone" id="billing_phone" placeholder="" value="" autoComplete="tel" /></span></p><p className="form-row form-row-wide validate-required validate-email" id="billing_email_field" data-priority="110"><label htmlFor="billing_email" className="">Email address&nbsp;<abbr className="required" title="required">*</abbr></label><span className="woocommerce-input-wrapper"><input type="email" className="input-text " name="billing_email" id="billing_email" placeholder="" value="" autoComplete="email" /></span></p>	</div>

	</div>

			</div>

			<div className="col-2">
				<div className="woocommerce-shipping-fields">
	
		<h3 id="ship-to-different-address">
			<label className="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox">
				<input id="ship-to-different-address-checkbox" className="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox" type="checkbox" name="ship_to_different_address" value="1" /> <span>Ship to a different address?</span>
			</label>
		</h3>

		<div className="shipping_address" style={{ display: 'none' }} >

			
			<div className="woocommerce-shipping-fields__field-wrapper">
				<p className="form-row form-row-first validate-required" 
                    id="shipping_first_name_field" data-priority="10"><label htmlFor="shipping_first_name" className="">
                    First name&nbsp;<abbr className="required" title="required">*</abbr></label>
                    <span className="woocommerce-input-wrapper">
                        <input type="text" 
                        onChange={handleChange('firstname')}
                        onBlur={handleBlur('firstname')}
                        value={values.firstname} />
                    </span>
                </p>
                        <p className="form-row form-row-last validate-required" 
                        id="shipping_last_name_field" data-priority="20">
                            <label htmlFor="shipping_last_name" className="">Last name&nbsp;<abbr className="required" title="required">*</abbr></label><span className="woocommerce-input-wrapper">
                                <input type="text" onChange={handleChange('lastname')}
                        onBlur={handleBlur('lastname')}
                        value={values.lastname}  />
                                </span></p><p className="form-row form-row-wide" id="shipping_company_field" data-priority="30"><label htmlFor="shipping_company" className="">Company name&nbsp;<span className="optional">(optional)</span></label><span className="woocommerce-input-wrapper"><input type="text" className="input-text " name="shipping_company" id="shipping_company" placeholder="" value="" autoComplete="organization" /></span></p><p className="form-row form-row-wide address-field update_totals_on_change validate-required" id="shipping_country_field" data-priority="40"><label htmlFor="shipping_country" className="">Country / Region&nbsp;<abbr className="required" title="required">*</abbr></label><span className="woocommerce-input-wrapper"><select name="shipping_country" id="shipping_country" className="country_to_state country_select select2-hidden-accessible" autoComplete="country" data-placeholder="Select a country / region…" data-label="Country / Region" tabIndex={-1} aria-hidden="true"><option value="">Select a country / region…</option><option value="AF">Afghanistan</option><option value="AX">Åland Islands</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctica</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="PW">Belau</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BQ">Bonaire, Saint Eustatius and Saba</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BV">Bouvet Island</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos (Keeling) Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CG">Congo (Brazzaville)</option><option value="CD">Congo (Kinshasa)</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curaçao</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="SZ">Eswatini</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island and McDonald Islands</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="CI">Ivory Coast</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="KP">North Korea</option><option value="MK">North Macedonia</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PS">Palestinian Territory</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RU">Russia</option><option value="RW">Rwanda</option><option value="ST">São Tomé and Príncipe</option><option value="BL">Saint Barthélemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="SX">Saint Martin (Dutch part)</option><option value="MF">Saint Martin (French part)</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia/Sandwich Islands</option><option value="KR">South Korea</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syria</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TL">Timor-Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom (UK)</option><option value="US">United States (US)</option><option value="UM">United States (US) Minor Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VA">Vatican</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option><option value="VG">Virgin Islands (British)</option><option value="VI">Virgin Islands (US)</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option></select><span className="select2 select2-container select2-container--default" dir="ltr" style={{ width: '100%' }}><span className="selection"><span className="select2-selection select2-selection--single" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-label="Country / Region" role="combobox"><span className="select2-selection__rendered" id="select2-shipping_country-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Select a country / region…</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span><noscript><button type="submit" name="woocommerce_checkout_update_totals" value="Update country / region">Update country / region</button></noscript></span></p><p className="form-row form-row-wide address-field validate-required" id="shipping_address_1_field" data-priority="50"><label htmlFor="shipping_address_1" className="">Street address&nbsp;<abbr className="required" title="required">*</abbr></label><span className="woocommerce-input-wrapper"><input type="text" className="input-text " name="shipping_address_1" id="shipping_address_1" placeholder="House number and street name" value="" autoComplete="address-line1" /></span></p><p className="form-row form-row-wide address-field" id="shipping_address_2_field" data-priority="60"><label htmlFor="shipping_address_2" className="screen-reader-text">Apartment, suite, unit, etc.&nbsp;<span className="optional">(optional)</span></label><span className="woocommerce-input-wrapper"><input type="text" className="input-text " name="shipping_address_2" id="shipping_address_2" placeholder="Apartment, suite, unit, etc. (optional)" value="" autoComplete="address-line2" /></span></p><p className="form-row form-row-wide address-field validate-required" id="shipping_city_field" data-priority="70"><label htmlFor="shipping_city" className="">Town / City&nbsp;<abbr className="required" title="required">*</abbr></label><span className="woocommerce-input-wrapper"><input type="text" className="input-text " name="shipping_city" id="shipping_city" placeholder="" value="" autoComplete="address-level2" /></span></p><p className="form-row form-row-wide address-field validate-required validate-state" id="shipping_state_field" data-priority="80"><label htmlFor="shipping_state" className="">State&nbsp;<abbr className="required" title="required">*</abbr></label><span className="woocommerce-input-wrapper"><select name="shipping_state" id="shipping_state" className="state_select select2-hidden-accessible" autoComplete="address-level1" data-placeholder="Select an option…" data-input-classes="" data-label="State" 
                tabIndex={-1} aria-hidden="true">
						<option value="">Select an option…</option><option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">District Of Columbia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option><option value="AA">Armed Forces (AA)</option><option value="AE">Armed Forces (AE)</option><option value="AP">Armed Forces (AP)</option></select><span className="select2 select2-container select2-container--default" dir="ltr" style={{ width: '100%' }}><span className="selection"><span className="select2-selection select2-selection--single" aria-haspopup="true" aria-expanded="false" 
                        tabIndex={0} aria-label="State" role="combobox"><span className="select2-selection__rendered" id="select2-shipping_state-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Select an option…</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span></span></p><p className="form-row form-row-wide address-field validate-required validate-postcode" id="shipping_postcode_field" data-priority="90"><label htmlFor="shipping_postcode" className="">ZIP Code&nbsp;<abbr className="required" title="required">*</abbr></label><span className="woocommerce-input-wrapper"><input type="text" className="input-text " name="shipping_postcode" id="shipping_postcode" placeholder="" value="" autoComplete="postal-code" /></span></p>			</div>

			
		</div>

	</div>
<div className="woocommerce-additional-fields">
	
	
		
		<div className="woocommerce-additional-fields__field-wrapper">
							<p className="form-row notes" id="order_comments_field" data-priority=""><label htmlFor="order_comments" className="">Order notes&nbsp;<span className="optional">(optional)</span></label><span className="woocommerce-input-wrapper"><textarea name="order_comments" className="input-text " id="order_comments" placeholder="Notes about your order, e.g. special notes for delivery." rows={2} cols={5} ></textarea></span></p>					</div>

	
	</div>
			</div>
		</div>

		
		
		
	<h3 id="order_review_heading">Your order</h3>
	
	
	<div id="order_review" className="woocommerce-checkout-review-order">
		<table className="shop_table woocommerce-checkout-review-order-table" 
        style={{ position: 'static', zoom: 1 }} >
	<thead>
		<tr>
			<th className="product-name">Product</th>
			<th className="product-total">Subtotal</th>
		</tr>
	</thead>
	<tbody>
					{
                        store.products.map(
                            (row) => <tr className="cart_item">
                                    <td className="product-name">
                                        {row.product.libProduit}&nbsp;						 
                                        <strong className="product-quantity">×&nbsp;{ row.qty }</strong>											
                                    </td>
                                    <td className="product-total">
                                        <span className="woocs_special_price_code">
                                        <span className="woocommerce-Price-amount amount">
                                        <bdi> <PriceUnitBox price={
            ( (Number(row.product?.capitalUnitaireProduit) + Number(row.product?.interetUnitaireProduit)) * row.qty ) } /> </bdi></span></span>					
                                    </td>
				                </tr>
                        )
                    }	
                        {/* <tr className="cart_item">
                            <td className="product-name">
                                ORANGE &amp; VANILLA LUXURIOUS NATURAL BODY LOTION&nbsp;						 
                                <strong className="product-quantity">×&nbsp;1</strong>											
                            </td>
                            <td className="product-total">
                                <span className="woocs_special_price_code">
                                USD : <span className="woocommerce-Price-amount amount">
                                <bdi><span className="woocommerce-Price-currencySymbol">$</span>66.00</bdi></span></span>					
                            </td>
				        </tr> */}
					</tbody>
	<tfoot>

		<tr className="cart-subtotal">
			<th>Subtotal</th>
			<td><span className="woocs_special_price_code">
            <span className="woocommerce-Price-amount amount"><bdi> <PriceUnitBox price={storeTotal} /> </bdi></span></span></td>
		</tr>

		
		
			
			<tr className="woocommerce-shipping-totals shipping">
	<th>Shipping</th>
	<td data-title="Shipping">
		Enter your address above to view shipping options.
		
			</td>
</tr>

			
		
		
														
		
		<tr className="order-total">
			<th>Total</th>
			<td><strong><span className="woocs_special_price_code">
               <span className="woocommerce-Price-amount amount"><bdi> <PriceUnitBox price={storeTotal} /> </bdi></span></span></strong> </td>
		</tr>

		
	</tfoot>
</table>

<div id="payment" className="woocommerce-checkout-payment" style={{ position: 'static', zoom: 1 }} >
			<ul className="wc_payment_methods payment_methods methods">
			<li className="wc_payment_method payment_method_ppcp-gateway">
	<input id="payment_method_ppcp-gateway" type="radio" className="input-radio" name="payment_method" value="ppcp-gateway"
      data-order_button_text="" style={{ display: 'none' }} />

	<label htmlFor="payment_method_ppcp-gateway">
		PayPal 	</label>
        <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
			<div className="payment_box payment_method_ppcp-gateway">
			<p  onClick={() => { console.log(values); }} >Pay via PayPal.</p>
		</div>
	</li>
		</ul>
		<div className="form-row place-order">
		<noscript>
			Since your browser does not support JavaScript, or it is disabled, please ensure you click the <em>Update Totals</em> button before placing your order. You may be charged more than the amount stated above if you fail to do so.			<br/><button type="submit" className="button alt" name="woocommerce_checkout_update_totals" value="Update totals">Update totals</button>
		</noscript>

	
		
		{/* <button type="submit" className="button alt ppcp-hidden" name="woocommerce_checkout_place_order" 
        id="place_order" value="Place order" data-value="Place order">Place order</button> */}
		{/* <div id="ppcp-messages" data-partner-attribution-id="Woo_PPCP" data-pp-id="1">
            <span id="zoid-paypal-message-uid_cb8fb4975b_mja6mjc6mzi">
                <style nonce=""></style>
                <div id="smart-menu" className="smart-menu"></div>
                <div id="installments-modal" className="installments-modal"></div>
                <iframe name="__detect_close_uid_65530805c9_mja6mjc6mza__" style="display: none;"></iframe></div> */}
            </div></div>	</div>


	
            </Form>
            )}
        </Formik> : <></> }

</div>
	</div>
</div>




			</div> 
		</div>
	</div> 
</div></div>
		<div id="fws_644ecf306e334" data-column-margin="none" data-midnight="dark" className="wpb_row vc_row-fluid vc_row  " style={{ paddingTop: '0px', paddingBottom: '0px' }} ><div className="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div className="inner-wrap"><div className="row-bg"  ></div></div></div><div className="row_col_wrap_12 col span_12 dark left">
	<div className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone " data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div className="vc_column-inner">
			<div className="wpb_wrapper">
				<div className="img-with-aniamtion-wrap  custom-width-350px" data-max-width="custom" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in">
      <div className="inner">
        <div className="hover-wrap" style={{ opacity: 1 }} > 
          <div className="hover-wrap-inner img-loaded">
            <img className="img-with-animation skip-lazy nectar-lazy animated-in loaded" 
            data-delay="0" height="88" width="350" data-animation="fade-in" 
            src="https://www.lapotencielle.com/wp-content/uploads/2022/05/paypal-cards-secure-768x193-1.png" alt="Payment Method" sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw" srcSet="https://www.lapotencielle.com/wp-content/uploads/2022/05/paypal-cards-secure-768x193-1.png 350w, https://www.lapotencielle.com/wp-content/uploads/2022/05/paypal-cards-secure-768x193-1-300x75.png 300w" />
          </div>
        </div>
      </div>
    </div>
			</div> 
		</div>
	</div> 
</div></div>		</div>
	</div>
	</div>

 


	

		
		
</div>
        </>
        );
    }
    
export default Checkout;