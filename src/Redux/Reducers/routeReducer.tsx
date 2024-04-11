import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { RouteState } from '../States/states';


const initialState: RouteState = {
  message: "", 
  currentRoute: [],
  currentPath: ""
};


export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    changeCurrentRoute: (state, action: PayloadAction< Array<string> >) => {
      state.currentRoute = action.payload
    },
    changeCurrentPath: (state, action: PayloadAction< string >) => {
      state.currentPath = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeCurrentRoute, changeCurrentPath } = routeSlice.actions;

// Other code such as selectors can use the imported `RouteState` type
export const selectRoute = (state: RootState) => state.routes.currentRoute

export default routeSlice.reducer