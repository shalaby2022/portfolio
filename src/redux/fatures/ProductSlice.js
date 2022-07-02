import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = `https://fakestoreapi.com/products`

export const fetchProduct = createAsyncThunk ('product/fetchProduct', (id)=>{
        return fetch(`${baseURL}/${id}`)
        .then(res => res.json())
        .then((json) => (json))
        .catch((err) => console.log(err))
})

const initialState = {
    product:{},
    isLoading: false,
    err: {}
}

export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            console.log(action.payload)
        }
    },
    extraReducers: {
        [fetchProduct.pending]: (state, action)=> {
            console.log("pend")
            state.isLoading = true
        },
        [fetchProduct.fulfilled]: (state, action) => {
            console.log("full")
            state.isLoading = false
            state.product = action.payload
            console.log(action.payload)
        },
        [fetchProduct.rejected]: (state, action) => {
            console.log("error")
            state.err = action.payload
        }
    }
})

export const { addProduct } = productSlice.actions
export default productSlice.reducer