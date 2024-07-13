import { FC, useEffect, useState } from 'react'; 
import {
    Outlet
} from "react-router-dom"; 
import { useAppSelector } from '../../../Hooks/customSelector';
import { RootState } from '../../../Redux/store';
 



const Dashboard: FC = () => {  
   
    const user = useAppSelector((state: RootState) => state.users.user );

    

    return (
        <> 
            <p>
                Hello <strong>{ user?.nomClient }</strong> 
                (not <strong>{ user?.nomClient }</strong>? <a href="https://www.lapotencielle.com/my-account/customer-logout/?_wpnonce=5d70ac8126">Log out</a>)</p>
            <p>
            From your account dashboard you can view your <a href="https://www.lapotencielle.com/my-account/orders/">recent orders</a>, manage your <a href="https://www.lapotencielle.com/my-account/edit-address/">shipping and billing addresses</a>, and <a href="https://www.lapotencielle.com/my-account/edit-account/">edit your password and account details</a>.</p>
            
        </>
    );
}

export default Dashboard