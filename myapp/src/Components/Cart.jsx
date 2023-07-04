import React from 'react'
import { Link } from 'react-router-dom'

const Cart = (props) => {
    //object destructuring
    const {title ,image, price,id} = props.item
    return (
        <>

            <div className="col">
                <div className="card">
                    <img src={image} className="card-img-top" alt={title} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h5>${price }</h5>
                        <Link to={`/productDetail/${id}`} className='btn btn-primary'>View Details</Link>

                    </div>
                </div>
            </div>




        </>
    )
}

export default Cart