import {useState,useEffect} from "react";

const Faq1=()=>{
const [num,setNum]=useState(0);
const [calc,setCalc]=useState(0);

useEffect(()=>{
    console.log(num);
    setCalc(()=>num*2);
},[num])
return(<>
<h1>
    {num}
</h1>
<button onClick={()=>setNum(num=>num+1)}>change</button>
<h1>
    {calc}
</h1>
</>)
}
export default Faq1;