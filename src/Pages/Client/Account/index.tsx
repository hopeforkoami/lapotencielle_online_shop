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

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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
        { clientLoading || client === null ? <h4><b>Loading...</b></h4> : 
        <div className='woocommerce-account'>

    <Tabs selectedTabClassName={'tab-active'} >

        <TabList className={'tab-list'} >
            <Tab>Security</Tab>
            <Tab>Account</Tab> 
        </TabList>



        <TabPanel>

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
                                        `${"Password must be 12 characters long with the use of a special character"}`
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
                                <Form className="woocommerce-EditAccountForm edit-account" action="" method="post">

                    <fieldset>
                            <legend>Password change</legend>

                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                <label htmlFor="password_current">Current password (leave blank to leave unchanged)</label>
                                <span className="password-input">
                                    <input type={ showOldPassword ? "text" : "password" } 
                                            className={`woocommerce-Input woocommerce-Input--password 
                                                input-text 
                                                ${ errors.old_password && touched.old_password ?
                                                "input-format-error" : ""}`} name="old_password" 
                                            id="old_password" onChange={handleChange('old_password')}
                                            onBlur={handleBlur('old_password')}
                                                value={values.old_password} /><span 
                                                onClick={() => setShowOldPassword(() => (!showOldPassword)) }
                                                className="show-password-input"></span></span>
                                            { 
                                                errors.old_password && touched.old_password && errors.old_password && 
                                                <small id="validationServer05Feedback" className="invalid-feedback">
                                                    { errors.old_password && touched.old_password && errors.old_password }
                                                </small> 
                                            }
                            </p>
                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                <label htmlFor="password_1">New password (leave blank to leave unchanged)</label>
                                <span className="password-input">
                                    <input type={ showPassword ? "text" : "password" } 
                                            className={`woocommerce-Input 
                                                woocommerce-Input--password input-text 
                                                ${ errors.password && touched.password ?
                                                "input-format-error" : "" }`} name="password" 
                                            id="password_1" onChange={ handleChange('password') }
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
                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                <label htmlFor="password_2">Confirm new password</label>
                                <span className="password-input">
                                    <input type={ showPasswordConfirm ? "text" : "password" } 
                                            className={`woocommerce-Input woocommerce-Input--password 
                                                input-text ${ errors.passwordConfirmation && touched.passwordConfirmation ?
                                                "input-format-error" : "" }`} name="passwordConfirmation" 
                                            id="passwordConfirmation" 
                                            onChange={handleChange('passwordConfirmation')}
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
                        </fieldset>
                        <div className="clear"></div>

                        <p>
                            {/* <input type="hidden" id="save-account-details-nonce" name="save-account-details-nonce"
                            value="c29daa5f32" />
                            <input type="hidden" name="_wp_http_referer" value="/my-account/edit-account/" />		 */}
                            <button type="submit" className="woocommerce-Button button" name="save_account_details" 
                            value="Save changes">Save changes {
                                loading && <i style={{color: "white" }} className="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>
                            }</button>
                            {/* <input type="hidden" name="action" value="save_account_details" /> */}
                        </p>

                    </Form>
                )}
            </Formik>
        </TabPanel>

        <TabPanel>

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
                                    contactClient: '',
                                    newsletter: '',
                                    '2faActivated': false,
                                    email: '' 
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
                                    contactClient: yup 
                                        .string()
                                        .required(`${'This field is required'}`), 
                                    email: yup 
                                        .string()
                                        .email('Mail non valide')
                                        .required(`${'This field is required'}`)
                                        .test('checkEmailUnique', "Email already used", async value =>
                                            clientService.verifyEmail(value ?? '')
                                            .then((res) => { 
                                                console.log(res);
                                                return !res.data.data.usable ? value === client?.emailClient ? true : res.data.data.usable : res.data.data.usable;
                                            })
                                            .catch((e) => {
                                                console.log(e);
                                                return false;
                                            })
                                        ) 
                                })
                            } 
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
                                <Form className="woocommerce-EditAccountForm edit-account" action="" method="post">

        
                <p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
                    <label htmlFor="account_first_name">First name&nbsp;<span className="required">*</span></label>
                    <input type="text" id="account_first_name" className={`input-text 
                        woocommerce-Input woocommerce-Input--text
                         ${ errors.prenomClient && touched.prenomClient ? "input-format-error":""}`} 
                         name="prenomClient" 
                        onChange={handleChange('prenomClient')}
                        onBlur={handleBlur('prenomClient')}
                            value={values.prenomClient} />
                        { errors.prenomClient && touched.prenomClient && errors.prenomClient && 
                            <small id="validationServer05Feedback" className="invalid-feedback">
                                { errors.prenomClient.toString() }
                            </small> 
                        }
                </p>

                <p className="woocommerce-form-row woocommerce-form-row--last form-row form-row-last">
                    <label htmlFor="account_last_name">Middle name&nbsp;<span className="required">*</span></label>
                    <input type="text" 
                   className={`woocommerce-Input woocommerce-Input--text input-text ${ errors.middleNameClient &&
                    touched.middleNameClient ? "input-format-error":""}`} name="nomClient" 
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

                <div className="clear"></div>

                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <label htmlFor="account_last_name">Last name&nbsp;<span className="required">*</span></label>
                    <input type="text" 
                   className={`woocommerce-Input woocommerce-Input--text input-text ${ errors.nomClient &&
                    touched.nomClient ? "input-format-error":""}`} name="nomClient" 
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
                <div className="clear"></div>

                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <label htmlFor="account_email">Email address&nbsp;<span className="required">*</span></label>
                    <input type="email" className={` woocommerce-Input woocommerce-Input--email input-text  
                        ${ errors.email && touched.email ? "input-format-error": ""}`} name="email" 
                                    id="email" onChange={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                        value={values.email} />
                                    { errors.email && touched.email && errors.email && 
                                        <small id="validationServer05Feedback" className="invalid-feedback">
                                            { errors.email.toString() }
                                        </small> 
                                    }
                </p>

                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <label htmlFor="account_email">Contact &nbsp;<span className="required">*</span></label>
                    <input type="text" className={` woocommerce-Input woocommerce-Input--email input-text  
                        ${ errors.contactClient && touched.contactClient ? 
                            "input-format-error": ""}`} name="contactClient" 
                                    id="email" onChange={handleChange('contactClient')}
                                    onBlur={handleBlur('contactClient')}
                                        value={values.contactClient} />
                                    { errors.contactClient && touched.contactClient && errors.contactClient && 
                                        <small id="validationServer05Feedback" className="invalid-feedback">
                                            { errors.contactClient.toString() }
                                        </small> 
                                    }
                </p>

                <label style={{ color: "white " }}>
                                        <Field type="checkbox"  onChange={handleChange('newsletter')}
                                            onBlur={handleBlur('newsletter')} name="newsletter" />
                                        Subscribe to the newsletter
                                </label> 
                                <br />  
                                <label style={{ color: "white " }}>
                                        <Field type="checkbox"  onChange={handleChange('2faActivated')}
                                            onBlur={handleBlur('2faActivated')}  name="2faActivated" />
                                        Enable two-factor authentication
                                </label>
                
                <div className="clear"></div>


                <p>
                    {/* <input type="hidden" id="save-account-details-nonce" name="save-account-details-nonce"
                    value="c29daa5f32" />
                    <input type="hidden" name="_wp_http_referer" value="/my-account/edit-account/" />		 */}
                    <button type="submit" className="woocommerce-Button button" name="save_account_details" 
                    value="Save changes">Save changes {
                        loading && <i style={{color: "white" }} className="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>
                    }</button>
                    {/* <input type="hidden" name="action" value="save_account_details" /> */}
                </p>

                    </Form>
                )}
            </Formik>
                 
        </TabPanel> 

    </Tabs>

    </div> }
    </>
    );
}

export default Account