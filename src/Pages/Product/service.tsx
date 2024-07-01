import axiosInstance from '../../Utils/axios_manager';

export default class ProductService {
  
    constructor() { }
 
    public getProduct =  async (id: Number) => {
        return await axiosInstance.get('/produit/details' + `?id=${id.toString()}`);
    }

    public getKit = async (id: Number)=> {
        return await axiosInstance.get('/product/group/details' + `?id=${id.toString()}`);
    }

    public getFilterByKeyword = (params: Record<string, any>) => {
        return axiosInstance.get('/product/filter/keyword', {
            params: params
        });
    }

    public addReview = (data: Record<string, any>) => {
        return axiosInstance.post('/product/review/add', data );
    }

}