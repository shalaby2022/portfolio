import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 1
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.counter +=1
        },
        decrement: (state, action) => {
            state.counter -=1
        }
    }
})

// console.log(counterSlice)

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer