import React from "react"; 
import {
  useLocation
} from "react-router-dom"; 

export default function useCustomLocation() {
  let location = useLocation();
 
  let locations: Array<string>;

  React.useEffect(() => {
    console.log(location);
 

    locations = location.pathname.split('\/');

    locations = locations.map(
      (location) => decodeURI(location)
    );

    console.log(locations);
 

    
  }, [location]);
}