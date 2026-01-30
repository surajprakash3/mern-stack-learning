import React,{useState} from "react"
import Home from './Home'

function Counter(){
    const [count,setCount] = useState(0)
    const [show,setShow] = useState(false)
    const Increment = () =>{
        setCount(count => count+1)
        console.log(count)
    }
    function showFun(){
        setShow(!show)
    }


    
    return (
        <div>
            <div>
                <h2>Count: {count}</h2>
           
            
            <button onClick={Increment}>Increment</button>
            <button onClick={showFun}>Show Home Page</button>
            {
                show && <Home />
            }
            
            </div>
        </div>
    )

}
export default Counter