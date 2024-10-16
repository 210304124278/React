import employeesReducer from "../slice/slice.js";
import { configureStore } from "@reduxjs/toolkit";
const store=configureStore({
    reducer:{
        "employees":employeesReducer
    }
});
export default store;