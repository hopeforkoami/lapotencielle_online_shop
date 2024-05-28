import axiosInstance from '../../Utils/axios_manager';

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
        return await axiosInstance.post('/order/promo', data );
    } 

    public getShippingCosts = async (data: Record<string, any>) => {
        return await axiosInstance.post('/shipping/coast', data );
    } 


}