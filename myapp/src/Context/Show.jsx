import React from 'react'
import ComA from './ComA'
import GlobalContextProvider from './GlobalContext'

export const Show = () => {
  return (
    <GlobalContextProvider>
    <ComA/>
    </GlobalContextProvider>
  )
}
