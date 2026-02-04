import { useState } from "react";

const Register = ({ setPage }) => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    //  if (!name || !roll || !email || !password) {
    //   alert("All fields are required!");
    //   return;
    // }

    const userData = { name, roll, email, password };

    localStorage.setItem("user", JSON.stringify(userData));

    alert("Registered Successfully!");
    setPage("login");
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      
      <input required placeholder="Name" onChange={e => setName(e.target.value)} />
      <input required placeholder="Roll Number" onChange={e => setRoll(e.target.value)} />
      <input required placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input required type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
