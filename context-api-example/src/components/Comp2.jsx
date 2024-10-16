import {GlobalData} from "../context/ContextApp.jsx";
import {useContext} from "react";
const Comp2=()=>{
    const str=useContext(GlobalData);
        
    return(
        <>
     <h1>{str}</h1>
        
        
        </>
    )
}
export default Comp2;