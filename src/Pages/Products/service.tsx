import axiosInstance from '../../Utils/axios_manager';

export default class ProductsService {
  
    constructor() { }

    public getAllProducts = () => {
        return axiosInstance.get('/product/list/full');
    }

    public getFilterByKeyword = (params: Record<string, any>) => {
        return axiosInstance.get('/product/filter/keyword', {
            params: params
        });
    }

}