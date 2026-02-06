import React, { useContext } from 'react'
import ReducerContext from './ReducerContext';

const Diaplay = () => {
    const {state} = useContext(ReducerContext);
  return (
    <div>
       Count:  {state.count}
    </div>
  )
}

export default Diaplay