import axiosInstance from '../../Utils/axios_manager';
import axios from 'axios';


export default class CartService {
  
    constructor() { }
 
    public getProduct =  async (id: Number) => {
        return await axiosInstance.get('/produit/details' + `?id=${id.toString()}`);
    }

    public getFilterByKeyword = (params: Record<string, any>) => {
        return axiosInstance.get('/product/filter/keyword', {
            params: params
        });
    }

    public initializeBasketId = async (data: Record<string, any>) => {
        return await axiosInstance.post('/basket/initialize',  data);
    }

    public getShippings =  async () => {
        return await axiosInstance.get('/shipingService/list');
    }

    public getPromoCodeReduction = async (data: Record<string, any>) => {
        return await axiosInstance.get('/order/promo' + `?promoCode=${data['promoCode'].toString()}` + `&montantBasket=${data['montantBasket'].toString()}`);
    } 

    public getShippingCosts = async (data: Record<string, any>) => {
        return await axiosInstance.post('/shipping/coast', data );
    } 

    public getStoreDetails =  async () => {
        return await axiosInstance.get('/boutique/details' + `?id=4`);
    }

    public createOrder = async (data: Record<string, any>) => {
        return await axiosInstance.post('/order/create',  data);
    }

    public addProductToBasket = async (data: Record<string, any>) => {
        return await axiosInstance.post('/basket/addcontent',  data);
    }

    public checkPayment = async (data: Record<string, any>) => {
        return await axiosInstance.post('/payment/check',  data);
    }

    public createPaypalOrder = async (data: Record<string, any>, headers: Record<string, any>) => {
        return await axios.post('https://api-m.sandbox.paypal.com/v2/checkout/orders',  data,{
            headers: headers
        });
    }

    

}