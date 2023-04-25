import axiosInstance from '../../Utils/axios_manager';

export default class KitsService {
  
    constructor() { }

    public getAllProducts = () => {
        return axiosInstance.get('/product/list/full');
    }

    public getFilterByKeyword = (params: Record<string, any>) => {
        return axiosInstance.get('/kit/list/filter', {
            params: params
        });
    }

}