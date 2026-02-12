import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </>
  );
}

export default App;
