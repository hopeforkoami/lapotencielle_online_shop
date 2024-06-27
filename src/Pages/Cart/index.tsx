import './style.css';
import { FC, useRef, useState } from 'react';
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
import { addProduct, removeProduct, updateProductQty, updateProducts, setShippingCosts, setReductions, setCurrentShippingAddress, getBasketContents, deleteBasketProduct, addProductToBasket } from '../../Redux/Reducers/storeReducer';
import Footer from '../../Layouts/Footer';
import { RootState } from '../../Redux/store';
import PriceUnitBox from '../../Components/PriceUnitBox';

var countries = require('country-data-list').countries ;

interface ShippingOptionsForm {
    cost: string | null
}


interface PromotionCodeForm {
    promoCode: string | null
}

interface ShippnAddressForm {
    countryCode: string;
    state: string;
    city: string;
    postalCode: string;
    addressLine1: string;
    saveAddress: boolean
}

const Cart: FC = () => {   
    
    let location = useLocation();
    let navigate = useNavigate();
    const store = useAppSelector((state) => state.store)
    const dispatch = useAppDispatch();
    const user = useAppSelector((state: RootState) => state.users.user ); 

    const cartService = new CartService();
    const [ loading, setLoading ] = useState(false);
    const [ reduction, setReduction ] = useState(null);
    const [ showShppingForm, setShowShppingForm ] = useState(true);

    const promoCodeFormRef = useRef< FormikProps< PromotionCodeForm >>(null);

    const shippingOptionsFormRef = useRef< FormikProps< ShippingOptionsForm >>(null);

    const shippingAddressFormRef = useRef< FormikProps< ShippnAddressForm >>(null);

    let initialTotal: number = 0;
    let [ storeTotal, setStoreTotal ] = useState(initialTotal);

    let [
        shippingOptions, setShippingOptions
    ] = useState(null);
    const shippingCostInit: any = 0;
    let [
        shippingCost, setShippingCost
    ] = useState(shippingCostInit);

    const shippingAddressInit: any = null;
    let [
        shippingAddress, setShippingAddress
    ] = useState(shippingAddressInit);

    let [
        loadShppingOptions, setLoadShippingOptions
    ] = useState(false);

    let [
        loadReduction, setLoadReduction
    ] = useState(false);

    const getStoreTotal = () => {
        let strTtl = 0;
        store.products.forEach(
            (row: any) => {
                strTtl += ( (Number(row.product?.capitalUnitaireProduit) + Number(row.product?.interetUnitaireProduit)) * row.qty );
            }
        );
        setStoreTotal( strTtl );
    }

    useEffect(() => {   
        console.log(user);
        getStoreTotal();
        window.onload = function() { 
            setShowShppingForm(true);
        }

        dispatch( getBasketContents({ 
            dispatch: dispatch,
            navigate: navigate
        }));

    }, []);

    useEffect(() => {   
        getStoreTotal();
    }, [store.products]);

    useEffect(() => {

        console.log("Shipping cost change");

        const cost  = shippingOptionsFormRef.current?.values.cost;

        console.log(cost);

        if ( cost !== undefined && cost !== null && cost !== '') {
            setShippingCost( Number(shippingOptionsFormRef.current?.values.cost) ?? null );
        }

    }, [ shippingOptionsFormRef.current?.values.cost ] )
    
    const columns = [
        {
            name: ` `,
            selector: (row: any) => 
            <Link to={'/product/'+row.product.id} ><img width={150} height={150} style={{ height: '120px', width: '100px' }}
            src={ Utils._mediaUrl + row.product?.image } alt="" /></Link> ,
        },
        {
            name: `Product`,
            selector: (row: any) => row.product.libProduit 
        }, 
        {
            name: `Price`,
            selector: (row: any) => <>
                <b>  <PriceUnitBox price={ (Number(row.product?.capitalUnitaireProduit) + Number(row.product?.interetUnitaireProduit) ) } /> </b>
            </>,
        },
        {
            name: `Quantity`,
            selector: (row: any) => <>
                <div>
                    <div   style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between' }}> 
                        <div onClick={ () => {
                                
                                var qty = row.qty;
                                if (qty > 1) {
                                    qty = qty - 1;
                                } 
                               
                                // dispatch( updateProductQty( { product: row.product, qty: qty } ) );

                                dispatch( addProductToBasket({
                                    idClient: user?.id,
                                    product: row.product,
                                    qty: Number(qty),
                                    dispatch: dispatch,
                                    navigate: navigate,
                                    navigateTo: false
                                }) );
                                
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
                               
                                // dispatch( updateProductQty( { product: row.product, qty: qty } ) );

                                dispatch( addProductToBasket({
                                    idClient: user?.id,
                                    product: row.product,
                                    qty: Number(qty),
                                    dispatch: dispatch,
                                    navigate: navigate,
                                    navigateTo: false
                                }) );
                                
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
            <b> <PriceUnitBox price={
            ( (Number(row.product?.capitalUnitaireProduit) + Number(row.product?.interetUnitaireProduit)) * row.qty ) } />  </b> </>,
        },
        {
            name: ` `,
            selector: (row: any) => <>

                    <i onClick={() => {
                        dispatch( deleteBasketProduct({ 
                            idLigne: Number(row.contentLine),
                            dispatch: dispatch,
                            navigate: navigate
                        })  )
                    }}  className="fa fa-times" aria-hidden="true"></i>
            
                </>
        }

    ];

    const toString = (str:any) => {
        return str.toString();
    } 

    return (
        <>
            <div id="ajax-content-wrap">
                    <div className="breadcrumb">
                        <span><span><Link to="/">Home</Link> / <span className="breadcrumb_last" aria-current="page">
                            Cart</span></span></span>		</div>
            <div   className="container-wrap">
                <div className="container main-content main-container">
                    <div className="row">
                        
                    <div id="fws_630b971b1614a" data-column-margin="default" data-midnight="dark" className="wpb_row vc_row-fluid vc_row top-level "
                     style={{ paddingTop: '0px', paddingBottom: '0px' }}>
            <div className="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div className="inner-wrap"><div className="row-bg">
                </div></div></div>
            <div className="row_col_wrap_12 col span_12 dark left">
                <div className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone " 
                data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
            <br/>     
            <div className="wpb_text_column wpb_content_element ">
                <div className="wpb_wrapper">
                    <div className="woocommerce">
                    { store.products.length > 0 &&  <div className="woocommerce-notices-wrapper">
	<div className="woocommerce-message" >
		<Link to={'/product/'+ store.products[store.products.length -1].product.id} 
        tabIndex={1} className="button wc-forward">
            Continue shopping</Link> { store.products[store.products.length -1].product.libProduit } 
            has been added to your cart.	</div>
    </div> }
                        {
                            store.products.length > 0 ?
                            <><DataTable
                                            responsive={true}
                                            className="table table-striped table-bordered"
                                            columns={columns}
                                            data={ store.products }
                                            progressPending={store.loading}
                                            pagination
                                        />  


                    <div style={{ display: 'flex', flexFlow: 'row', justifyContent: 'space-between', height: '120px'  }}>
                        <div style={{ display: 'flex', flexFlow: 'column' }}>

                        

                        <Formik
                                initialValues={ 
                                    {
                                        promoCode: ''
                                }}

                                validationSchema={
                                    yup.object().shape({
                                        
                                        promoCode: yup 
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`)
                                    })
                                }
                                innerRef={promoCodeFormRef}
                                onSubmit={async (
                                    values 
                                ) => {  
                                        setLoadReduction(true);
                                        setReduction((red) => (null));
                                        console.log(values);
                                        const data = {
                                            ...values,
                                            montantBasket: storeTotal
                                        }
                                        cartService.getPromoCodeReduction(data).then(async function (response: any) {
                                            console.log(response); 
                                        if (response.data.statut === 200) {
                                             setReduction(() => (response.data.data.reduction))
                                        } else {
                                            alert('Unknown promo code');
                                        }
                                        setLoadReduction(false);
                                    }).catch(function (error: any) {
                                            console.log(error); 
                                            setLoadReduction(false);
                                    });
                                    }}
                                >
                                    {({ dirty, errors, touched, isValid, handleChange, handleBlur, handleSubmit, values }) => (
                                    <Form  >

                                        <div className="coupon">
                                            <label htmlFor="coupon_code">Coupon:</label> 
                                            <input type="text" name="coupon_code" 
                                            id="coupon_code" placeholder="Coupon code" className={`input-text 
                                                ${ errors.promoCode && touched.promoCode ? "input-error":""}`}
                                            autoComplete="promoCode" 
                                                onChange={handleChange('promoCode')}
                                                    onBlur={handleBlur('promoCode')}
                                                        value={values.promoCode ?? ''} />
                                            <button type="submit" className="button" name="apply_coupon" 
                                            value="Apply coupon">{
                                                loadReduction && <i className="fas fa-spinner fa-spin"></i>
                                            } Apply coupon</button>
                                        </div>

                                    </Form>
                                    )}
                                    </Formik>

                                    <br/> 
                            {
                                reduction !== null && <p style={{ fontWeight: 'bold' }}>Congratulations you have <PriceUnitBox price={reduction} /> benefit</p>
                            }
 
                        {/* <div className="coupon">
							<label htmlFor="coupon_code">Coupon:</label> 
                            <span><div  style={{ display: 'flex', flexFlow: 'row ', justifyContent: 'space-between' }}>
                            <Formik
                                initialValues={ 
                                    {
                                        promoCode: ''
                                }}

                                validationSchema={
                                    yup.object().shape({
                                        
                                        promoCode: yup 
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`)
                                    })
                                }
                                innerRef={promoCodeFormRef}
                                onSubmit={async (
                                    values 
                                ) => {  
                                        setLoadReduction(true);
                                        setReduction((red) => (null));
                                        console.log(values);
                                        const data = {
                                            ...values,
                                            montantBasket: storeTotal
                                        }
                                        cartService.getPromoCodeReduction(data).then(async function (response: any) {
                                            console.log(response); 
                                        if (response.data.statut === 200) {
                                             setReduction(() => (response.data.data.reduction))
                                        } else {
                                            alert('Unknown promo code');
                                        }
                                        setLoadReduction(false);
                                    }).catch(function (error: any) {
                                            console.log(error); 
                                            setLoadReduction(false);
                                    });
                                    }}
                                >
                                    {({ dirty, errors, touched, isValid, handleChange, handleBlur, handleSubmit, values }) => (
                                    <Form  className="woocommerce-form woocommerce-form-login login" >

                                        <input type="text" name="coupon_code" className="input-text" id="coupon_code" value="" 
                                         />  
                                         <input type="text" placeholder="Coupon code" id="coupon_code"
                                            className={`input-text ${ errors.promoCode && touched.promoCode ? "input-format-error":""}`}
                                                name="promoCode"  autoComplete="promoCode" 
                                                    onChange={handleChange('promoCode')}
                                                        onBlur={handleBlur('promoCode')}
                                                            value={values.promoCode ?? ''} />	
                                        <button type="submit" disabled={ (!dirty && !isValid) }
                                         className="button" name="apply_coupon" value="Apply coupon">{
                                            loadReduction && <i className="fas fa-spinner fa-spin"></i>
                                         } Apply coupon</button>

                                    </Form>
            )}
        </Formik>

                                   
                            </div></span>
                            <br/> 
                            {
                                reduction !== null && <p style={{ fontWeight: 'bold' }}>Congratulations you have <PriceUnitBox price={reduction} /> benefit</p>
                            }
						</div> */}

                        
                        </div>
                    </div> 
                     
                    <div style={{ display: 'flex', flexFlow: 'row', justifyContent: 'flex-end' }}>
                        <div className="cart-collaterals">
                            <div className="cart_totals ">

                            
                            <h2>Cart totals</h2>

                            <table cellSpacing="0" className="shop_table shop_table_responsive">

                                <tbody>
                                    <tr className="cart-subtotal">
                                        <th>Subtotal</th>
                                        <td data-title="Subtotal"><span className="woocs_special_price_code">
                                        <span className="woocommerce-Price-amount amount"><bdi> <PriceUnitBox price={storeTotal} /> </bdi></span></span></td>
                                    </tr>
                                    <tr className="woocommerce-shipping-totals shipping">
                            <th>Shipping</th>
                            <td data-title="Shipping">
                                {
                                    shippingCost === 0 ? 
                                    <p>Set an shipping adress so that we can calculate delivery fees</p>
                                    : 
                                    <p>
                                        <b> <PriceUnitBox price={shippingCost} /> </b>
                                    </p>
                                }

<div    >
                            <label htmlFor="coupon_code">Shipping address :</label> 
                           



        {
            shippingOptions !== null && 
            <>
                <br/>
                <br/>
                <button onClick={() => {
                    setShippingOptions(null);
                }} style={{ float: "left" }} type="button" name="calc_shipping" value="1"
                                 className="button">Retour</button>
                <br/>
                <br/>
                <p>Here are the delivery options available to you depending on the address provided</p>

                <Formik
                                initialValues={ 
                                    {
                                        cost: null
                                }}

                                validationSchema={
                                    yup.object().shape({
                                        
                                        cost: yup 
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`)
                                    })
                                }
                                innerRef={shippingOptionsFormRef}
                                onSubmit={async (
                                    values 
                                ) => {
                                         
                                    }}
                                >

                                {({ dirty, errors, touched, isValid, handleChange, handleBlur, handleSubmit, values }) => (
                                    <Form >

                <div className="form-group col-md-12"> <br/>

                                    <div role="group" aria-labelledby="my-radio-group">
                                        {
                                            Object.keys(shippingOptions ?? {}).map(
                                                (key) => shippingOptions !== null ? <label>
                                                <Field onClick={ (e: any) => {
                                                    console.log(e.target.value);
                                                    const cost  = e.target.value;

                                                    console.log(cost);

                                                    if ( cost !== undefined && cost !== null && cost !== '') {
                                                        setShippingCost( Number(cost) ?? null );
                                                    }

                                                }} type="radio" name="cost" value={ toString(shippingOptions[key]) } />
                                                { key.replaceAll("_", " ") } : <PriceUnitBox price={ shippingOptions[key]   } />
                                            </label> : <></>
                                            )
                                            
                                            // .forEach(function(key, index) {
                                            //     shippingOptions[key] *= 2;
                                            //     return <label>
                                            //     <Field type="radio" name="status" value="new" />
                                            //     Je suis un nouveau membre
                                            // </label>
                                            // });
                                        }
                                        
                                        <br/>
                                     
                                    </div>
 
                                </div>

                                </Form>
            )}
        </Formik> 
            </>
        }

                        </div>

{ showShppingForm && shippingOptions === null && <Formik 
                                initialValues={ 
                                    {
                                        countryCode: '',
                                        state: '',
                                        city: '',
                                        postalCode: '',
                                        addressLine1: '',
                                        saveAddress: false
                                }}

                                validationSchema={
                                    yup.object().shape({
                                        
                                        countryCode: yup 
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`),
                                        state: yup 
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`),
                                        city: yup 
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`),
                                        postalCode: yup 
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`),
                                        addressLine1: yup 
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`),
                                        saveAddress: yup 
                                            .boolean()

                                    })
                                }
                                innerRef={shippingAddressFormRef}
                                onSubmit={async (
                                    values 
                                ) => {
                                        setLoadShippingOptions(true);
                                        console.log(values);

                                        const data = {
                                            recipientAddress:  values,
                                            basket: store.products.map(
                                                (prd:any) => {
                                                    return {
                                                        prodId: prd.product?.id,
                                                        qte: prd.qty
                                                    }
                                                }
                                            ),
                                            montantBasket: storeTotal.toString()
                                        }
 
                                        cartService.getShippingCosts(data).then(async function (response: any) {
                                            console.log(response); 
                                            if (response.data.statut === 200) {
                                                setShippingAddress((add: any) => JSON.stringify(values));
                                                setShippingOptions(response.data.data.fedex);
                                                // setReduction(() => (response.data.data.reduction))
                                            } else {
                                                alert('Error');
                                            }
                                            setLoadShippingOptions(false);
                                        }).catch(function (error: any) {
                                                console.log(error); 
                                                setLoadShippingOptions(false);
                                        });
                                         
                                    }}
                                >
                                    {({ dirty, errors, touched, isValid, handleChange, handleBlur, handleSubmit, values }) => (
                                    <Form  className="woocommerce-shipping-calculator" >

                            <section className="shipping-calculator-form" >

                                <div style={{ maxWidth: '96%', width: '96%'  }} className="form-row form-row-wide" id="calc_shipping_country_field">
                                
                                    <select className={`country_to_state country_select 
                                    ${ errors.countryCode && touched.countryCode ? "input-error":""}`}
                                                name="countryCode"  
                                                    onChange={handleChange('countryCode')}
                                                        onBlur={handleBlur('countryCode')}
                                                            value={values.countryCode}  id="calc_shipping_country" >
                                        <option selected value="default">Select a country / region…</option>
    {/*                                 
                                    <option value="AF">Afghanistan</option><option value="AX">Åland Islands</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctica</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="PW">Belau</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BQ">Bonaire, Saint Eustatius and Saba</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BV">Bouvet Island</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos (Keeling) Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CG">Congo (Brazzaville)</option><option value="CD">Congo (Kinshasa)</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curaçao</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="SZ">Eswatini</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island and McDonald Islands</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="CI">Ivory Coast</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="KP">North Korea</option><option value="MK">North Macedonia</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PS">Palestinian Territory</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RU">Russia</option><option value="RW">Rwanda</option><option value="ST">São Tomé and Príncipe</option><option value="BL">Saint Barthélemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="SX">Saint Martin (Dutch part)</option><option value="MF">Saint Martin (French part)</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia/Sandwich Islands</option><option value="KR">South Korea</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syria</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TL">Timor-Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom (UK)</option><option value="US">United States (US)</option><option value="UM">United States (US) Minor Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VA">Vatican</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option><option value="VG">Virgin Islands (British)</option><option value="VI">Virgin Islands (US)</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option>				</select>
                                    */}  {
                                        countries !== null ? countries.all.map((c:any, index: number) => 
                                            <option value={  c.alpha2  }  label={c.name}>
                                                {c.name}</option>)
                                            : <></>
                                        }
                                    </select> 

                                    { errors.countryCode && touched.countryCode && errors.countryCode && 
                                            <small id="validationServer05Feedback" className="invalid-feedback">
                                                { errors.countryCode && touched.countryCode && errors.countryCode }
                                            </small> 
                                        }
                                       
                                </div>

                                <div style={{ maxWidth: '48%', width: '48%', display: 'inline-block' }} className="form-row validate-required  address-field" id="calc_shipping_state_field">
                                    <input type="text" className={`input-text
                                    ${ errors.state && touched.state ? "input-error":""}`}
                                                name="state"  placeholder="State"
                                                    onChange={handleChange('state')}
                                                        onBlur={handleBlur('state')} 
                                                            value={values.state} data-placeholder="State" />

{ errors.state && touched.state && errors.state && 
                                            <small id="validationServer05Feedback" className="invalid-feedback">
                                                { errors.state && touched.state && errors.state }
                                            </small> 
                                        }
                                </div>

                                <div style={{  maxWidth: '48%', width: '48%',  display: 'inline-block' }} className="form-row validate-required  address-field" id="calc_shipping_city_field">
                                <input type="text" className={`input-text
                                    ${ errors.city && touched.city ? "input-error":""}`}
                                                name="city"  
                                                    onChange={handleChange('city')}
                                                        onBlur={handleBlur('city')}
                                                            value={values.city}  placeholder="Town / City"
                                                id="calc_shipping_city" data-placeholder="Town / City" />
                                    { errors.city && touched.city && errors.city && 
                                            <small id="validationServer05Feedback" className="invalid-feedback">
                                                { errors.city && touched.city && errors.city }
                                            </small> 
                                        }

                                </div>

                                <div style={{  maxWidth: '48%', width: '48%', display: 'inline-block' }} className="form-row validate-required form-row-wide address-field" id="calc_shipping_postcode_field">
                                <input type="text" 
                                className={`input-text
                                ${ errors.postalCode && touched.postalCode ? "input-error":""}`}
                                            name="postalCode"  
                                                onChange={handleChange('postalCode')}
                                                    onBlur={handleBlur('postalCode')}
                                                        value={values.postalCode}  placeholder="Postcode / ZIP"
                                                         id="calc_shipping_postcode" data-placeholder="Postcode / ZIP" />
                                     { errors.postalCode && touched.postalCode && errors.postalCode && 
                                            <small id="validationServer05Feedback" className="invalid-feedback">
                                                { errors.postalCode && touched.postalCode && errors.postalCode }
                                            </small> 
                                        }
                                </div>

                                <div style={{  maxWidth: '48%', width: '48%', display: 'inline-block' }} className="form-row validate-required form-row-wide address-field" id="calc_shipping_postcode_field">
                                    <input type="text" 
                                    className={`input-text
                                    ${ errors.addressLine1 && touched.addressLine1 ? "input-error":""}`}
                                            name="addressLine1"  
                                                onChange={handleChange('addressLine1')}
                                                    onBlur={handleBlur('addressLine1')}
                                                        value={values.addressLine1}  placeholder="Street / Home number"
                                                         id="calc_shipping_postcode" data-placeholder="Street / Home number" />
                                    { errors.addressLine1 && touched.addressLine1 && errors.addressLine1 && 
                                            <small id="validationServer05Feedback" className="invalid-feedback">
                                                { errors.addressLine1 && touched.addressLine1 && errors.addressLine1 }
                                            </small> 
                                        }

                                </div>

                                <br />
                                    <label>
                                        <Field type="checkbox" name="saveAddress" />
                                        Save delivery address
                                    </label>
                                <br />
                                <br />
                                
                                <p><button disabled={ !isValid && !dirty } type="submit" name="calc_shipping" value="1"
                                 className="button"> {
                                    loadShppingOptions && <i className="fas fa-spinner fa-spin"></i>
                                 } Update</button></p>
                                {/* <input type="hidden" id="woocommerce-shipping-calculator-nonce" 
                                name="woocommerce-shipping-calculator-nonce" value="866e268b02" />
                                <input type="hidden" name="_wp_http_referer" value="/cart/" />	 */}
                            </section> 

                            </Form>
            )}
        </Formik> }
                             

                            </td>
                        </tr>

                        {
                            reduction !== null && <tr className="order-total">
                            <th>Reduction</th>
                            <td data-title="Total"><strong><span className="woocs_special_price_code"><span className="woocommerce-Price-amount amount">
                                <bdi> <PriceUnitBox price={reduction} /></bdi></span></span></strong> </td>
                        </tr>
                        }
                                <tr className="order-total">
                                    <th>Total</th>
                                    <td data-title="Total"><strong><span className="woocs_special_price_code"><span className="woocommerce-Price-amount amount">
                                        <bdi> 
                                            <PriceUnitBox price={ 
                                                reduction !== null ? (storeTotal+shippingCost) - Number(reduction) :
                                                 (storeTotal+shippingCost) } /></bdi></span></span></strong> </td>
                                </tr>

                                
                            </tbody></table>

                            <div className="wc-proceed-to-checkout">
                        <button onClick={() => {

                            // if (user !== null && user !== undefined) {

                                if (storeTotal > 0) {

                                    if (shippingCost !== undefined && shippingCost !== null && shippingCost !== '') {
                                        dispatch( setShippingCosts( shippingCost ) );  
                                    }
    
                                    if (reduction !== undefined && reduction !== null && reduction !== '') {
                                        dispatch( setReductions( reduction ) );  
                                    }

                                    if (shippingAddress !== undefined && shippingAddress !== null && shippingAddress !== '') {
                                        dispatch(  setCurrentShippingAddress( shippingAddress ) );  
                                    }

                                    let shippingMethod = null;
                                     Object.keys(shippingOptions ?? {}).map(
                                        (key) => {
                                            if (shippingOptions !== null) {
                                                if ( shippingOptions[key] === shippingCost ) {
                                                    shippingMethod = key;
                                                }
                                            }
                                    });

                                    if (shippingMethod !== null) {
                                        window.localStorage.setItem(
                                            '_shipping_method',
                                            shippingMethod
                                        );
                                    }

                                    if (promoCodeFormRef.current !== null) {
                                        window.localStorage.setItem(
                                            '_promotion_code',
                                            promoCodeFormRef.current.values.promoCode ?? ''
                                        );
                                    }
    
                                    navigate('/cart/checkout');

                                } else {
                                    alert("An error occured, if error persist please try to reload the page"); 
                                }
 
                            // } else {
                            //     alert("Please, you must login first");
                            //     navigate('/myaccount');
                            // }

                        }} className="checkout-button button alt wc-forward" style={{
                            backgroundColor: 'black !important'
                        }}  disabled={ storeTotal === 0 ||
                         shippingCost === 0 } >
                            Proceed to checkout  
                               {
                                loading && <i className="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>
                               }
                        </button>

                        {
                            user !== null ? <></> :
                            <Link style={{
                                backgroundColor: 'black !important'
                            }} to="/myaccount" className="checkout-button button alt wc-forward">
                            Sign Up / Login</Link>
                        }
                        
                        <Link style={{
                            backgroundColor: 'black !important'
                        }} to="/products/OUR-ORANGE-AND-VANILLA-PRODUCTS/orange" className="checkout-button button alt wc-forward">
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