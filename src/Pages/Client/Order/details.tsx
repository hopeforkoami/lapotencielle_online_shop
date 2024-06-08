import { FC, useEffect, useState } from 'react'; 
import {
    Outlet,
    useParams,
    useNavigate
} from "react-router-dom";
import ClientService from '../service';
import DataTable from 'react-data-table-component';

import { useAppDispatch, useAppSelector } from '../../../Hooks/customSelector'; 
import { RootState } from '../../../Redux/store';

//Moment react
import Moment from 'react-moment';

const OrderDetails: FC = () => {  

    const { id } = useParams();
    const navigate = useNavigate()
    const user = useAppSelector((state: RootState) => state.users.user );

    const clientService = new ClientService();
    let [ loading, setLoading ] = useState(false);
    let orderInitial:any  = null;
    let [ order, setOrder ] = useState(orderInitial);
 

    const getOrder = () => {
        setLoading(true);
        clientService.getOrder(Number(id)).then(async function (response: any) {
            console.log(response);  
            setOrder(response.data.data); 
            setLoading(false);
        })
        
        .catch(function (error: any) {
            console.log(error); 
            setLoading(false);
        });

    } 

    const toNumber = (val: any) => {
        return Number(val);
    }

    useEffect(() => {
        getOrder();
    }, []);
   
    
    return (
        <> 
         {
            loading === true ? 
            <p>
                <strong>
                   In progress...
                </strong>
            </p> :
            <>
                {
                    order === null ? 

                    <p>  <strong> Error while loading, reload please... </strong> </p>
                    : 
                    <>
                    <button type="button" name="add-to-cart" value="278" onClick={event => {
                        navigate('/client/orders');
                     }}  className="single_add_to_cart_button button alt">Return</button>

                    <button style={{ float: 'right', backgroundColor: 'red' }} type="button" name="add-to-cart" value="278" onClick={event => {
                        navigate('/client/orders');
                     }}  className="button button-danger alt">Annuler</button>

                    <br/>
                    <br/>
<div className="col2-set" id="customer_details">
			<div className="col-1">
				<div className="woocommerce-billing-fields">
        <h6>Command status: { order.orderStatut.libelle } </h6>
		<h5>Command details</h5>

	
	
	<div className="woocommerce-billing-fields__field-wrapper">
        <p className="form-row form-row-first validate-required" 
                    id="shipping_first_name_field" data-priority="10"><label htmlFor="shipping_first_name" className="">
                    Command date: </label>
                    <span className="woocommerce-input-wrapper"> 
                            <Moment format="YYYY/MM/DD hh:mm:ss">
                                {order.addDate}
                            </Moment>
                       
                    </span>
        </p>
        <p className="form-row form-row-last validate-required" 
                        id="shipping_last_name_field" data-priority="20">
                            <label htmlFor="shipping_last_name" className="">Payment method: </label>
                            <span className="woocommerce-input-wrapper">
                                 {' ' + order.paymenentMethod.libelle}  
                            </span>
        </p>

        {/* <p className="form-row form-row-wide" id="billing_company_field" data-priority="30">
            <label htmlFor="billing_company" className=""> </label>
            <span className="woocommerce-input-wrapper">
                {}
            </span>
        </p> */}

        <p className="form-row form-row-wide validate-required validate-phone" id="billing_phone_field" data-priority="100">
            <label htmlFor="billing_phone" className="">Paid amount: </label>
            <span className="woocommerce-input-wrapper"> { toNumber(order.vente.montantVente) +
            toNumber(order.shippingFees) + toNumber(order.taxesFees) - toNumber(order.montantReduction)  } USD </span>
        </p>
      
        {/* <p className="form-row form-row-wide validate-required validate-email" id="billing_email_field" data-priority="110">
            <label htmlFor="billing_email" className="">Email address&nbsp;<abbr className="required" title="required">*</abbr></label>
            <span className="woocommerce-input-wrapper"> {} </span>
        </p>	 */}
    </div>

	</div>

			</div>

			<div className="col-2">

                <h6>Shipping fees: { order.shippingFees } USD</h6>

				<div className="woocommerce-shipping-fields">
	
                    <h5 id="ship-to-different-address">
                        <label className="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox"> 
                            <span>Shipping address information</span>
                        </label>
                    </h5> 

                </div>
                <div className="woocommerce-additional-fields">
	
	
                    
                    <div className="woocommerce-additional-fields__field-wrapper">
                                        
                    {  order !== null && <ul style={{ listStyleType: 'none', width: '100%' }} >
                            <li style={{ width: '49%', display: 'inline-block' }} >
                                <b>Country :</b> 
                                { order.shippingAddress.country }
                            </li>
                            <li style={{ width: '49%', display: 'inline-block' }} >
                                <b>State :</b> { order.shippingAddress.stateOrProvince }
                            </li>
                            <br />
                            <br />
                            <li style={{ width: '49%', display: 'inline-block' }} >
                                <b>City :</b> { order.shippingAddress.city }
                            </li>
                            <li style={{ width: '49%', display: 'inline-block' }} >
                                <b>Postal code :</b> { order.shippingAddress.zipOrPostalCode }
                            </li>
                            <br />
                            <br />
                            <li style={{ width: '49%', display: 'inline-block' }} >
                                <b>Address Line :</b> { order.shippingAddress.addresseLineOne }
                            </li>
                        </ul> }  
                    </div>

        <div className="woocommerce-shipping-fields">
	
                    <h5 id="ship-to-different-address">
                        <label className="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox"> 
                            <span>Delivery address information</span>
                        </label>
                    </h5> 

        </div>

        <div className="woocommerce-additional-fields__field-wrapper">
                                        
                                        {  order !== null && <ul style={{ listStyleType: 'none', width: '100%' }} >
                                                <li style={{ width: '49%', display: 'inline-block' }} >
                                                    <b>Country :</b> 
                                                    { order.deliveryAddress.country }
                                                </li>
                                                <li style={{ width: '49%', display: 'inline-block' }} >
                                                    <b>State :</b> { order.deliveryAddress.stateOrProvince }
                                                </li>
                                                <br />
                                                <br />
                                                <li style={{ width: '49%', display: 'inline-block' }} >
                                                    <b>City :</b> { order.deliveryAddress.city }
                                                </li>
                                                <li style={{ width: '49%', display: 'inline-block' }} >
                                                    <b>Postal code :</b> { order.deliveryAddress.zipOrPostalCode }
                                                </li>
                                                <br />
                                                <br />
                                                <li style={{ width: '49%', display: 'inline-block' }} >
                                                    <b>Address Line :</b> { order.deliveryAddress.addresseLineOne }
                                                </li>
                                            </ul> }  
                                        </div>


        {
           false ? <></> : 
            <> 
                <div style={{ maxWidth: '96%', width: '96%'  }} className="form-row form-row-wide" id="calc_shipping_country_field">
                                
                                {/* <select className={`country_to_state country_select 
                                ${ errors.deliveryCountry && touched.deliveryCountry ? "input-error":""}`}
                                            name="countryCode"  
                                                onChange={handleChange('deliveryCountry')}
                                                    onBlur={handleBlur('deliveryCountry')}
                                                        value={values.deliveryCountry}  id="calc_shipping_country" >
                                    <option selected value="default">Select a country / region…</option> {
                                    countries !== null ? countries.all.map((c:any, index: number) => 
                                        <option value={  c.alpha2  }  label={c.name}>
                                            {c.name}</option>)
                                        : <></>
                                    }
                                </select>  */}

                             
                                   
                </div>

                            <div style={{ maxWidth: '48%', width: '48%', display: 'inline-block' }} className="form-row validate-required  address-field" id="calc_shipping_state_field">
                                {/* <input type="text" className={`input-text
                                ${ errors.deliveryState && touched.deliveryState ? "input-error":""}`}
                                            name="deliveryState"  placeholder="State"
                                                onChange={handleChange('deliveryState')}
                                                    onBlur={handleBlur('deliveryState')} 
                                                        value={values.deliveryState} data-placeholder="State" />

{ errors.deliveryState && touched.deliveryState && errors.deliveryState && 
                                        <small id="validationServer05Feedback" className="invalid-feedback">
                                            { errors.deliveryState && touched.deliveryState && errors.deliveryState }
                                        </small> 
                                    } */}
                            </div>

                            <div style={{  maxWidth: '48%', width: '48%',  display: 'inline-block' }} className="form-row validate-required  address-field" id="calc_shipping_city_field">
                                {/* <input type="text" className={`input-text
                                ${ errors.deliveryCity && touched.deliveryCity ? "input-error":""}`}
                                            name="deliveryCity"  
                                                onChange={handleChange('deliveryCity')}
                                                    onBlur={handleBlur('deliveryCity')}
                                                        value={values.deliveryCity}  placeholder="Town / City"
                                            id="calc_shipping_city" data-placeholder="Town / City" />
                                { errors.deliveryCity && touched.deliveryCity && errors.deliveryCity && 
                                        <small id="validationServer05Feedback" className="invalid-feedback">
                                            { errors.deliveryCity && touched.deliveryCity && errors.deliveryCity }
                                        </small> 
                                    } */}

                            </div>

                            <div style={{  maxWidth: '48%', width: '48%', display: 'inline-block' }} className="form-row validate-required form-row-wide address-field" id="calc_shipping_postcode_field">
                            {/* <input type="text" 
                            className={`input-text
                            ${ errors.deliveryZip && touched.deliveryZip ? "input-error":""}`}
                                        name="postalCode"  
                                            onChange={handleChange('deliveryZip')}
                                                onBlur={handleBlur('deliveryZip')}
                                                    value={values.deliveryZip}  placeholder="Postcode / ZIP"
                                                     id="calc_shipping_postcode" data-placeholder="Postcode / ZIP" />
                                 { errors.deliveryZip && touched.deliveryZip && errors.deliveryZip && 
                                        <small id="validationServer05Feedback" className="invalid-feedback">
                                            { errors.deliveryZip && touched.deliveryZip && errors.deliveryZip }
                                        </small> 
                                    } */}
                            </div>

                            <div style={{  maxWidth: '48%', width: '48%', display: 'inline-block' }} className="form-row validate-required form-row-wide address-field" id="calc_shipping_postcode_field">
                                {/* <input type="text" 
                                className={`input-text
                                ${ errors.deliveryAdrLine1 && touched.deliveryAdrLine1 ? "input-error":""}`}
                                        name="deliveryAdrLine1"  
                                            onChange={handleChange('deliveryAdrLine1')}
                                                onBlur={handleBlur('deliveryAdrLine1')}
                                                    value={values.deliveryAdrLine1}  placeholder="Street / Home number"
                                                     id="calc_shipping_postcode" data-placeholder="Street / Home number" />
                                { errors.deliveryAdrLine1 && touched.deliveryAdrLine1 && errors.deliveryAdrLine1 && 
                                        <small id="validationServer05Feedback" className="invalid-feedback">
                                            { errors.deliveryAdrLine1 && touched.deliveryAdrLine1 && errors.deliveryAdrLine1 }
                                        </small> 
                                    } */}

                            </div>


                            <div style={{  maxWidth: '48%', width: '48%', display: 'inline-block' }} className="form-row validate-required form-row-wide address-field" id="calc_shipping_postcode_field">
                                {/* <input type="text" 
                                className={`input-text
                                ${ errors.deliveryAdrLine2 && touched.deliveryAdrLine2 ? "input-error":""}`}
                                        name="deliveryAdrLine2"  
                                            onChange={handleChange('deliveryAdrLine2')}
                                                onBlur={handleBlur('deliveryAdrLine2')}
                                                    value={values.deliveryAdrLine2}  placeholder="Street / Home number"
                                                     id="calc_shipping_postcode" data-placeholder="Street / Home number" />
                                { errors.deliveryAdrLine2 && touched.deliveryAdrLine2 && errors.deliveryAdrLine2 && 
                                        <small id="validationServer05Feedback" className="invalid-feedback">
                                            { errors.deliveryAdrLine2 && touched.deliveryAdrLine2 && errors.deliveryAdrLine2 }
                                        </small> 
                                    } */}

                            </div>

                            {/* <br />
                                <label>
                                    <Field type="checkbox" name="saveAddress" />
                                    Save delivery address
                                </label>
                            <br />
                            <br /> */}
                            
                            {/* <p><button disabled={ !values.deliveryCountry ||
                                !values.deliveryState || !values.deliveryCity || !values.deliveryZip || !values.deliveryAdrLine1
                             } type="submit" name="calc_shipping" value="1"
                             className="button">  
                             save</button></p> */}
            </>
        }

	
</div>
</div>
</div>
                        
                    </> 
                    
                }
            </>

         }
           
        </>
    );
}

export default OrderDetails