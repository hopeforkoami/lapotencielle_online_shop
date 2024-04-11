
import { configureStore } from '@reduxjs/toolkit'
 
import storeReducer from './Reducers/storeReducer';
import userReducer from './Reducers/userReducer';

import productPriceReducer from './Reducers/productPriceReducer';
// ...
import routeReducer from './Reducers/routeReducer';

const store = configureStore({
  reducer: { 
    store: storeReducer,
    users: userReducer,
    units: productPriceReducer,
    routes: routeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;