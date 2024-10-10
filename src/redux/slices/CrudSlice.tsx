import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state interface
interface TodoState {
  data: Array<{
    fname: string;
    lname: string;
    email: string;
    password: string;
    id?: number;
  }>;
  
}


const initialState: TodoState = {
  data: [],
  
};


export const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.data.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((todo) => todo.id !== action.payload);
    },
    updateTodo:(state,action)=>{
         state.data=state.data.map((item)=>item.id === action.payload.id ? action.payload : item)
    }
  },
});

// Export actions and reducer
export const { addTodo, removeTodo , updateTodo} = crudSlice.actions;

export default crudSlice.reducer;
