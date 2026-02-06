/** @format */

import React from "react";

const ReducerAction = (state, action) => {
    switch (action.type) {
        case "INC":
            return { count: state.count + 1 };
        case "DEC":
            return { count: state.count - 1 };
        default:
            return state;
    }
};

export default ReducerAction;