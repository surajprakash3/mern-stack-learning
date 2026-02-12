import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault(); // ✅ stop refresh

    localStorage.setItem("userData", JSON.stringify(user));

    navigate("/login"); // go to login page
  };

  return (
    <div className="bg-red-300">
      <h2>Register</h2>

      <form onSubmit={handleSubmitForm}>
        <label htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            type="text"
            value={user.name}
            onChange={handleChange}
            required
          />
        </label>

        <br />

        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </label>

        <br />

        <label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </label>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
