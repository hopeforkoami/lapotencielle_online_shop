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

const Myaccount: FC = () => {   
    
    let location = useLocation(); 
    const user = useAppSelector((state: RootState) => state.users.user );
    const dispatch = useAppDispatch();
    const myaccountService = new MyaccountService();

    let [ loading, setLoading ] = useState(false);
 
    return (
        <>
            <div id="ajax-content-wrap">
                <br />
		            <div className="breadcrumb">
			            <span><span><a href="/">Home</a></span> / 
                        <span className="breadcrumb_last" aria-current="page">My account</span></span>
                    </div>
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
                                            .required(`${'You must accept the terms and conditions'}`),
                                        password: yup
                                            .string()
                                            .required(`${'Ce champ est obligatoire'}`)
                                    })
                                }
                                // innerRef={formRef}
                                onSubmit={async (
                                    values 
                                ) => {
                                        console.log(values); 
                                        setLoading(true);
                                        myaccountService.login(values).then(async function (response: any) {
                                            console.log(response); 
                                            if (response.data.statut === 200) {
                                                console.log('Logged user');
                                                dispatch( setUser( response.data.data[0] ) );

                                                window.localStorage.setItem(
                                                    '__user',
                                                    JSON.stringify(response.data.data[0])
                                                );
                
                                                setLoading(false); 
                
                                                window.location.href = "/";
                                            }
                                        })
                                          .catch(function (error: any) {
                                            console.log(error); 
                                        });
                                    }}
                                >
                                    {({ dirty, errors, touched, isValid, handleChange, handleBlur, handleSubmit, values }) => (
                                    <Form  className="woocommerce-form woocommerce-form-login login" method="post">

                                
                                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                    <label htmlFor="username">Username or email address&nbsp;<span className="required">*</span></label>
                                    <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" 
                                        name="username" id="username" autoComplete="username" 
                                            onChange={handleChange('login')}
                                                onBlur={handleBlur('login')}
                                                    value={values.login} />			</p>
                                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                    <label htmlFor="password">Password&nbsp;<span className="required">*</span></label>
                                    <span className="password-input">
                                    <input className="woocommerce-Input woocommerce-Input--text input-text" 
                                    type="password" name="password" id="password" onChange={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                        value={values.password}
                                    autoComplete="current-password" /><span className="show-password-input"></span></span>
                                </p>

                                
                                <p className="form-row">
                                    <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                                        <input className="woocommerce-form__input woocommerce-form__input-checkbox"
                                        name="rememberme" type="checkbox" id="rememberme" value="forever" /> 
                                        <span>Remember me</span>
                                    </label>
                                    <input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" 
                                    value="50f6b19b53" /><input type="hidden" name="_wp_http_referer" value="/my-account/" />				
                                    <button type="submit" className="woocommerce-button button woocommerce-form-login__submit" 
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

                            <form method="post" className="woocommerce-form woocommerce-form-register register">

                                    <p className="form-row form-row-wide">
                                        <label htmlFor="reg_billing_first_name">Name<span className="required">*</span></label>
                                        <input type="text" className="input-text" name="billing_first_name" 
                                        id="reg_billing_first_name" value="" />
                                    </p>
                        
                                
                                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                        <label htmlFor="reg_username">Username&nbsp;<span className="required">*</span>
                                        </label>
                                        <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="username" id="reg_username" autoComplete="username" value="" />
                                    </p>

                                
                                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                    <label htmlFor="reg_email">Email address&nbsp;<span className="required">*</span></label>
                                    <input type="email" className="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" 
                                    autoComplete="email" value="" />			</p>

                                
                                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                        <label htmlFor="reg_password">Password&nbsp;<span className="required">*</span></label>
                                        <span className="password-input">
                                        <input type="password" className="woocommerce-Input woocommerce-Input--text input-text" 
                                        name="password" id="reg_password" autoComplete="new-password" />
                                            <span className="show-password-input"></span></span>
                                    </p>

                                
                                    <p className="form-row form-row-wide">
                            <label htmlFor="reg_password2">Confirm password <span className="required">*</span></label>
                            <span className="password-input">
                                <input type="password" className="input-text woocommerce-Input woocommerce-Input--text input-text" name="password2" id="reg_password2" value="" /><span className="show-password-input"></span></span>
                        </p>
                        <div className="woocommerce-privacy-policy-text"><p>*note: Password must be 12 character long with use of special character.</p>
                    </div>
                                <p className="woocommerce-form-row form-row">
                                    <input type="hidden" id="woocommerce-register-nonce" 
                                    name="woocommerce-register-nonce" value="d24e8dfa74" />
                                    <input type="hidden" name="_wp_http_referer" value="/my-account/" />
                                    <button type="submit" className="woocommerce-Button woocommerce-button 
                                    button woocommerce-form-register__submit" name="register" 
                                    value="Register">Register</button>
                                </p>

                                
                            </form>

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
        </>
);
}

export default Myaccount;