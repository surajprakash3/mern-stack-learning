/** @format */

import React, { useContext } from "react";
import ReducerContext from "./ReducerContext";

const Diaplay = () => {
  const { state } = useContext(ReducerContext);
  console.log("state", state);
  return (
    <div className="h2">
      <h2>Count: {state.count}</h2>
      <h2>Add: {state.add}</h2>
    </div>
  );
};

export default Diaplay;