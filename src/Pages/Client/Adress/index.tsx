import '../style.css';
import { FC, useState } from 'react';
import {
    Link, useLocation, useNavigate, useParams
} from "react-router-dom";
import DataTable from 'react-data-table-component';
import { useEffect } from 'react';
import ClientService from '../service'; 
import ImageGallery from 'react-image-gallery';

import * as Utils from '../../../Utils';
import ReleatedProductBox from '../../../Components/ReleatedProductBox';

import { Formik, Field, Form, FormikProps } from 'formik'
import * as yup from 'yup';

import { useAppDispatch, useAppSelector } from '../../../Hooks/customSelector';
import { addProduct, removeProduct, updateProductQty, updateProducts } from '../../../Redux/Reducers/storeReducer';
import Footer from '../../../Layouts/Footer';
import { setUser } from '../../../Redux/Reducers/userReducer';
import { RootState } from '../../../Redux/store';

// React - Bootstrap
import { Modal } from 'react-bootstrap';

var countries = require('country-data-list').countries;

const Adress: FC = () => {  

    let location = useLocation(); 
    const user = useAppSelector((state: RootState) => state.users.user );
    const dispatch = useAppDispatch();
    const clientService = new ClientService();

   
    let [ loading, setLoading ] = useState(false);  

    const addressesInit: any = [];
    const addresseInit: any = null;

    let [ addresses, setAddresses ] = useState(addressesInit);

    let [ address, setAddress ] = useState(addresseInit);

    let [ addresseModal, setAddresseModal ] = useState(false);


    const getAdresses = () => {

        setLoading(true);

        clientService.getAdresses( user?.id ).then(async function (response: any) {
            console.log(response); 
            if (response.status === 200) {
               setAddresses((adds: any) => response.data?.data.clientAdresses);
               setLoading(false);
            } else {
                setLoading(false);
            }
        })
          .catch(function (error: any) {
            console.log(error); 
            setLoading(false);
        });

    }
    

    useEffect(
        () => {
            getAdresses();
        }, []
    );

    
    return (
        <> 
            {
                loading ? <h4><b>Charging...</b></h4> :
                addresses === null ? <h4><b>No address found</b></h4>
                :
                <>
                <div style={{ display: 'block', marginBottom: '8px' }}>
                    <button type="button" name="add-to-cart" value="278" onClick={event => {
                        getAdresses();
                     }}  className="single_add_to_cart_button button alt"> Update List </button>

                    <button style={{ float: 'right', backgroundColor: 'red' }} type="button" name="add-to-cart" value="278" onClick={event => {
                        setAddresseModal(true);
                     }}  className="button button-danger alt">Add new address</button>
                </div>
                { addresses.map(
                    (add: any) =>  <div className='address-block'>
                    <div className='address-info'>
                    <ul style={{ listStyleType: 'none', width: '100%' }} >
                            <li  >
                                <b>Country :</b> 
                                { add.country !== null ? add.country.name : '' }
                            </li>
                            <li  >
                                <b>State :</b> { add.stateOrProvince }
                            </li> 
                            <li  >
                                <b>City :</b> { add.city }
                            </li>
                            <li  >
                                <b>Postal code :</b> { add.zipOrPostalCode }
                            </li> 
                            <li  >
                                <b>Address Line :</b> ...
                            </li>
                        </ul>
                    </div>
                    <br />
                    <div className='btn-list'>
                        <button onClick={() => { 

                            var confirm = window.confirm("Are you sure ? you want to delete ?");
                            if (confirm) {

                                setLoading(true);

                                        clientService.deleteAddress( add.id ).then(async function (response: any) {
                                            console.log(response); 
                                            if (response.status === 200) {
                                               alert('Address deleted successfully');
                                               setLoading(false);
                                                getAdresses();
                                            } else {
                                                alert('An error occured, please try again.');
                                                setLoading(false);
                                            }
                                        })
                                          .catch(function (error: any) {
                                            console.log(error); 
                                            setLoading(false);
                                        });

                            }
                        }} className='button button-danger'>
                            Delete
                        </button>
                        <button style={{ display: 'inline-block', marginLeft: "1px" }} 
                        type="button" name="add-to-cart" value="278" onClick={event => { 
                            setAddress(add);
                            setAddresseModal(true);
                        }} className="single_add_to_cart_button button alt">
                            Update
                        </button>
                    </div>
                </div>
                ) } </>
            }

            {/* Addresses Modal */}

            <Modal 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={ addresseModal }
                onHide={() => setAddresseModal(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {  'Update an address' }
                    </Modal.Title> 
                </Modal.Header>
                <Modal.Body>

                <Formik 
                                initialValues={ 
                                    address !== null ?
                                    {
                                        countryCode: address.country !== null ? address.country.name : '',
                                        state: address.stateOrProvince,
                                        city: address.city,
                                        postalCode: address.zipOrPostalCode,
                                        addressLine1: address.addresseLineOne,
                                        saveAddress: false
                                    } :
                                    {
                                        countryCode: '',
                                        state: '',
                                        city: '',
                                        postalCode: '',
                                        addressLine1: '',
                                        saveAddress: false
                                    }
                                }

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
                                // innerRef={shippingAddressFormRef}
                                onSubmit={async (
                                    values, actions
                                ) => {

                                    console.log(values);
                                     if (address !== null ) {
                                        setLoading(true);

                                        clientService.updateAddress({
                                            idClient: user?.id,
                                            idClientAdresse: address.id,
                                            addresseLineOne: values.addressLine1,
                                            addresseLineTwo: "",
                                            city: values.city,
                                            zipOrPostalCode: values.postalCode,
                                            stateOrProvince: values.state,
                                            country: values.countryCode
                                        }).then(async function (response: any) {
                                            console.log(response); 
                                            if (response.data.statut === 200) {
                                                setAddress(null);
                                               alert('Address updated successfully');
                                               actions.resetForm();
                                               setLoading(false);
                                               setAddresseModal(false);
                                                getAdresses();
                                            } else {
                                                alert('An error occured, please try again.');
                                                setLoading(false);
                                            }
                                        })
                                          .catch(function (error: any) {
                                            console.log(error); 
                                            setLoading(false);
                                        });

                                     } else {

                                        setLoading(true);

                                        clientService.addAddress({
                                            idClient: user?.id,
                                            addresseLineOne: values.addressLine1,
                                            addresseLineTwo: "",
                                            city: values.city,
                                            zipOrPostalCode: values.postalCode,
                                            stateOrProvince: values.state,
                                            country: values.countryCode
                                        } ).then(async function (response: any) {
                                            console.log(response); 
                                            if (response.data.statut === 200) {
                                               alert('Address add successfully');
                                               actions.resetForm();
                                               setLoading(false);
                                               setAddresseModal(false);
                                                getAdresses();
                                            } else {
                                                alert('An error occured, please try again.');
                                                setLoading(false);
                                            }
                                        })
                                          .catch(function (error: any) {
                                            console.log(error); 
                                            setLoading(false);
                                        });

                                     }
                                         
                                         
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
                                            <option value={  c.name }  label={c.name}>
                                                {c.name}</option>)
                                            : <></>
                                        }
                                    </select> 

                                    { errors.countryCode && touched.countryCode && errors.countryCode && 
                                            <small id="validationServer05Feedback" className="invalid-feedback">
                                                { errors.countryCode.toString() }
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
                                                { errors.state.toString() }
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
                                                { errors.city.toString() }
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
                                                { errors.postalCode.toString() }
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
                                                { errors.addressLine1.toString() }
                                            </small> 
                                        }

                                </div>

                                <br /> 
                                <br />
                                <br />

                                <p><button disabled={ !isValid && !dirty } type="submit" name="calc_shipping" value="1"
                                 className="button"> 
                                 {
                                    loading && <i className="fas fa-spinner fa-spin"></i>
                                 } 
                                 Update</button></p>
                           
                            </section> 

                            </Form>
            )}
        </Formik>
                
                </Modal.Body>
                <Modal.Footer>
                {/* <Button onClick={props.onHide}>Close</Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Adress