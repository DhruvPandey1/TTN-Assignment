import { useState } from "react";
import Child from "./Child";

function Parent(){
    const [message,setMessage]=useState("");
    let handleChange=(event)=>{
        setMessage(event.target.value);
    }
    
    return(
        <div className="q3-div">
            <input type="text" value={message} onChange={handleChange} placeholder="Type your message ..." />
            <Child message={message}/>
        </div>
        
    );
}

export default Parent;