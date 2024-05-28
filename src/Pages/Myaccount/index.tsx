import './style.css';
import { FC, useState } from 'react';
import {
    Link, useLocation, useNavigate, useParams
} from "react-router-dom";
import DataTable from 'react-data-table-component';
import { useEffect } from 'react';
import MyaccountService from './service'; 
import ImageGallery from 'react-image-gallery';

import * as Utils from '../../Utils';
import ReleatedProductBox from '../../Components/ReleatedProductBox';

import { Formik, Field, Form, FormikProps } from 'formik'
import * as yup from 'yup';

import { useAppDispatch, useAppSelector } from '../../Hooks/customSelector';
import { addProduct, removeProduct, updateProductQty, updateProducts } from '../../Redux/Reducers/storeReducer';
import Footer from '../../Layouts/Footer';
import { setUser } from '../../Redux/Reducers/userReducer';
import { RootState } from '../../Redux/store';

var countries = require('country-data-list').countries;

const Myaccount: FC = () => {   
    
    let location = useLocation(); 
    const user = useAppSelector((state: RootState) => state.users.user );
    const dispatch = useAppDispatch();
    const myaccountService = new MyaccountService();

    let [ loading, setLoading ] = useState(false);
    let [
        showPassword, setShowPassword
    ] = useState(false);

    let [
        showPasswordConfirm, setShowPasswordConfirm
    ] = useState(false);

    let [
        showLoginPassword, setShowLoginPassword
    ] = useState(false);

    let [
        message, setMessage
    ] = useState(null);

    return (
        <div className='woocommerce-account'>
            <div id="ajax-content-wrap">
                <br />
		            {/* <div className="breadcrumb">
			            <span><span><a href="/">Home</a></span> / 
                        <span className="breadcrumb_last" aria-current="page">My account</span></span>
                    </div> */}
                    <br />
                    <div className="container-wrap" style={{ minHeight: '566px' }}>
                        <div className="container main-content">
                            <div className="row">
                                <div className="woocommerce">
                                    {/* <div className="woocommerce-notices-wrapper"></div> */}

                    <div className="u-columns col2-set" id="customer_login"><div className="nectar-form-controls"><div className="control active">Login</div><div className="control">Register</div></div>

                        <div className="u-column1 col-1 visible" >


                            <h2>Login</h2>
                            <div className='alert-box'>

                            </div>
                            <Formik
                                initialValues={ 
                                    {
                                        login: '',
                                        password:  ''
                                }}

                                validationSchema={
                                    yup.object().shape({
                                        
                                        login: yup 
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`),
                                        password: yup
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`)
                                    })
                                }
                                // innerRef={formRef}
                                onSubmit={async (
                                    values 
                                ) => {
                                        setMessage(() => null);
                                        console.log(values); 
                                        setLoading(true);
                                        myaccountService.login(values).then(async function (response: any) {
                                            console.log(response); 
                                            if (response.data.statut === 200) {
                                                alert('Welcome dear !');
                                                console.log('Logged user');
                                                dispatch( setUser( response.data.data[0] ) );

                                                window.localStorage.setItem(
                                                    '__user',
                                                    JSON.stringify(response.data.data[0])
                                                );
                
                                                setLoading(false); 
                
                                                window.location.href = "/";
                                            } else if (response.data.statut === 500) {
                                                setMessage(() => response.data.message);
                                            }
                                        })
                                          .catch(function (error: any) {
                                            console.log(error); 
                                        });
                                    }}
                                >
                                    {({ dirty, errors, touched, isValid, handleChange, handleBlur, handleSubmit, values }) => (
                                    <Form  className="woocommerce-form woocommerce-form-login login" >
                                        {
                                        
                                            message !== null && message !== '' && 
                                            <b className='error-msg'>
                                                { message }
                                            </b>

                                        }
                                     
                                
                                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                    <label htmlFor="username">Username or email address&nbsp;<span className="required">*</span></label>
                                    <input type="text"   
                                    className={`woocommerce-Input woocommerce-Input--text input-text 
                                     ${ errors.login && touched.login ? "input-format-error":"input-format"}`}
                                        name="username" id="username" autoComplete="username" 
                                            onChange={handleChange('login')}
                                                onBlur={handleBlur('login')}
                                                    value={values.login} />	
                                    { errors.login && touched.login && errors.login && 
                                            <small id="validationServer05Feedback" className="invalid-feedback">
                                                { errors.login && touched.login && errors.login }
                                            </small> 
                                    }	
                                </p>

                                <p className="form-row form-row-wide">
                                        <label htmlFor="reg_billing_first_name">Password<span className="required">*</span></label>
                                        <span className="password-input"><input type={ showPassword ? "text" : "password" } 
                                        className={`input-text  ${ errors.password && touched.password ?
                                             "input-format-error":"input-format"}`} name="password" 
                                        id="password" onChange={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                            value={values.password} /><span 
                                            onClick={() => setShowPassword(() => !showPassword) }
                                             className="show-password-input"></span></span>
                                        { errors.password && touched.password && errors.password && 
                                            <small id="validationServer05Feedback" className="invalid-feedback">
                                                { errors.password && touched.password && errors.password }
                                            </small> 
                                        }
                                </p>
                                
                                <p className="form-row">
                                    <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                                        <input className="woocommerce-form__input woocommerce-form__input-checkbox"
                                        name="rememberme" type="checkbox" id="rememberme" value="forever" /> 
                                        <span>Remember me</span>
                                    </label>
                                    <input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" 
                                    value="50f6b19b53" /><input type="hidden" name="_wp_http_referer" value="/my-account/" />				
                                    <button  type="submit" className="woocommerce-button button woocommerce-form-login__submit" 
                                    name="login" value="Log in">Log in</button>
                                </p>
                                <p className="woocommerce-LostPassword lost_password">
                                    <a href="#">Forgot your Password?</a>
                                </p>

                                
                                </Form>
            )}
        </Formik>

                        </div>

                        <div className="u-column2 col-2">

                            <h2>Register</h2>
                            <Formik
                                initialValues={ 
                                    {
                                        nomClient: '',
                                        middleNameClient:  '',
                                        prenomClient: '',
                                        billAddress: '',
                                        contactClient: '',
                                        newsletter: '',
                                        '2faActivated': false,
                                        email: '',
                                        paysClient: '',
                                        login: '',
                                        password: '',
                                        passwordConfirmation: '',                                       
                                        town: '',
                                        street: '',
                                        bp: ''
                                }}

                                validationSchema={
                                    yup.object().shape({

                                        nomClient: yup 
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`),
                                        middleNameClient:  yup 
                                            .string() ,
                                        prenomClient: yup 
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`),
                                        billAddress: yup 
                                            .string(),
                                        contactClient: yup 
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`),
                                        newsletter:  yup 
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`),
                                        '2faActivated': yup 
                                            .boolean(),
                                        email: yup 
                                            .string()
                                            .email('Mail non valide')
                                            .required(`${'Ce champ est obligatoire'}`)
                                            .test('checkEmailUnique', "Email already used", async value =>
                                                myaccountService.verifyEmail(value ?? '')
                                                .then((res) => { 
                                                    console.log(res);
                                                    return  res.data.data.usable;
                                                })
                                                .catch((e) => {
                                                    console.log(e);
                                                    return false;
                                                })
                                            ),
                                        paysClient: yup 
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`),
                                        login: yup 
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`)
                                            .test('checkLoginUnique', "Login already used", async value =>
                                                myaccountService.verifyLogin(value ?? '')
                                                .then((res) => { 
                                                    console.log(res);
                                                    return  res.data.data.usable;
                                                })
                                                .catch((e) => {
                                                    console.log(e);
                                                    return false;
                                                })
                                            ),
                                        password: yup
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`)
                                            .matches(
                                                /^(?=.*[!@#\$%\^&\*])(?=.{12,})/,
                                                `${"Le mot de passe doit comporter 12 caractères avec l'utilisation d'un caractère spécial"}`
                                            ),
                                        passwordConfirmation: yup.string()
                                            .oneOf([yup.ref('password'), null], 'Passwords must match')
                                            .required(`${'Ce champ est obligatoire'}`),
                                        town: yup
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`),
                                        street: yup
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`),
                                        bp: yup
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`),
                                    })
                                }
                                // innerRef={formRef}
                                onSubmit={async (
                                    values 
                                ) => {

                                        console.log(values);

                                        setLoading(true);
                                        values.billAddress = values.paysClient + ',' + values.town + ',' + 
                                        values.street + ',' + values.bp;

                                        myaccountService.register(values).then(async function (response: any) {
                                                console.log(response); 
                                            if (response.data.statut === 200) {
                                                alert('You are well registered !');
                                                console.log('Logged user');
                                                dispatch( setUser( response.data.data?.client ) );

                                                window.localStorage.setItem(
                                                    '__user',
                                                    JSON.stringify(response.data.data?.client )
                                                );
                
                                                setLoading(false); 
                
                                                window.location.href = "/";
                                            } 
                                        }).catch(function (error: any) {
                                                console.log(error); 
                                        });
                                         
                                    }}
                                >
                                    {({ dirty, errors, touched, isValid, handleChange, handleBlur, handleSubmit, values }) => (
                                    <Form  className="woocommerce-form woocommerce-form-register register">

                                    <p className="form-row form-row-wide">
                                        <label htmlFor="reg_billing_first_name">Firstname<span className="required">*</span></label>
                                        <input type="text" 
                                        className={`input-text  ${ errors.prenomClient && touched.prenomClient ? "input-format-error":"input-format"}`} name="prenomClient" 
                                        id="prenomClient" onChange={handleChange('prenomClient')}
                                        onBlur={handleBlur('prenomClient')}
                                            value={values.prenomClient} />
                                        { errors.prenomClient && touched.prenomClient && errors.prenomClient && 
                                            <small id="validationServer05Feedback" className="invalid-feedback">
                                                { errors.prenomClient && touched.prenomClient && errors.prenomClient }
                                            </small> 
                                        }
                                    </p>

                                    <p className="form-row form-row-wide">
                                        <label htmlFor="reg_billing_first_name">Middle name</label>
                                        <input type="text" 
                                        className={`input-text  ${ errors.middleNameClient &&
                                             touched.middleNameClient ? "input-format-error":"input-format"}`}
                                              name="middleNameClient" 
                                        id="middleNameClient" onChange={handleChange('middleNameClient')}
                                        onBlur={handleBlur('middleNameClient')}
                                            value={values.middleNameClient} />
                                        { 
                                            errors.middleNameClient && touched.middleNameClient && errors.middleNameClient && 
                                            <small id="validationServer05Feedback" className="invalid-feedback">
                                                { errors.middleNameClient && touched.middleNameClient && errors.middleNameClient }
                                            </small> 
                                        }
                                    </p>

                                    <p className="form-row form-row-wide">
                                        <label htmlFor="reg_billing_first_name">Lastname<span className="required">*</span></label>
                                        <input type="text" className={`input-text  ${ errors.nomClient &&
                                             touched.nomClient ? "input-format-error":"input-format"}`} name="nomClient" 
                                        id="nomClient" onChange={handleChange('nomClient')}
                                        onBlur={handleBlur('nomClient')}
                                            value={values.nomClient} />
                                        
                                        { 
                                            errors.nomClient && touched.nomClient && errors.nomClient && 
                                            <small id="validationServer05Feedback" className="invalid-feedback">
                                                { errors.nomClient && touched.nomClient && errors.nomClient }
                                            </small> 
                                        }
                                    </p>

                                    <p className="form-row form-row-wide">
                                        <label htmlFor="reg_billing_first_name">Email<span className="required">*</span></label>
                                        <input type="email" 
                                        className={`input-text  ${ errors.email && touched.email ? "input-format-error":"input-format"}`} name="email" 
                                        id="email" onChange={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                            value={values.email} />
                                        { errors.email && touched.email && errors.email && 
                                            <small id="validationServer05Feedback" className="invalid-feedback">
                                                { errors.email && touched.email && errors.email }
                                            </small> 
                                        }
                                    </p>

                                    <p className="form-row form-row-wide">
                                        <label htmlFor="reg_billing_first_name">Contact<span className="required">*</span></label>
                                        <input type="text" 
                                        className={`input-text  ${ errors.contactClient && touched.contactClient ?
                                             "input-format-error":"input-format"}`} name="contactClient" 
                                        id="contactClient" onChange={handleChange('contactClient')}
                                        onBlur={handleBlur('contactClient')}
                                            value={values.contactClient} />
                                        { errors.contactClient && touched.contactClient && errors.contactClient && 
                                            <small id="validationServer05Feedback" className="invalid-feedback">
                                                { errors.contactClient && touched.contactClient && errors.contactClient }
                                            </small> 
                                        }
                                    </p>

                                    <b style={{ color: "white", textDecoration: "underline" }}>Delivery informations</b>

                                    <p className="form-row form-row-wide">
                                        <label htmlFor="reg_billing_first_name">Country<span className="required">*</span></label>
                                        <select 
                                        className={`input-text  ${ errors.paysClient && touched.paysClient ? 
                                            "input-format-error":"input-format"}`} name="paysClient" 
                                        id="paysClient" onChange={handleChange('paysClient')}
                                        onBlur={handleBlur('paysClient')}
                                            value={values.paysClient}>
                                            {
                                                countries !== null ? countries.all.map((c:any, index: number) => 
                                                <option value={ c.name  } selected={ c.name === 'United States' }  label={c.name}>
                                                    {c.name}</option>)
                                                : <></>
                                            }
                                        </select>
                                        { errors.paysClient && touched.paysClient && errors.paysClient && 
                                            <small id="validationServer05Feedback" className="invalid-feedback">
                                                { errors.paysClient && touched.paysClient && errors.paysClient }
                                            </small> 
                                        }
                                    </p>

                                    <p className="form-row form-row-wide">
                                        <label htmlFor="reg_billing_first_name">Town<span className="required">*</span></label>
                                        <input type="text" 
                                        className={`input-text  ${ errors.town && touched.town ?
                                             "input-format-error":"input-format"}`} name="town" 
                                        id="town" onChange={handleChange('town')}
                                        onBlur={handleBlur('town')}
                                            value={values.town} />
                                        { errors.town && touched.town && errors.town && 
                                            <small id="validationServer05Feedback" className="invalid-feedback">
                                                { errors.town && touched.town && errors.town }
                                            </small> 
                                        }
                                    </p>

                                    <p className="form-row form-row-wide">
                                        <label htmlFor="reg_billing_first_name">Street<span className="required">*</span></label>
                                        <input type="text" 
                                        className={`input-text  ${ errors.street && touched.street ?
                                             "input-format-error":"input-format"}`} name="street" 
                                        id="street" onChange={handleChange('street')}
                                        onBlur={handleBlur('street')}
                                            value={values.street} />
                                        { errors.street && touched.street && errors.street && 
                                            <small id="validationServer05Feedback" className="invalid-feedback">
                                                { errors.street && touched.street && errors.street }
                                            </small> 
                                        }
                                    </p>

                                    <p className="form-row form-row-wide">
                                        <label htmlFor="reg_billing_first_name">MailBox<span className="required">*</span></label>
                                        <input type="text" 
                                        className={`input-text  ${ errors.bp && touched.bp ?
                                             "input-format-error":"input-format"}`} name="bp" 
                                        id="bp" onChange={handleChange('bp')}
                                        onBlur={handleBlur('bp')}
                                            value={values.bp} />
                                        { errors.bp && touched.bp && errors.bp && 
                                            <small id="validationServer05Feedback" className="invalid-feedback">
                                                { errors.bp && touched.bp && errors.bp }
                                            </small> 
                                        }
                                    </p> 

                                    <b style={{ color: "white", textDecoration: "underline" }}>Login informations</b>
                                
                                    <p className="form-row form-row-wide">
                                        <label htmlFor="reg_billing_first_name">Login<span className="required">*</span></label>
                                        <input type="text" 
                                        className={`input-text  ${ errors.login && touched.login ?
                                             "input-format-error":"input-format"}`} name="login" 
                                        id="login" onChange={handleChange('login')}
                                        onBlur={handleBlur('login')}
                                            value={values.login} />
                                        { errors.login && touched.login && errors.login && 
                                            <small id="validationServer05Feedback" className="invalid-feedback">
                                                { errors.login && touched.login && errors.login }
                                            </small> 
                                        }
                                    </p>

                                    <p className="form-row form-row-wide">
                                        <label htmlFor="reg_billing_first_name">Password<span className="required">*</span></label>
                                        <span className="password-input"><input type={ showPassword ? "text" : "password" } 
                                        className={`input-text  ${ errors.password && touched.password ?
                                             "input-format-error":"input-format"}`} name="password" 
                                        id="password" onChange={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                            value={values.password} /><span 
                                            onClick={() => setShowPassword(() => !showPassword) }
                                             className="show-password-input"></span></span>
                                        { errors.password && touched.password && errors.password && 
                                            <small id="validationServer05Feedback" className="invalid-feedback">
                                                { errors.password && touched.password && errors.password }
                                            </small> 
                                        }
                                    </p>

                                
                                    <p className="form-row form-row-wide">
                                        <label htmlFor="reg_billing_first_name">Confirm password <span className="required">*</span></label>
                                        <span className="password-input">
                                            <input type={ showPasswordConfirm ? "text" : "password" }  
                                            className={`input-text 
                                                        ${ errors.passwordConfirmation && touched.passwordConfirmation ?
                                                        "input-format-error":"input-format"}`}
                                              name="passwordConfirmation" 
                                              id="passwordConfirmation" 
                                              onChange={handleChange('passwordConfirmation')}
                                              onBlur={handleBlur('passwordConfirmation')}
                                              value={values.passwordConfirmation} />
                                              <span onClick={() => setShowPasswordConfirm(() => !showPasswordConfirm) }
                                               className="show-password-input"></span></span>
                                              { errors.passwordConfirmation && touched.passwordConfirmation && 
                                              errors.passwordConfirmation && 
                                            <small id="validationServer05Feedback" className="invalid-feedback">
                                                { errors.passwordConfirmation && touched.passwordConfirmation &&
                                                 errors.passwordConfirmation }
                                            </small> 
                                        }
                                    </p>
                                    <div className="woocommerce-privacy-policy-text">
                                        <p>*note: Password must be 12 character long with use of special character.</p>
                                    </div>
                                    <label style={{ color: "white " }}>
                                        <Field type="checkbox"  onChange={handleChange('newsletter')}
                                              onBlur={handleBlur('newsletter')} name="newsletter" />
                                         Subscribe to the newsletter
                                    </label>

                                    <label style={{ color: "white " }}>
                                        <Field type="checkbox"  onChange={handleChange('2faActivated')}
                                              onBlur={handleBlur('2faActivated')}  name="2faActivated" />
                                         Enable two-factor authentication
                                    </label>

                                <p className="woocommerce-form-row form-row">
                                    {/* <input type="hidden" id="woocommerce-register-nonce" 
                                    name="woocommerce-register-nonce" value="d24e8dfa74" />
                                    <input type="hidden" name="_wp_http_referer" value="/my-account/" /> */}
                                    <button disabled={ (!dirty && !isValid) }  type="submit" className="woocommerce-Button woocommerce-button 
                                    button woocommerce-form-register__submit" name="register" 
                                    value="Register">Register</button>
                                </p>

                                
                                </Form>
                            )}
                        </Formik>

                        </div>

                    </div>

                    </div>
                            </div>
                        </div>
                        
                        <Footer />

                    </div>
                    {/* <div id="footer-outer" data-cols="4" data-custom-color="false" data-disable-copyright="true" data-matching-section-color="true" data-copyright-line="false" data-using-bg-img="false" data-bg-img-overlay="0.8" data-full-width="false" data-using-widget-area="false" data-link-hover="default">
                        
                            
                    </div> */}
                    </div>
        </div>
);
}

export default Myaccount;