import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Layouts from './Components/Layouts'
import HomePage from './PAges/HomePage'
import Login from './PAges/Login'
import ProductDetails from './PAges/ProductDetails'
import Products from './PAges/Products'
import Cart from './PAges/Cart'

import Registerr from './PAges/Registerr'
import { Show } from './Context/Show'
import TestCart from './redux/TestCart'


const MyRoute = () => {
  return (
    <>
    <Router>
        <Routes>
          <Route path='' element={<Layouts/>}>
            <Route index element={<HomePage/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Registerr/>}/>
            <Route path='productDetail/:product_id' element={<ProductDetails/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='show' element={<Show/>}/>
          </Route>
          <Route path='cartReducer' element={<TestCart/>}/>

        </Routes>
    </Router>
    
    </>
  )
}

export default MyRoute