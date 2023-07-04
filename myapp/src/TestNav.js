import React from 'react'
import { Link } from 'react-router-dom'

const TestNav = () => {
  return (
    <>
    <ul className='d-flex bg-danger'>
        <li><Link to= '/'>Home</Link></li>
        <li><Link to= '/test'>Demo</Link></li>
    </ul>
    
    </>
  )
}

export default TestNav