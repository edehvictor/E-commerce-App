    import React, { useState } from 'react'
    import { Link } from 'react-router-dom'
    import { useSelector, useDispatch } from 'react-redux'
    import { incrementQuantityCartItem, substractQuantityCartItem, clearShoppingCart, removeFromCart } from '../Store/CartSlice'


    const Cart = () => {
        const dispatch = useDispatch()
        const cartItem = useSelector((state) => state.cart.itemList)
        const [shippingFee, setShippingFee] = useState(5.34)
        
        let subTotal = 0
        let totalOrder = 0

        const incrementCartItem = (item) => {
            dispatch(incrementQuantityCartItem(item))
            // console.log(item)
        }

        const decrementCartItem = (item) => {
            dispatch(substractQuantityCartItem(item))
        }


        const removeCartItem = (item) => {
            dispatch(removeFromCart(item))
            // console.log(item)
        }

        const clearCart = () => {
            dispatch(clearShoppingCart())
        }

        cartItem.forEach(element => {
            subTotal += element.totalPrice
        });

        cartItem.forEach(element => {
            totalOrder += element.totalPrice + shippingFee
        });
        return (
            <>
                {cartItem.length ? (
                    <div style={{ backgroundColor: '#FFFFFF' }} className='about'>
                        <div style={{ backgroundColor: '#EADED7', width: '100%' }} className='p-3'>
                            <h1 className='about-home' >Home/ <span className='about-page'>Carts</span> </h1>
                        </div>

                        <table className="table m-5">
                            <thead>
                                <tr className='fs-3' >
                                    <th scope="col">Item</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Subtotal</th>
                                </tr>
                            </thead>
                            {cartItem.map((item, index) => {
                                return <tbody key={index}>
                                    <tr className='m-5'>
                                        <th scope="row" className='color2 text-capitalize'>{index + 1}.{item?.name}</th>
                                        <td className='color3 m-5'>${item?.price}</td>
                                        <td>
                                            <span className='fs-4 color2' style={{ cursor: 'pointer' }} onClick={() => decrementCartItem(item)}>-</span>
                                            <span className='fs-4 color2'>{item?.quantity}</span>
                                            <span className='fs-4 color2' style={{ cursor: 'pointer' }} onClick={() => incrementCartItem(item)}>+</span></td>
                                        <td className='color1'>${item?.totalPrice}</td>
                                        <td>
                                            <i className="fa fa-trash text-danger" style={{ cursor: 'pointer' }} onClick={() => removeCartItem(item?.id)}></i>
                                        </td>

                                    </tr>

                                </tbody>
                            })}

                        </table>
                        <div className='d-flex justify-content-between'>
                            <Link to='/'>
                                <button type="button" className="btn btn-primary btn-lg py-2 px-2">Continue shopping</button>
                            </Link>
                            <button type="button" className=" btn-dark btn-lg" onClick={clearCart}>Clear shopping cart</button>
                        </div>



                        <div className="card mt-5  mb-5" style={{ width: '18rem' }}>
                           
                            <div className="card-body card-cart py-3 px-4">

                                <h5 className='text-capitalize color2'>Subtotal: <span style={{ fontSize: '18px' }}>  ${subTotal}</span></h5>
                                <p className='text-capitalize color1' >shipping Fee:   <span style={{ fontSize: '18px'}}>${shippingFee}</span></p>
                                <hr />
                                <h5 className='text-capitalize color2'>OrderTotal: <span style={{ fontSize: '18px' }}>${totalOrder}</span> </h5>

                            </div>
                            <div className='mt-3'>
                            <button type="button" className="btn btn-primary btn-lg px-5" style={{ width: '17rem' }}>Log in</button>
                            </div>
                        </div>
                    </div>
                ) : <div className='text-center not-found'>
                    <h3 className='text-danger'>No product found.</h3>
                    <Link to='/products'>
                        <button type="button" className="btn btn-primary btn-lg px-3 py-1" >Fill it up</button>
                    </Link>
                </div>
                }
            </>
        )
    }

    export default Cart