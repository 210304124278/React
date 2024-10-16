import {GlobalData} from "../context/ContextApp.jsx";
import Comp2 from "./Comp2.jsx";
const Comp1=()=>{
    return(
        <>
        <GlobalData.Provider value="ExcelR"> <Comp2></Comp2></GlobalData.Provider>
       
        </>
    )
}
export default Comp1;