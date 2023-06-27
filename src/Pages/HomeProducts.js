import React from 'react'
import { Link } from 'react-router-dom'

const HomeProducts = ({ homeProducts }) => {

    
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-4 p-0">
                    <div className="card  bg-transparent" >
                        <div className='p-0 image'>
                            <img src={homeProducts[6]?.image} className='card-img ' alt="..." />
                            <div className="overlay overlay-home">
                           <Link to={`/product/${homeProducts[6]?.id}`} className="icon">
                                <i className="fa fa-search "></i>
                            </Link>

                        </div>
                        </div>

                        <div className="card-body  bg-transparent d-flex justify-content-between">
                            <div className="card-text color2 text-capitalize  fs-5">{homeProducts[6]?.name}</div>
                            <div className="card-text color1 fs-5 "><p> ${homeProducts[6]?.price}</p>  </div>
                        </div>
                    </div>
                </div>
                <div className="col-4  p-0">
                    <div className="card  bg-transparent" >
                        <div className='p-0 image'>
                            <img src={homeProducts[7]?.image} className='card-img ' alt="..." />
                            <div className="overlay overlay-home">
                           <Link to={`/product/${homeProducts[7]?.id}`} className="icon">
                                <i className="fa fa-search "></i>
                            </Link>

                        </div>
                        </div>

                        <div className="card-body  bg-transparent d-flex justify-content-between">
                            <div className="card-text color2 text-capitalize  fs-5">{homeProducts[7]?.name}</div>
                            <div className="card-text color1 fs-5 "><p> ${homeProducts[7]?.price}</p>  </div>
                        </div>
                    </div>
                </div>


                <div className="col-4 p-0 ">
                    <div className="card p-0 m-0 bg-transparent" >
                        <div className='p-0 image'>
                            <img src={homeProducts[10]?.image} className='card-img ' alt="..." />
                            <div className="overlay overlay-home">
                           <Link to={`/product/${homeProducts[10]?.id}`} className="icon">
                                <i className="fa fa-search "></i>
                            </Link>

                        </div>
                        </div>

                        <div className="card-body  bg-transparent d-flex justify-content-between">
                            <div className="card-text color2 text-capitalize  fs-5">{homeProducts[10]?.name}</div>
                            <div className="card-text color1  "><p> ${homeProducts[10]?.price}</p>  </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center mt-5'>
                <Link to='/products'>
                    <button type="button" className="btn btn-primary btn-lg px-3 py-2">ALL PRODUCTS</button>
                </Link>
            </div>

        </div>
    )
}

export default HomeProducts