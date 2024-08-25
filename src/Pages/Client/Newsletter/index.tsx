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


const Newsletter: FC = () => {  

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

            <br />
            <p>
                You can subscribe or unubscribe from our newsletter
            </p>
            {
                client !== null && client !== undefined ? 
                <button onClick={() => {
                    
                    setLoading(true);  
                    clientService.updateClient(
                        {   
                            id: user?.id, 
                            nomClient: user.nomClient,
                            middleNameClient:  client.middleNameClient,
                            prenomClient: client.prenomClient, 
                            contactClient: client.contactClient,
                            newsletter: client.newsletter == true ? false : true,
                            '2faActivated': client['twofa'],
                            email: client.emailClient
                        }
                    ).then(async function (response: any) {
                            console.log(response); 
                        if (response.data === 'success') {
                            alert('Information updated successfully!'); 
                            setClient( (us: any) => null );
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

                }} type="submit" className="woocommerce-Button button" name="save_account_details" 
                            value=""> { loading || (client['newsletter'] == true ? 'Unsubscribe' : 'Subscribe' )  } {
                    loading && <i style={{color: "white" }} className="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>
                } </button> : <></>
            } 
            <br />
            <br />
    </div> }
    </>
    );
}

export default Newsletter