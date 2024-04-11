import { FC, useEffect } from 'react';
import Header from '../Layouts/Header'; 
import {
    Outlet
} from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../Hooks/customSelector'; 
import { setUser } from '../Redux/Reducers/userReducer';
import { RootState } from '../Redux/store';
import { updateProducts } from '../Redux/Reducers/storeReducer';

const Main: FC = () => {  
    const store = useAppSelector((state) => state.store);
    const user = useAppSelector((state: RootState) => state.users.user );
    const dispatch = useAppDispatch();

    useEffect(
        () => {
            let user  = window.localStorage.getItem('__user');
            if (user !== null) { 
                dispatch( setUser( JSON.parse(user) ) );
            }
            let storeProducts = window.localStorage.getItem('_store_products');
            if (storeProducts !== null) { 
                dispatch( updateProducts( JSON.parse(storeProducts) ) );
            }
        }, []
    )
    
    return (
        <> 
            <Header />
            <Outlet />
     
        </>
    );
}

export default Main