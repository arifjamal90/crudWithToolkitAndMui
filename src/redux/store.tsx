import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "./slices/CrudSlice";  
import  counterSlice from './slices/CounterSlice'
export const store = configureStore({
  reducer: {
    crud: crudReducer,  
    counter: counterSlice
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
