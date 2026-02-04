import { useState } from "react";
import Register from "./component/Register";
import Login from "./component/Login";
import Success from "./component/Success";

function App() {
  const [page, setPage] = useState("register");
  const [user, setUser] = useState(null);

  return (
    <>
      {page === "register" && <Register setPage={setPage} />}
      {page === "login" && <Login setPage={setPage} setUser={setUser} />}
      {page === "success" && <Success user={user} />}
    </>
  );
}

export default App;
