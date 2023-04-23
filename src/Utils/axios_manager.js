import * as axios from 'axios';
import * as Utils from "./index"; 
//Alert
// import Alert from '../Components/Alert';
// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; 

const axiosInstance = axios.create({
    baseURL: Utils.api_url,
    headers: {}
});


// Request interception
axiosInstance.interceptors.request.use(
    async function (config) {
        console.log('Request intercepted');
        // Do something before request is sent
        // const user  = await Utils.getData('user');
        // if (user != null  && user != undefined) {
        //     // console.log(user);
        //     config.headers['Authorization'] = 'Bearer ' + user.token;
        // }
        return config;
      }, function (error) {
          console.log(error.response);
        // Do something with request error
        return Promise.reject(error);
    }
);

// Response Interception
axiosInstance.interceptors.response.use(
    function (response) {
        console.log("Response intercepted");
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {

        const status = error.response.status;

        if(status === 0) {
            // confirmAlert({
            //     overlayClassName: "alert-overlay",
            //     customUI: ({ onClose }) => {
            //       return (
            //             <Alert 
            //                 alert={{
            //                     type: 'error',
            //                     title: 'Erreur',
            //                     message: 'Vérifiez votre connexion internet.',
            //                     actionText: 'Ok',
            //                     action: () => {
            //                         onClose();
            //                     }
            //                 }}
            //             />
            //       );
            //     }
            // });
        } else {
            // confirmAlert({
            //     overlayClassName: "alert-overlay",
            //     customUI: ({ onClose }) => {
            //       return (
            //             <Alert 
            //                 alert={{
            //                     type: 'error',
            //                     title: 'Erreur',
            //                     message: 'Une erreur s\'est produite réesseyez s\'il vous plaît.',
            //                     actionText: 'Ok',
            //                     action: () => {
            //                         onClose();
            //                     }
            //                 }}
            //             />
            //       );
            //     }
            // });
        }

         
      
        return Promise.reject(error);
    }
);  

export default axiosInstance;