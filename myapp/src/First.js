import React from 'react'
import './first.css'
import TestNav from './TestNav'

const First = () => {
  return (
    <>
    <TestNav/>
    <h1 className='title'>This is a first component</h1>
    <h1 className='text-warning'>We are using functional component</h1>
    </>
  )
}

export default First