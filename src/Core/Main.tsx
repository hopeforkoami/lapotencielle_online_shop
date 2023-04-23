import { FC, useEffect } from 'react';
import Header from '../Layouts/Header'; 

import {
    Outlet
} from "react-router-dom"; 

const Main: FC = () => {  
    
    return (
        <> 
            <Header />
            <Outlet />
     
        </>
    );
}

export default Main