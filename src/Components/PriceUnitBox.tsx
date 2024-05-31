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

    // const rateInit: any = null
    // let [ rate, setRate ] = useState(rateInit);

    const numberWithCommas = (x: any) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    useEffect(
        () => {

            console.log('unit changing')

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
            
            
                    if(data?.data.length > 0) {
            
                        // console.log("Unit change");
                        // console.log(unit);
                        setDefaultUnit(current => unit );
                        window.localStorage.setItem(
                            '_exchange_rate',
                            data?.data[0].exchangeRate.toString()
                        );
                        // setRate((crr: any) => data?.data[0].exchangeRate);
                        // console.log(data?.data[0].exchangeRate);
                        // console.log('New price');
                        // console.log(Number(price) * Number(data?.data[0].exchangeRate));
                        setPriceCopy( priecopy => Number((Number(price) * Number(data?.data[0].exchangeRate)).toFixed(2)) );
            
                    } 
                })();

            }

        }, [unit]
    );

    useEffect(
        () => {

            console.log('unitialisaion');

            let rate: any = window.localStorage.getItem('_exchange_rate');
            rate = Number(rate);

            if (unit !== '$' && unit !== 'USD' && ( rate === null || rate === undefined || rate === '') ) {
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
             
            
                    if(data?.data.length > 0) {
            
                        // console.log("Unit change");
                        // console.log(unit);
                        setDefaultUnit(current => unit );
                        // console.log(data?.data[0].exchangeRate);
                        // console.log('New price');
                        // console.log(Number(price) * Number(data?.data[0].exchangeRate));
                        setPriceCopy( priecopy => Number((Number(price) * Number(data?.data[0].exchangeRate)).toFixed(2)) );
            
                    } 
                })();
            } else {
                setDefaultUnit(current => unit );
                // console.log(data?.data[0].exchangeRate);
                // console.log('New price');
                // console.log(Number(price) * Number(data?.data[0].exchangeRate));
                setPriceCopy( priecopy => Number((Number(price) * Number(rate)).toFixed(2)) );
            }
        }, []
    )

    useEffect(
        () => {
            setPriceCopy(Number(price));

            let rate: any = window.localStorage.getItem('_exchange_rate');
            rate = Number(rate);

            if (unit !== '$' && unit !== 'USD' && ( rate === null || rate === undefined || rate === '') ) {
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
             
            
                    if(data?.data.length > 0) {
            
                        // console.log("Unit change");
                        // console.log(unit);
                        setDefaultUnit(current => unit );
                        // console.log(data?.data[0].exchangeRate);
                        // console.log('New price');
                        // console.log(Number(price) * Number(data?.data[0].exchangeRate));
                        setPriceCopy( priecopy => Number((Number(price) * Number(data?.data[0].exchangeRate)).toFixed(2)) );
            
                    } 
                })();
            } else {
                setDefaultUnit(current => unit );
                // console.log(data?.data[0].exchangeRate);
                // console.log('New price');
                // console.log(Number(price) * Number(data?.data[0].exchangeRate));
                setPriceCopy( priecopy => Number((Number(price) * Number(rate)).toFixed(2)) );
            }

        }, 
        [price]
    )
    return ( 
        <>{ unit } {numberWithCommas(priceCopy)}</>
    ); 
}

export default PriceUnitBox