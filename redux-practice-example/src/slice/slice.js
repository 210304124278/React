import employeesApiCall from "../apiCalls/apiCalls";
import { createSlice } from "@reduxjs/toolkit";
const slice=createSlice({
"name":"employee-slice",
"initialState":{
    isLoading:false,
    data:{},
    isError:false
},
extraReducers:(builder)=>{
builder.addCase(employeesApiCall.pending,(state,action)=>{
    state.isLoading=false;
    state.isError=false;
})
builder.addCase(employeesApiCall.fulfilled,(state,action)=>{
    state.isLoading=true;
    state.data=action.payload;
    state.isError=false;
})
builder.addCase(employeesApiCall.rejected,(state,action)=>{
    state.isLoading=false;
    state.isError=true;
})
}
});
export default slice.reducer;
