import axiosInstance from '../../Utils/axios_manager';
import axios from 'axios';


export default class ClientService {
  
    constructor() { }
 
    public getOrders =  async (id: Number) => {
        return await axiosInstance.get('/order/list' + `?idClient=${id.toString()}`);
    }

}