// import './App.css'
// // import AxiosDemo from "./component/AxiosDemo";   // 👈 IMPORTANT
// import UseMemo from './component/UseMemo';



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


// function App() {
//   return (
//     <div>
     
//     </div>
//   );
// }

// export default App;

// import Todo from "./Component/Todo"
import { useState } from "react";
// import TodoContext from "./Component/TodoContext";
// import Get from "./API Fetch/Get";
// import Pokemon from "./Component/Pokemon";
// import Pokimon2 from "./Component/Pokimon2";
// import UserForm from "./Component/UserForm";
// import UseRef from "./Class10/UseRef";
// import UseMemo from "./Class11/UseMemo";
import Reducer from './component/Reducer';
function App() {

  const [forminput, setForminput] = useState({
    name: "",
    roll: "",
    reg: "",
  })

  const [userform, setUerform] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [EditInd, seTEditInd] = useState(null)

  // to set the form
  function HandleSubmit(e) {
    e.preventDefault()
    // take the new user
    if (!isEdit)
      setUerform(pre => [...pre, forminput])
    // Edit the old user
    else {
      setUerform(pre => pre.map((val, ind) => ind === EditInd ? { ...forminput } : val))
      setIsEdit(false);
      seTEditInd(null);
    }

    // reset the input field
    setForminput({
      name: "",
      roll: "",
      reg: "",
    })
  }

  // to delet the user
  function HandleDelete(ind) {
    setUerform(pre => pre.filter((val, i) => ind !== i))
  }

  // to update the user
  function HandleEdit(ind) {
    setForminput(userform[ind])
    seTEditInd(ind);
    setIsEdit(true);
  }
  return (
    <>
      {/* <TodoContext.Provider value={{ HandleSubmit, forminput, setForminput, userform, HandleDelete, HandleEdit, isEdit }}>
        <Todo />
      </TodoContext.Provider> */}

      {/* <Get /> */}

        {/* <Pokemon/> */}
        {/* <Pokimon2/> */}

        {/* <UserForm/> */}
        {/* <UseRef/> */}
        {/* <UseMemo/> */}
        <Reducer/>

    </>
  )
}

export default App