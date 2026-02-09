import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [user, setUser] = useState([{ name: "", email: "", password: "" }]);

  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault;
    localStorage.setItem("userData", JSON.stringify(users));
    navigate("/");
  };

  return (
    <div>
      <div>Register</div>
      <div>
        <form onSubmit={handleSubmitForm}>
          <div>
            <label>
              Name
              <input
                type="text"
                onChange={(e) => setName({ ...users, name: e.target.value })}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                onChange={(e) => setEmail({ ...users, email: e.target.value })}
              />
            </label>
            <label>
              password
              <input
                type="text"
                onChange={(e) =>
                  setPassword({ ...users, password: e.target.value })
                }
              />
            </label>
          </div>
          <div o>Submit</div>
        </form>
      </div>
    </div>
  );
}
