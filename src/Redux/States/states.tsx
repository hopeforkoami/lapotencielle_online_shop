import StoreArticle from "../../Models/StoreArticle";

 
 export interface StoreState {
    products: Array<StoreArticle>,
    basketId: number | null
}

export interface UserState {
    message: string, 
    user: any | null ;
}

export interface PriceUnitState {
    unit: string
}

export interface RouteState {
    message: string;
    currentRoute: Array<String>;
    currentPath: string;
}