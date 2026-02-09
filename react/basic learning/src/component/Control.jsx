/** @format */

import React from "react";
import { useContext } from "react";
import ReducerContext from "./ReducerContext";
const Control = () => {
  const { dispatch } = useContext(ReducerContext);
  console.log("dis", dispatch);
  return (
    <div className="button">
      <button onClick={() => dispatch({ type: "INC" })} className="border-2">
        increse
      </button>
      <button onClick={() => dispatch({ type: "DEC" })} className="border-2">
        Decrese
      </button>
      <button onClick={() => dispatch({ type: "ADD" })} className="border-2">
        Add
      </button>
    </div>
  );
};

export default Control;