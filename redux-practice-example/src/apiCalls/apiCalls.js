import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
export default createAsyncThunk("employees",async()=>{
const res=await axios.get("https://reqres.in/api/users?page=2");
return res;
})