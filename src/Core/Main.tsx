import { FC, useEffect } from 'react';
import Header from '../Layouts/Header'; 
import {
    Outlet
} from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../Hooks/customSelector'; 
import { setUser } from '../Redux/Reducers/userReducer';
import { RootState } from '../Redux/store';

const Main: FC = () => {  
    const store = useAppSelector((state) => state.store);
    const user = useAppSelector((state: RootState) => state.users.user );
    const dispatch = useAppDispatch();

    useEffect(
        () => {
            let user  = window.localStorage.getItem('__user');
            if (user !== null) { 
                dispatch( setUser( user ) );
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