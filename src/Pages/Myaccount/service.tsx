import axiosInstance from '../../Utils/axios_manager';

export default class MyaccountService {
  
    constructor() { }
 
    public getProduct =  async (id: Number) => {
        return await axiosInstance.get('/produit/details' + `?id=${id.toString()}`);
    }

    public getFilterByKeyword = (params: Record<string, any>) => {
        return axiosInstance.get('/product/filter/keyword', {
            params: params
        });
    }

    public login =  async (login: Record<string, any>) => {
        return await axiosInstance.post('/client/login', login );
    } 



}