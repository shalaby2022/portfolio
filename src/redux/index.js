import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './fatures/CounterSlice';
import todoReducer  from "./fatures/TodoSlice";





export const store = configureStore({
    reducer: {
        todoRed: todoReducer,
        counterRed: counterReducer
    }
})
