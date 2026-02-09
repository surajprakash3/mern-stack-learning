/** @format */

import React from "react";

const ReducerAction = (state, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1, add: state.add };
    case "DEC":
      return { count: state.count - 1, add: state.add };
    case "ADD":
      return { add: state.add + 10, count: state.count };
    default:
      return state;
  }
};

export default ReducerAction;