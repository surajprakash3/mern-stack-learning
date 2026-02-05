import { useState, useMemo } from "react";

const UseMemo = () => {
  const [num, setNum] = useState(0);
  const multFun = (num) => {
    let mul = 1;
    mul = mul * num;
    return mul;
  };
  const calfun = useMemo(() => {
    return multFun(num);
  }, [num])
  return (
    <div
      Styel={{
        margin: "100px",
        width: "300px",
        height: "300px",
        border: "2px solid red",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h2>UseMemo : {calfun}</h2>
      <button onClick={() => setNum(num + 1)}>click</button>
      increse number
    </div>
  );
};

export default UseMemo;
