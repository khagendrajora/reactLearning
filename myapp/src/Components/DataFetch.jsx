import React, { useState, useEffect } from 'react'
// npm install axios ,fakestoreapi  , axios is a library for making HTTP requests.
import axios from 'axios'

const DataFetch = () => {
    const [products, setProducts] = useState([]) //to take more than one data use array

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')    //axios .get mwthod returns a promise
            .then(res => {                            //here res is parameter ,only one parameter isn used so no need to use ()
                console.log(res.data)
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            {products && products.map((item ,i)=> {
                return (
                    <>
                        <h1 className='text-primary'>{item.title}</h1>
                        <h2>${item.price}</h2>
                    </>
                )

            })}

        </>
    )
}

export default DataFetch