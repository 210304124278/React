import { useDispatch,useSelector } from "react-redux";
import { getCustomers } from "./slice/customerSlice";
import { useEffect } from "react";
function App() {
 const dispatch=useDispatch();
 useEffect(()=>{
  dispatch(getCustomers());
 },[])

 const res=useSelector(state=>state);
const {customers}=res;
const {isLoading,data,isError}=customers;

  return (
    <>
     <p>{JSON.stringify(data)}</p>
    </>
  )
}

export default App
