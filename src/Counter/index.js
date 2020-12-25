import React from 'react'
import {increment, decrement} from './../Action'
import { connect } from 'react-redux'

function Counter(props){
  return(
    <div>
      <h1>Count : { props.count }</h1>
      <button onClick={ props.increment }>
        Increment
      </button>
      <button  onClick={ props.decrement }>
        Decrement
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = {
  increment,
  decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)