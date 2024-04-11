import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {  PriceUnitState, UserState } from '../States/states'; 
import { RootState } from '../store';


const initialState: PriceUnitState = {
  unit: "$", 
};


export const priceUnitSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setUnit: (state, action: PayloadAction< string  >) => {
        console.log("SET USER");
        state.unit = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUnit } = priceUnitSlice.actions;

// Other code such as selectors can use the imported `RouteState` type
export const getUnit = (state: RootState ) => state.units.unit

export default priceUnitSlice.reducer