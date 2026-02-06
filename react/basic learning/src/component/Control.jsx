import React from 'react'
import { useContext } from 'react'
import ReducerContext from './ReducerContext'
const Control = () => {

    const {dispatch} = useContext(ReducerContext)
  return (
    <div>
        <button onClick={()=>dispatch({type:"INC"})} className='border-2'>+</button>
        <button onClick={()=>dispatch({type:"DEC"})} className='border-2'>-</button>
    </div>
  )
}

export default Control