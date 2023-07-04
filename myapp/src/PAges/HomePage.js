import React from 'react'
import Carousel from '../Components/Carousel'

import { IncrementDecrement } from '../hooks/IncrementDecrement'
import Effect from '../hooks/Effect'
import DataFetch from '../Components/DataFetch'
import CardContainer from '../Components/CardContainer'


const HomePage = () => {
  return (
    <>
    <h1> This is home Page</h1>
    <div className='bg-slate-500 h-28'></div>
    <Carousel/>
    <CardContainer/>
    {/* <IncrementDecrement/>
   <Effect/> */}
   {/* <DataFetch/> */}
    </>
  )
}

export default HomePage