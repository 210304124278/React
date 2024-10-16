
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import apiCalls from "./apiCalls/apiCalls";


function App() {
  //dispatch
 const dispatch=useDispatch();
 useEffect(()=>{
  dispatch(apiCalls());
 },[])
 //subscription
const res=useSelector(state=>state);
  return (
    <>
      <p>{JSON.stringify(res)}</p>
    </>
  )
}

export default App
