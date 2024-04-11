import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {  StoreState } from '../States/states'; 
import { RootState } from '../store';
import StoreArticle from "../../Models/StoreArticle";

const initialState: StoreState = {
  products: [],
  basketId: null
};


export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setBasketId: (state, action: PayloadAction< number >) => {
      console.log("Store basket id"); 
      window.localStorage.setItem(
        '_store_basket_id',
        action.payload?.toString()
      );
      state.basketId = action.payload;
    },
    addProduct: (state, action: PayloadAction< StoreArticle >) => {
        console.log("Add product");
        var products = state.products;
        products.push(action.payload); 
        window.localStorage.setItem(
          '_store_products',
          JSON.stringify(products)
        );
        state.products = products;
    },
    removeProduct: (state, action: PayloadAction< StoreArticle  >) => {
      console.log("Remove product");
      var products = state.products;
      products = products.filter((product) => product.product.id !== action.payload.product.id ); 
      window.localStorage.setItem(
        '_store_products',
        JSON.stringify(products)
      );
      state.products = products;
    },
    updateProductQty: (state, action: PayloadAction<  StoreArticle  >) => {
      var storeProducts = state.products;
      const storeElementIndex = storeProducts.findIndex( (str)=> str.product.id === action.payload.product.id );
      storeProducts[storeElementIndex].qty = action.payload.qty;
      window.localStorage.setItem(
        '_store_products',
        JSON.stringify(storeProducts)
      );
      state.products = storeProducts;
    },
    updateProducts: (state, action: PayloadAction< Array<StoreArticle> >) => {
      window.localStorage.setItem(
        '_store_products',
        JSON.stringify(action.payload)
      );
      state.products = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setBasketId, addProduct, removeProduct, updateProducts, updateProductQty } = storeSlice.actions;

// Other code such as selectors can use the imported `RouteState` type
export const getProducts = (state: RootState ) => state.store.products;
export const getBasketId = (state: RootState ) => state.store.basketId;

export default storeSlice.reducer