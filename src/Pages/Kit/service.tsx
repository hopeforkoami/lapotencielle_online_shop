import axiosInstance from '../../Utils/axios_manager';

export default class KitService {
  
    constructor() { }
 
    public getProduct =  async (id: Number) => {
        return await axiosInstance.get('/product/group/details' + `?id=${id.toString()}`);
    }

    public getFilterByKeyword = (params: Record<string, any>) => {
        return axiosInstance.get('/product/filter/keyword', {
            params: params
        });
    }


}