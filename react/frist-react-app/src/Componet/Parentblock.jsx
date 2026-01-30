
import Blockone from "./Blockone";
import Blocktwo from "./Blocktwo";
import Blockfour from "./Blockfour";
import Blockthree from "./Blockthree";
import { useState } from "react";


function Parentblock(){
    const [val,setValue] = useState(0)
    
    


    return(
        <div style={{ textAlign:"center",marginBottom:"20px",display:"flex", gap:"20px"}}>
        <input type="Number" onChange={(e)=>setValue(e.target.value)} />
         <Blockone val={val}/>
        <Blocktwo val={val}/>
        <Blockthree val={val}/>
        <Blockfour val={val}/>
        
       
       
        </div>
    )
}
export default Parentblock;