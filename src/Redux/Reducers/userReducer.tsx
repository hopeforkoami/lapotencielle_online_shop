import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {  UserState } from '../States/states'; 
import { RootState } from '../store';


const initialState: UserState = {
  message: "",
  user: null
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction< any | null >) => {
        console.log("SET USER");
        state.user = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

// Other code such as selectors can use the imported `RouteState` type
export const getUser = (state: RootState ) => state.users.user

export default userSlice.reducer