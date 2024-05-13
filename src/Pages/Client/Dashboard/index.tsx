import { FC, useEffect, useState } from 'react'; 
import {
    Outlet
} from "react-router-dom"; 
 



const Dashboard: FC = () => {  
   
    
    return (
        <> 
            <p>
                Hello <strong>prokode</strong> (not <strong>prokode</strong>? <a href="https://www.lapotencielle.com/my-account/customer-logout/?_wpnonce=5d70ac8126">Log out</a>)</p>
            <p>
            From your account dashboard you can view your <a href="https://www.lapotencielle.com/my-account/orders/">recent orders</a>, manage your <a href="https://www.lapotencielle.com/my-account/edit-address/">shipping and billing addresses</a>, and <a href="https://www.lapotencielle.com/my-account/edit-account/">edit your password and account details</a>.</p>
            
        </>
    );
}

export default Dashboard