import axiosInstance from '../Utils/axios_manager';

export default class AllService {
  
    constructor() { }

    public getAllProducts = () => {
        return axiosInstance.get('/product/list/full');
    }

    public getFilterByKeyword = (params: Record<string, any>) => {
        return axiosInstance.get('/product/filter/keyword', {
            params: params
        });
    }

    public getBestSellerProducts = () => {
        return axiosInstance.get('/product/filter/bestseller');
    }

    public getComingSoonProducts = () => {
        return axiosInstance.get('/product/list/comingsoon');
    }

    public getNewsExclusiveProducts = () => {
        return axiosInstance.get('/product/list/newsexclusive');
    }

    public searchByBarcodeOrName =  async (searchStr: string) => {
        return await axiosInstance.get(`/product/search/keyword?keyWord=${searchStr}`);
    }

    public subscribeToNewsletter =  async (data: Record<string, any>) => {
        return await axiosInstance.post('/news/suscribe', data);
    }


}