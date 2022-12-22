import { configureStore } from '@reduxjs/toolkit'
import { productApi } from '../features/api/apiSlice'
import cartSlice from '../features/cart/cartSlice'
import filterSlice from '../features/filter/filterSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        filter: filterSlice,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware) 
})