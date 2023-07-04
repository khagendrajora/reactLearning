import React , {useContext} from 'react'
import ComD from './ComD'
import { GlobalContext } from './GlobalContext'


const ComC = () => {
    const js = useContext(GlobalContext)
  return (
    <>
    <h2>i am C</h2>
    <h2>The javasscript library we are learning is a {js}</h2>
    <ComD/>
    </>
  )
}

export default ComC