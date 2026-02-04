import React, { useState, useEffect } from "react";

const Fetchapi = () => {
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  // ✅ FILTER LOGIC
  const filterData = users.filter((user) =>
    user.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div style={{ margin: "50px" }}>
      <input
        type="text"
        placeholder="Search by name"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />


      {/* filterData.length>0? */}
      {filterData.map((user) => (
        <div
          key={user.id}
          style={{
            border: "2px solid red",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <div>{user.name}</div>
          <div>{user.email}</div>
        </div>
      ))}

      <h3 className="h3">Details</h3>

      {/* TABLE VIEW */}
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.name}</td>
              <td>{t.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fetchapi;
