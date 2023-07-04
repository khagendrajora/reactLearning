import React from 'react'
import { useDispatch } from 'react-redux'


const TestItem = () => {
    const dispatch =useDispatch()      //to call the function or to send the action to redux store
    const increase= ()=>(
        dispatch({type:'ADD_To_Cart'})
    )
    const decrease =()=>(
        dispatch({type:'Remove_from_cart'})
    )
  return (
    <>
     <button className='btn btn-primary' onClick={increase}>+</button>
     &nbsp;&nbsp;&nbsp;
     <button className='btn btn-danger' onClick={decrease}>-</button>
    </>
  )
}

export default TestItem