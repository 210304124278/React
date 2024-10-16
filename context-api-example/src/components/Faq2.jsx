import {useState,useRef} from "react";
const Faq2=()=>{
    const ref1=useRef(null);
    const ref2=useRef(null);
const [obj,setObj]=useState({"sub1":"js","sub2":"reactjs","sub3":"mongodb"});
const my_func=()=>{
    setObj({
        ...obj,[ref1.current.value]:ref2.current.value
    })
}

return(
    <>
    <h1>{JSON.stringify(obj)}</h1>
    <br></br>
   <input type="text" ref={ref1} placeholder="enter key"></input>
   <input type="text" ref={ref2} placeholder="enter value"></input>
    
    <button onClick={my_func}>update</button>
    </>
    
)
}
export default Faq2;