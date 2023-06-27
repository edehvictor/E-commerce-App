import React from 'react';
import { Link } from 'react-router-dom';

const ProductPage = ({ filterData }) => {

    return (
        <div className='gridlay'>
            {filterData.length ? (filterData.map((product) => {
                return <div className="card bg-transparent" key={product.id} >
                    <div className='p-0 image'>
                        <img src={product?.image} className='card-img-product' alt="..." />
                        <div className="overlay">
                           <Link to={`/product/${product.id}`} className="icon">
                                <i className="fa fa-search "></i>
                            </Link>

                        </div>
                    </div>

                    <div className="card-body  bg-transparent d-flex justify-content-between">
                        <div className="card-text color2 text-capitalize  fs-5">{product?.name}</div>
                        <div className="card-text color1 fs-5 "><p> ${product?.price}</p>  </div>
                    </div>
                </div>
            })) : <div className='not-found '> 
            <h5 className='text-danger'>  No Product Found!</h5>
          </div>}

        </div>
    )
}

export default ProductPage