import StoreArticle from "../../Models/StoreArticle";

 
 export interface StoreState {
    products: Array<StoreArticle>
}

export interface UserState {
    message: string, 
    user: any | null ;
}