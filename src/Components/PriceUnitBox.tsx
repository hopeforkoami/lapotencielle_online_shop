import { FC, useEffect, useState } from 'react';
import Product from '../Models/Product';
import { Link
} from "react-router-dom";
import * as Utils from '../Utils';

import { useAppDispatch, useAppSelector } from '../Hooks/customSelector';
import { addProduct, removeProduct, updateProductQty, updateProducts } from '../Redux/Reducers/storeReducer'; 
import { RootState } from '../Redux/store';


import axios from 'axios';
// const https = require('https'); 

//Props interface
interface PriceUnitBoxProps {
    product: any,
    productListLength: number
} 

const PriceUnitBox: FC<{ price: any }> = ( { price} ) => {

    const store = useAppSelector((state) => state.store)
    const dispatch = useAppDispatch();
    const unit = useAppSelector((state: RootState) => state.units.unit );
    
    const [ defaultUnit, setDefaultUnit ] = useState("$");
    const [ priceCopy, setPriceCopy ] = useState(price); 

    const getRateOfExchnge = async() => { 

        var myHeaders = new Headers();
        myHeaders.append("apikey", "sGsiswQDg397FRbY0EIW176O1tKIS55R");

        var requestOptions: RequestInit = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${unit}&from=USD&amount=1`, requestOptions);
        const data = await response.json();

        console.log(data);

        if(data?.result) {
            setPriceCopy( Number(price) * Number(data?.result) );
        }

        
 

        // const agent = new https.Agent({  
        //     rejectUnauthorized: false
        // });


        // const data = await axios.get(`http://api.exchangeratesapi.io/latest/convert?access_key=9a342acc48117180614501bce922d17e&from=USD&to=${unit}&amount=1`, { httpsAgent: agent });


        //await fetch(`http://api.exchangeratesapi.io/latest/convert?access_key=9a342acc48117180614501bce922d17e&from=USD&to=${unit}&amount=1`);

        // console.log(data);
 
    }


    useEffect(
        () => {

            if (defaultUnit !== unit) {
                console.log("Unit change");
                setDefaultUnit(unit);
                getRateOfExchnge();
            }

        }, [unit]
    );

    return ( 
        <>{ unit ? unit : defaultUnit } {priceCopy}</>
    ); 
}

export default PriceUnitBox