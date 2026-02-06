import React, { useReducer } from 'react'

import ReactContext from './ReducerContext'
import Diaplay from './Diaplay'
import ReducerAction from './ReducerAction'
import Control from './Control'

const Reducer = () => {
    const [state,dispatch] = useReducer(ReducerAction , {count:0})
    return (

        <ReactContext.Provider value={{state , dispatch}}>
            <Control/>
            <Diaplay/>
        </ReactContext.Provider>

    )
}

export default Reducer