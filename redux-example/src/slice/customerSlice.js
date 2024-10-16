import axios from "axios";
import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";

export const getCustomers=createAsyncThunk("customers",async()=>{
   const res= await axios.get("https://www.w3schools.com/Angular/customers.php");
   return res;
})

const apicall=createSlice({
name:"api-call",
initialState:{
    isLoading:false,
    data:{},
    isError:false
},
extraReducers:(builder)=>{
builder.addCase(getCustomers.pending,(state,action)=>{
    state.isLoading=false;
})
builder.addCase(getCustomers.fulfilled,(state,action)=>{
    state.isLoading=true;
    state.data=action.payload;
})
builder.addCase(getCustomers.rejected,(state,action)=>{
state.isError=true;
state.isLoading=true;
})
}
});
export default apicall.reducer;