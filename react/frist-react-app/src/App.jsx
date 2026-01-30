// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

function App() {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        border: "5px solid black",
        backgroundColor: "grey",
        textAlign: "center",
        color: "black",
        marginLeft: "200px",
        marginTop: "-200px",
        borderRadius: "20px",
      }}
    >
      <p style={{ border: "2px solid black",
      width:"100px",
      marginLeft:"50px",
      borderRadius:"5px",
      backgroundColor:"white" }}>Hello I am </p>
      <div>suraj prakash</div>
      <div> roll no: 42 </div>
      <div>Email id: suraj@gamil.com</div>
    </div>
  );
}

export default App;
