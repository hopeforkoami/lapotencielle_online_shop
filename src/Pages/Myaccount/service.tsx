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

    public check2faCode =  async (data: Record<string, any>) => {
        return await axiosInstance.post('/client/2facheck', data );
    } 

    public requestResetPassword =  async (data: Record<string, any>) => {
        return await axiosInstance.post('/client/password/reset', data );
    } 

    public resetPassword =  async (data: Record<string, any>) => {
        return await axiosInstance.post('/client/password/set', data );
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

    public register =  async (client: Record<string, any>) => {
        return await axiosInstance.post('/client/add', client );
    } 

    public getPromoCodeReduction = async (data: Record<string, any>) => {
        return await axiosInstance.post('/order/promo', data );
    } 
    



}