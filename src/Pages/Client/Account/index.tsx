// import './style.css';
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

var countries = require('country-data-list').countries;


const Account: FC = () => {  

    let location = useLocation(); 
    const user = useAppSelector((state: RootState) => state.users.user );
    const dispatch = useAppDispatch();
    const clientService = new ClientService();

   
    let [ loading, setLoading ] = useState(false);  

    const clientInit: any  = null;
    let [ client, setClient ] = useState(clientInit);
    let [ clientLoading, setClientLoading ] = useState(false);

    let [
        showOldPassword, setShowOldPassword
    ] = useState(false);

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

    const getClient = () => {

        setClientLoading(true);

        clientService.getClient( user?.id ).then(async function (response: any) {
            console.log(response); 
            if (response.status === 200) {
               setClient((client: any) => response.data);
               setClientLoading(false);
            } else {
                setMessage(() => response.data.message);
                setClientLoading(false);
            }
        })
          .catch(function (error: any) {
            console.log(error); 
            setClientLoading(false);
        });

    }

    useEffect(
        () => {
            getClient();
        }, []
    );
   
    
    return (
        <>
        { clientLoading || client === null ? <h4><b>Loading...</b></h4> : <div className='woocommerce-account'>
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

                        <h2>Security</h2>
                        <div className='alert-box'>

                        </div>
                        <Formik
                            initialValues={ 
                                {
                                    old_password:'',
                                                        password:'',
                                                        passwordConfirmation: ''
                            }}

                            validationSchema={
                                yup.object().shape({
                                    
                                    old_password: yup
                                    .string()
                                    .required(`${'This field is required'}`),
                                password: yup
                                    .string()
                                    .required(`${'This field is required'}`)
                                    .matches(
                                        /^(?=.*[!@#\$%\^&\*])(?=.{12,})/,
                                        `${"Le mot de passe doit comporter 12 caractères avec l'utilisation d'un caractère spécial"}`
                                    ),
                                passwordConfirmation: yup.string()
                                    .oneOf([yup.ref('password'), null], 'Passwords must match')
                                    .required(`${'This field is required'}`)
                                })
                            }
                            // innerRef={formRef}
                            onSubmit={async (
                                values 
                            ) => {
                                    setMessage(() => null);
                                    console.log(values); 
                                    setLoading(true);
                                    clientService.changePassword({
                                        id: user?.id,
                                        ancienPass: values.old_password, 
                                        newPass: values.password
                                    }).then(async function (response: any) {
                                        console.log(response); 
                                        if (response.data.statut === 200) {
                                            alert('Password changed with success, New login process is required.'); 
                                            window.localStorage.removeItem('__user');
                                            window.location.href = "/myaccount";
                                            window.location.reload(); 
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
                                   
                            <p className="form-row form-row-wide">
                                    <label htmlFor="reg_billing_first_name">Old password<span className="required">*</span></label>
                                    <span className="password-input"><input type={ showOldPassword ? "text" : "password" } 
                                    className={`input-text  ${ errors.old_password && touched.old_password ?
                                         "input-format-error":"input-format"}`} name="old_password" 
                                    id="old_password" onChange={handleChange('old_password')}
                                    onBlur={handleBlur('old_password')}
                                        value={values.old_password} /><span 
                                        onClick={() => setShowOldPassword(() => (!showOldPassword)) }
                                         className="show-password-input"></span></span>
                                    { errors.old_password && touched.old_password && errors.old_password && 
                                        <small id="validationServer05Feedback" className="invalid-feedback">
                                            { errors.old_password && touched.old_password && errors.old_password }
                                        </small> 
                                    }
                            </p>


                            <p className="form-row form-row-wide">
                                    <label htmlFor="reg_billing_first_name">New password<span className="required">*</span></label>
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
                                    <label htmlFor="reg_billing_first_name">New password confirmation<span className="required">*</span></label>
                                    <span className="password-input"><input type={ showPasswordConfirm ? "text" : "password" } 
                                    className={`input-text  ${ errors.passwordConfirmation && touched.passwordConfirmation ?
                                         "input-format-error":"input-format"}`} name="passwordConfirmation" 
                                    id="passwordConfirmation" onChange={handleChange('passwordConfirmation')}
                                    onBlur={handleBlur('passwordConfirmation')}
                                        value={values.passwordConfirmation} /><span 
                                        onClick={() => setShowPasswordConfirm(() => !showPasswordConfirm) }
                                         className="show-password-input"></span></span>
                                    { errors.passwordConfirmation && touched.passwordConfirmation && errors.passwordConfirmation && 
                                        <small id="validationServer05Feedback" className="invalid-feedback">
                                            { errors.passwordConfirmation && touched.passwordConfirmation && errors.passwordConfirmation }
                                        </small> 
                                    }
                            </p>
                            
                            <p className="form-row"> 
                                <button  type="submit" className="woocommerce-button button woocommerce-form-login__submit" 
                                name="login" value="Log in">Change password
                                {
                                    loading && <i style={{color: "black" }} className="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>
                                }
                                </button>
                            </p>
                            
                            {/* <p className="woocommerce-LostPassword lost_password">
                                <a href="#">Forgot your Password?</a>
                            </p> */}

                            
                            </Form>
        )}
    </Formik>

                    </div>

                    <div className="u-column2 col-2">

                        <h2>Personnal info</h2>
                         <Formik
                            initialValues={ 
                                client !== null && client !== "" ? 
                                {
                                    ...client,
                                    '2faActivated': client.twofa,
                                    email: client.emailClient
                                } :
                                 {
                                    nomClient: '',
                                    middleNameClient:  '',
                                    prenomClient: '',
                                    // billAddress: '',
                                    contactClient: '',
                                    newsletter: '',
                                    '2faActivated': false,
                                    email: '',
                                    // paysClient: '',
                                    // login: '',
                                    // password: '',
                                    // passwordConfirmation: '',                                       
                                    // town: '',
                                    // street: '',
                                    // bp: ''
                            }}

                            validationSchema={
                                yup.object().shape({

                                    nomClient: yup 
                                        .string()
                                        .required(`${'This field is required'}`),
                                    middleNameClient:  yup 
                                        .string() ,
                                    prenomClient: yup 
                                        .string()
                                        .required(`${'This field is required'}`),
                                    // billAddress: yup 
                                    //     .string(),
                                    contactClient: yup 
                                        .string()
                                        .required(`${'This field is required'}`),
                                    // newsletter:  yup 
                                    //     .string()
                                    //     .required(`${'This field is required'}`),
                                    // '2faActivated': yup 
                                    //     .boolean(),
                                    email: yup 
                                        .string()
                                        .email('Mail non valide')
                                        .required(`${'This field is required'}`)
                                        .test('checkEmailUnique', "Email already used", async value =>
                                            clientService.verifyEmail(value ?? '')
                                            .then((res) => { 
                                                console.log(res);
                                                return !res.data.data.usable ?  value === client?.emailClient ? true : res.data.data.usable : res.data.data.usable;
                                            })
                                            .catch((e) => {
                                                console.log(e);
                                                return false;
                                            })
                                        ),
                                    // paysClient: yup 
                                    //     .string()
                                    //     .required(`${'This field is required'}`),
                                    // login: yup 
                                    //     .string()
                                    //     .required(`${'This field is required'}`)
                                    //     .test('checkLoginUnique', "Login already used", async value =>
                                    //         clientService.verifyLogin(value ?? '')
                                    //         .then((res) => { 
                                    //             console.log(res);
                                    //             return  res.data.data.usable;
                                    //         })
                                    //         .catch((e) => {
                                    //             console.log(e);
                                    //             return false;
                                    //         })
                                    //     ),
                                    // password: yup
                                    //     .string()
                                    //     .required(`${'This field is required'}`)
                                    //     .matches(
                                    //         /^(?=.*[!@#\$%\^&\*])(?=.{12,})/,
                                    //         `${"Le mot de passe doit comporter 12 caractères avec l'utilisation d'un caractère spécial"}`
                                    //     ),
                                    // passwordConfirmation: yup.string()
                                    //     .oneOf([yup.ref('password'), null], 'Passwords must match')
                                    //     .required(`${'This field is required'}`),
                                    // town: yup
                                    //     .string()
                                    //     .required(`${'This field is required'}`),
                                    // street: yup
                                    //     .string()
                                    //     .required(`${'This field is required'}`),
                                    // bp: yup
                                    //     .string()
                                    //     .required(`${'This field is required'}`),
                                })
                            }
                            // innerRef={formRef}
                            onSubmit={async (
                                values 
                            ) => {

                                    console.log(values);

                                    setLoading(true); 

                                    clientService.updateClient(
                                        {   
                                            id: user?.id,
                                            nomClient: values.nomClient,
                                            middleNameClient:  values.middleNameClient,
                                            prenomClient: values.prenomClient, 
                                            contactClient: values.contactClient,
                                            newsletter: values.newsletter,
                                            '2faActivated': values['2faActivated'],
                                            email: values.email
                                        }
                                    ).then(async function (response: any) {
                                            console.log(response); 
                                        if (response.data === 'success') {
                                            alert('Information updated successfully!'); 
                                            getClient();
                                            setLoading(false);
                                        } else {
                                            setMessage(() => response.data.message);
                                            setLoading(false);
                                        }   
                                    }).catch(function (error: any) {
                                            console.log(error); 
                                            setLoading(false); 
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
                                            { errors.prenomClient.toString() }
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
                                            { errors.middleNameClient.toString() }
                                        </small> 
                                    }
                                </p>

                                <p className="form-row form-row-wide">
                                    <label htmlFor="reg_billing_first_name">Name<span className="required">*</span></label>
                                    <input type="text" className={`input-text  ${ errors.nomClient &&
                                         touched.nomClient ? "input-format-error":"input-format"}`} name="nomClient" 
                                    id="nomClient" onChange={handleChange('nomClient')}
                                    onBlur={handleBlur('nomClient')}
                                        value={values.nomClient} />
                                    
                                    { 
                                        errors.nomClient && touched.nomClient && errors.nomClient && 
                                        <small id="validationServer05Feedback" className="invalid-feedback">
                                            { errors.nomClient.toString() }
                                        </small> 
                                    }
                                </p>

                                <p className="form-row form-row-wide">
                                    <label htmlFor="reg_billing_first_name">Email address<span className="required">*</span></label>
                                    <input type="email" 
                                    className={`input-text  ${ errors.email && touched.email ? "input-format-error":"input-format"}`} name="email" 
                                    id="email" onChange={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                        value={values.email} />
                                    { errors.email && touched.email && errors.email && 
                                        <small id="validationServer05Feedback" className="invalid-feedback">
                                            { errors.email.toString() }
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
                                            { errors.contactClient.toString() }
                                        </small> 
                                    }
                                </p>

                                {/* 
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
                                        <label htmlFor="reg_billing_first_name">Username<span className="required">*</span></label>
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
                                */}

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
                                    <button disabled={ (!dirty && !isValid) }  type="submit" className="woocommerce-Button woocommerce-button 
                                    button woocommerce-form-register__submit" name="register" 
                                    value="Register">Change information{
                                        loading && <i style={{color: "black" }} className="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>
                                    }</button>
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
    </div> }
    </>
    );
}

export default Account