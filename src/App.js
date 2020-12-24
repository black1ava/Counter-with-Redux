import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './Actions'

export default function App(){
  
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  
  return(
    <div>
      <h1>
        You've clicked {counter} times
      </h1>
      <button
        onClick={() => dispatch(increment ())}
      >
        Increment
      </button>
      <button 
        onClick = {() => dispatch(decrement ())}
      >
        Decrement
      </button>
    </div>
  )
}