import { FC, useEffect, useState } from 'react'; 
import {
    Outlet
} from "react-router-dom";

const Order: FC = () => {  
   
    
    return (
        <> 
           <p>
                <strong>
                    No order for the moment
                </strong>
           </p>
        </>
    );
}

export default Order