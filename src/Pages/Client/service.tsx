import axiosInstance from '../../Utils/axios_manager';
import axios from 'axios';


export default class ClientService {
  
    constructor() { }
 
    public getOrders =  async (id: Number) => {
        return await axiosInstance.get('/order/list' + `?idClient=${id.toString()}`);
    }

    public getOrder =  async (id: Number) => {
        return await axiosInstance.get('/order/details' + `?id=${id.toString()}`);
    }
    
    public verifyEmail =  async (email: string) => {
        return await axiosInstance.post('/client/email/test', {
            "email": email
        });
    }

    public verifyLogin =  async (login: string) => {
        return await axiosInstance.post('/client/login/test', {
            "login": login
        });
    }

    public changePassword = (data: Record<string, any>) => {
        return axiosInstance.post('/client/passwordUpdate',  data);
    }

}