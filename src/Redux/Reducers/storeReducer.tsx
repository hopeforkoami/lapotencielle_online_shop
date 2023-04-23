import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {  StoreState } from '../States/states'; 
import { RootState } from '../store';
import StoreArticle from "../../Models/StoreArticle";

const initialState: StoreState = {
  products: []
};


export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction< StoreArticle >) => {
        console.log("Add product");
        var products = state.products;
        products.push(action.payload); 
        state.products = products;
    },
    removeProduct: (state, action: PayloadAction< StoreArticle  >) => {
      console.log("Remove product");
      var products = state.products;
      products = products.filter((product) => product.product.id !== action.payload.product.id ); 
      state.products = products;
    },
    updateProductQty: (state, action: PayloadAction<  StoreArticle  >) => {
      var storeProducts = state.products;
      const storeElementIndex = storeProducts.findIndex( (str)=> str.product.id === action.payload.product.id );
      storeProducts[storeElementIndex].qty = action.payload.qty;
      state.products = storeProducts;
    },
    updateProducts: (state, action: PayloadAction< Array<StoreArticle> >) => {
      state.products = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, updateProducts, updateProductQty } = storeSlice.actions;

// Other code such as selectors can use the imported `RouteState` type
export const getProducts = (state: RootState ) => state.store.products;

export default storeSlice.reducer