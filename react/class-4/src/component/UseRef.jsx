import { useRef, useState, useEffect } from "react";

function UseRef() {
  const inputRef = useRef(null);
  const countChar = useRef(0);
  const [userTypeVal, setUserData] = useState("");

  useEffect(() => {
    countChar.current += 1;
  }, [userTypeVal]); // runs only when user types

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>User Type</h2>

      <input
        ref={inputRef}
        value={userTypeVal}
        onChange={(e) => setUserData(e.target.value)}
      />

      <p>Characters typed: {countChar.current}</p>

      <button onClick={focusInput}>Input useRef focus</button>
    </div>
  );
}

export default UseRef;
