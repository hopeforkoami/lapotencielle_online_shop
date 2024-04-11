import React from "react"; 
import {
  useLocation
} from "react-router-dom"; 

import { useAppDispatch, useAppSelector } from '../Hooks/customSelector';
import { changeCurrentPath, changeCurrentRoute } from '../Redux/Reducers/routeReducer'

export default function useCustomLocation() {
  let location = useLocation();

  const routes = useAppSelector((state) => state.routes)
  const dispatch = useAppDispatch();
 
  let locations: Array<string>;

  React.useEffect(() => {
    console.log(location);

    dispatch(changeCurrentPath(location.pathname));
 
    locations = location.pathname.split('\/');

    locations = locations.map(
      (location) => decodeURI(location)
    );

    console.log(locations);
      
    dispatch(changeCurrentRoute(locations));

    
  }, [location]);
}