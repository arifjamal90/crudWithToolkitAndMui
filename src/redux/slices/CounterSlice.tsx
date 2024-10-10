import { createSlice } from "@reduxjs/toolkit";

interface counterType{
    value: number
}
const initialState: counterType = {
    value: 0
}

export const Counter = createSlice({
    name:"counter",
    initialState:initialState,
    reducers:{
        increment:(state)=>{
            state.value += 1
        },
        decrement : (state)=>{
            state.value > 0 ? state.value -=1  : state.value
        }
    }
})

export const {increment, decrement} = Counter.actions;
export default Counter.reducer