import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = `https://fakestoreapi.com/products`

export const gethProducts = createAsyncThunk ('shop/gethProducts', () => {
    return  fetch(baseURL)
            .then((res) => res.json())
            .then((json) => (json))
            .catch( err => console.log(err))
})

const initialState = {
    products: [],
    isLoading: false,
    err: {}
}

export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            
        }
    },
    extraReducers: {
        [gethProducts.pending]: (state, action) => {
            state.isLoading = true;
        },
        [gethProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.products = action.payload
        },
        [gethProducts.rejected]: (state, action) => {
            state.isLoading = true;
        }
    }
})

console.log(shopSlice)
export const { addProduct } = shopSlice.actions
export default shopSlice.reducer