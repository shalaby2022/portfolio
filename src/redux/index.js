import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './fatures/CounterSlice';
import  productReducer  from './fatures/ProductSlice';
import  shopReducer  from './fatures/ShopSlice';
import todoReducer  from "./fatures/TodoSlice";



export const store = configureStore({
    reducer: {
        todoRed: todoReducer,
        counterRed: counterReducer,
        prodRed: productReducer,
        shopRed: shopReducer
    }
})
