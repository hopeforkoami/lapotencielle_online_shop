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
    
    let [ defaultUnit, setDefaultUnit ] = useState("$");
    let [ priceCopy, setPriceCopy ] = useState(Number(price)); 

    const getRateOfExchnge = async function() { 

        var myHeaders = new Headers();
        myHeaders.append("apikey", "sGsiswQDg397FRbY0EIW176O1tKIS55R");

        var requestOptions: RequestInit = {
            method: 'GET',
            redirect: 'follow',
            // headers: myHeaders
        };

        const response = await fetch(`https://lapotnewapi2.nogdevhouse.com/api/currency/usdrate?currency=${ unit.toLowerCase() }`, requestOptions);
        const data = await response.json();

        console.log(data);

        console.log(data?.data.length);

        if(data?.data.length > 0) {

            console.log("Unit change");
            console.log(unit);
            setDefaultUnit(current => unit );
            console.log(data?.data[0].exchangeRate);
            console.log('New price');
            console.log(Number(price) * Number(data?.data[0].exchangeRate));
            setPriceCopy( priecopy => Number(price) * Number(data?.data[0].exchangeRate) );

        } 

    }


    useEffect(
        () => {

            if (defaultUnit !== unit) { 
                // getRateOfExchnge();
                (async function anyNameFunction(){ 

                    var myHeaders = new Headers();
                    myHeaders.append("apikey", "sGsiswQDg397FRbY0EIW176O1tKIS55R");
            
                    var requestOptions: RequestInit = {
                        method: 'GET',
                        redirect: 'follow',
                        // headers: myHeaders
                    };
            
                    const response = await fetch(`https://lapotnewapi2.nogdevhouse.com/api/currency/usdrate?currency=${ unit.toLowerCase() }`, requestOptions);
                    const data = await response.json();
            
                    console.log(data);
            
                    console.log(data?.data.length);
            
                    if(data?.data.length > 0) {
            
                        console.log("Unit change");
                        console.log(unit);
                        setDefaultUnit(current => unit );
                        console.log(data?.data[0].exchangeRate);
                        console.log('New price');
                        console.log(Number(price) * Number(data?.data[0].exchangeRate));
                        setPriceCopy( priecopy => Number((Number(price) * Number(data?.data[0].exchangeRate)).toFixed(2)) );
            
                    } 
                })();

            }

        }, [unit]
    );

    useEffect(
        () => {
            if (unit !== '$' && unit !== 'USD') {
                (async function anyNameFunction(){ 

                    var myHeaders = new Headers();
                    myHeaders.append("apikey", "sGsiswQDg397FRbY0EIW176O1tKIS55R");
            
                    var requestOptions: RequestInit = {
                        method: 'GET',
                        redirect: 'follow',
                        // headers: myHeaders
                    };
            
                    const response = await fetch(`https://lapotnewapi2.nogdevhouse.com/api/currency/usdrate?currency=${ unit.toLowerCase() }`, requestOptions);
                    const data = await response.json();
            
                    console.log(data);
            
                    console.log(data?.data.length);
            
                    if(data?.data.length > 0) {
            
                        console.log("Unit change");
                        console.log(unit);
                        setDefaultUnit(current => unit );
                        console.log(data?.data[0].exchangeRate);
                        console.log('New price');
                        console.log(Number(price) * Number(data?.data[0].exchangeRate));
                        setPriceCopy( priecopy => Number((Number(price) * Number(data?.data[0].exchangeRate)).toFixed(2)) );
            
                    } 
                })();
            }
        }, []
    )

    return ( 
        <span>{ unit } {priceCopy}</span>
    ); 
}

export default PriceUnitBox