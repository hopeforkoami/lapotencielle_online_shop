import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import {  StoreState } from '../States/states'; 
import { RootState } from '../store';
import StoreArticle from "../../Models/StoreArticle";
import axiosInstance from '../../Utils/axios_manager';
import { useAppDispatch } from '../../Hooks/customSelector';
import { useNavigate } from 'react-router-dom';

const initialState: StoreState = {
  products: [],
  basketId: null,
  reduction: null,
  shippingCost: null,
  currentShippingAddress: null,
  loading: false
};


// First, create basketId
const createBasketId = createAsyncThunk(
  'store/createBasketId',
  async (idClient, thunkAPI) => {
    const response = await axiosInstance.post('/basket/initialize', {
      'idClient': idClient
    });
    return response.data?.data.idVente.toString()
  },
);

// First, create basketId
export const addProductToBasket = createAsyncThunk(
  'store/addProductToBasket',
  async (data: {idClient: string, product: any, qty: number, dispatch: any, navigate: any,
     kit?:boolean, navigateTo?: boolean 
   }, thunkAPI) => {
    console.log('Adding product to basket');

    console.log(data);

    if (data.navigateTo === undefined) {
      data.navigateTo = true;
    }

    if (data.kit === undefined) {
      data.kit = false;
    }

    data.dispatch( setStoreLoading(true) );

    let basketId = window.localStorage.getItem(
      '_store_basket_id' 
    );

    console.log(" basket id ");
    console.log(basketId);
    
    if (basketId === null || basketId === '') {
      const response = await axiosInstance.post('/basket/initialize', {idClient: data.idClient});
      data.dispatch( setBasketId( response.data?.data.idVente.toString() ) )
      basketId = response.data?.data.idVente.toString()
    }
     
    const response = await axiosInstance.post('/basket/addcontent',{
      'idPanier': basketId,
      'idProduit': data.product.id,
      'qteVente': data.qty,
      'kit': data.kit
    });
    console.log(response);
    if (response.data === 'qteInssufisant') {
      alert("Quantite en stock insuffisant");
      data.dispatch( setStoreLoading(false) );
      return;
    } else { 
      
      // data.dispatch( setStoreLoading(false) );
      if (data.navigateTo) {
        data.navigate('/cart');
      } else {
        data.dispatch( setStoreLoading(false) );

        data.dispatch( getBasketContents({
          dispatch: data.dispatch,
          navigate: data.navigate
        }) );
        
      }
      
      return response.data;
    }
    
  },
);


// First, create basketId
export const getBasketContents = createAsyncThunk(
  'store/getBasketContents',
  async (data: { dispatch: any, navigate: any }, thunkAPI) => {
    console.log('Get products from basket');

    console.log(data);

    data.dispatch( setStoreLoading(true) );

    let basketId = window.localStorage.getItem(
      '_store_basket_id' 
    );

    console.log(" basket id ");
    console.log(basketId);
    
    if (basketId === null || basketId === '') {
      data.dispatch( setStoreLoading(false) );
      return;
    }
     
    const response = await axiosInstance.get('/basket/details' + `?id=${ basketId }` );
    console.log(response);
    if (response.data ) { 

      console.log(response);

      if (response.data.data?.content !== null) {
        const basketProducts: Array< StoreArticle > = response.data.data?.content.map(
          (ct: any) => {  
            return {
              product: ct.produit, qty: ct.qte, contentLine: ct.id
            };
          }
        ); 
  
        data.dispatch(addProducts( basketProducts ));
      } else {
        data.dispatch(addProducts( [] ));
      }
       

      data.dispatch( setStoreLoading(false) );

      return response.data;
    } else {  
      data.dispatch( setStoreLoading(false) ); 
      return ;
    }
    
  },
);


// First, create basketId
export const deleteBasketProduct = createAsyncThunk(
  'store/deleteBasketProduct',
  async (data: { idLigne: number, dispatch: any, navigate: any, kit?:boolean }, thunkAPI) => {

    console.log('Delete product from basket');

    if (data.kit === undefined) {
      data.kit = false;
    }

    console.log(data);

    data.dispatch( setStoreLoading(true) ); 

    const response = await axiosInstance.post('/basket/deletecontent',
      { idLigneVente: data.idLigne, kit: data.kit });

    console.log(response);
    
    if (response.data ) { 

      console.log(response);

      data.dispatch( getBasketContents({ 
        dispatch: data.dispatch,
        navigate: data.navigate
      }));

      data.dispatch( setStoreLoading(false) );

      return response.data;
    } else {  
      data.dispatch( setStoreLoading(false) ); 
      return ;
    }
    
  },
);



export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setStoreLoading: (state, action: PayloadAction< boolean >) => { 
      state.loading = action.payload;
    },
    setCurrentShippingAddress: (state, action: PayloadAction< string >) => {
      console.log("Store current shipping address"); 
      window.localStorage.setItem(
        '_store_current_shipping_address',
        action.payload?.toString()
      );
      state.currentShippingAddress = action.payload;
    }, 
    setShippingCosts: (state, action: PayloadAction< number >) => {
      console.log("Store basket id"); 
      window.localStorage.setItem(
        '_store_shipping_cost',
        action.payload?.toString()
      );
      state.shippingCost = action.payload;
    }, 
    setReductions: (state, action: PayloadAction< number >) => {
      console.log("Store basket id"); 
      window.localStorage.setItem(
        '_store_reduction',
        action.payload?.toString()
      );
      state.reduction = action.payload;
    }, 
    setBasketId: (state, action: PayloadAction< number >) => {
      console.log("Store basket id"); 
      window.localStorage.setItem(
        '_store_basket_id',
        action.payload?.toString()
      );
      state.basketId = action.payload;
    },
    addProducts: (state, action: PayloadAction< Array<StoreArticle> >) => {
      console.log("Add product");
      var products = state.products;
      // products.length = 0;
      products = action.payload;
      // products = action.payload; 
      window.localStorage.setItem(
        '_store_products',
        JSON.stringify(products)
      );
      state.products = products;
  },

    addProduct: (state, action: PayloadAction< StoreArticle >) => {
        console.log("Add product");
        var products = state.products;
        // products.length = 0;
        products.push(action.payload);
        // products = action.payload; 
        // window.localStorage.setItem(
        //   '_store_products',
        //   JSON.stringify(products)
        // );
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
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    // builder.addCase(createBasketId.fulfilled, (state, action) => {
    //   // Add user to the state array
    //   window.localStorage.setItem(
    //     '_store_basket_id',
    //     action.payload?.toString()
    //   );
    //   state.basketId = action.payload;
    // }),
    builder
    .addCase(addProductToBasket.fulfilled, (state, action: PayloadAction< StoreArticle >) => {})
    .addCase(getBasketContents.fulfilled, (state, action: PayloadAction< StoreArticle >) => { })
    .addCase(deleteBasketProduct.fulfilled, (state, action: PayloadAction< StoreArticle >) => { })
  },
})

// Action creators are generated for each case reducer function
export const { setStoreLoading, setBasketId, addProduct, removeProduct, updateProducts, updateProductQty, setReductions, setShippingCosts,
  setCurrentShippingAddress, addProducts
 } = storeSlice.actions;

// Other code such as selectors can use the imported `RouteState` type
export const getProducts = (state: RootState ) => state.store.products;
export const getBasketId = (state: RootState ) => state.store.basketId;

export const getShippingCost = (state: RootState ) => state.store.shippingCost;
export const getReduction = (state: RootState ) => state.store.reduction;

export default storeSlice.reducer