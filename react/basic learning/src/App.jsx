import './App.css'
import AxiosDemo from "./component/AxiosDemo";   // 👈 IMPORTANT



// function App() {
// function eventHandler(){
//     alert('Geeksforgeeks is the best platform to learn coding!');
//   }


//   return (
//     <div className='App'>
//       <h1>Welcome to Geeksforgeeks</h1>
//       <button onClick={eventHandler}>Click for alert!</button>
//     </div>
//   )
// }

// function App(){
//   const handleOnSubmit=(e)=>{
//     e.preventDefault();
//     console.warn("You clicked on submit function");
//   };

  
//   return(
//     <>
// <h1>this is react webapp</h1>
// <form>
//   <button type="submit" onClick={handleOnSubmit}>
//     submit
//   </button>
// </form>
//     </>
//   );
// }

// import { useState } from 'react'
// function  App(){

//   const [count, setCount]= useState(0);
// const increaseing = ()=>{
//     setCount(count+1);
//   };

//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={increaseing}>click</button>

//     </>
//   );
// };


// import "./index.css";
// const numbers=[1,2,3,4,5];
// const App=()=>{
 
//   return (
//     <div>
//       {
//          numbers.map((number)=>{
//     console.log(number)
//     return <div >{number +1}</div>
    
//   })}
//     </div>
//   )

// }
// import React,{Fragment,useRef} from 'react';
// function App(){
//     const focusPoint=useRef(null);
//     const onClickHandler=()=>{
//         focusPoint.current.value=
//         "The quick brown fox jumps over the lazy dog";
//         focusPoint.current.focus();
//     }

//     return(
//         <Fragment>
//              <div>
//             <button onClick={onClickHandler}>Action</button>
//         </div>
//         <label>
//             Click on the action button to fucus and populate the text.
//         </label>
//         <br/>
//         <textarea ref={focusPoint}/>
//         </Fragment>
//     )
// }

//use effect
// import { useState, useEffect } from "react";


// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCount((count) => count + 5);
//     }, 1000);

//     // cleanup
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//       <h1>{count}</h1>
//     </div>
//   );
// }


function App() {
  return (
    <div>
      <AxiosDemo />
    </div>
  );
}

export default App;
