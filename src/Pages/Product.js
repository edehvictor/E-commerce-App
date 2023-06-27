import React, { useContext, useState } from 'react'
import { ProductContext } from '../Context/ProductContext'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart,  } from '../Store/CartSlice'


const Product = () => {
  const { filterData } = useContext(ProductContext)
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [increaseItemQty, setIncreaseItemQty] = useState(1)

  const product = filterData.find((product) => product.id === id);

  function backToProduct() {
    navigate(-1)
  }


  const cartItems = useSelector((state) => state.cart.itemList)
  // console.log(cartItems)

  const addToCartFn = () => {
    const arg2 = increaseItemQty

    const arg1 = {
      id: product?.id,
      name: product?.name,
      price: product?.price,
      quantity: arg2
    }
    dispatch(addToCart(arg1, arg2))
  }


  const incrementQty = () => {
    setIncreaseItemQty(increaseItemQty + 1)
  }

  const decrementQty = () => {
    if (increaseItemQty === 1) {
       setIncreaseItemQty(1);
    } else {
      setIncreaseItemQty(increaseItemQty - 1)
    }
  };


  return (
    <>
      {product ? (
        <div style={{ backgroundColor: '#FFFFFF' }} className='about'>
          <div style={{ backgroundColor: '#EADED7', width: '100%' }} className='p-3'>
            <h1 className='about-home' >Home/<span className='about-home'>Products</span>/<span className='color3 text-capitalize'>{product?.name}</span></h1>
          </div>

          <div className='m-3'>
            <button type="button" className="btn btn-primary btn-lg p-2" onClick={backToProduct}>Back to Products</button>
          </div>


          <div className="row py-5">
            <div className="col-6">
              <img src={product?.image} alt="" style={{ width: '100%', objectFit: 'cover' }} />
            </div>


            <div className="col-6">
              <div>
                <h2 className='color1 text-capitalize'>{product?.name}</h2>
                <h3 className='color1'>${product?.price}</h3>
              </div>
              <div className='text-left'>
                <p className='color2 text-capitalize '>
                  {product?.description}
                </p>
                <div>
                  <h5 className='text-capitalize color1'>Available: <span style={{ fontSize: '18px' }}>  In Stock</span></h5>
                  <h5 className='text-capitalize color1' >SKU:   <span style={{ fontSize: '18px', }}>{product?.id}</span></h5>
                  <h5 className='text-capitalize color1'>Brand: <span style={{ fontSize: '18px' }}> {product?.category}</span> </h5>
                </div>

                <div>
                  <span className='fs-4' style={{ cursor: 'pointer' }} onClick={decrementQty}>-</span>
                  <span className='fs-4'>{increaseItemQty}</span>
                  <span className='fs-4' onClick={incrementQty} style={{ cursor: 'pointer' }}>+</span>
                </div>

                <Link to='/cart' className='m-3'>
                  <button type="button" className="btn btn-primary btn-lg p-2" onClick={addToCartFn} >Add to cart</button>
                </Link>

              </div>

            </div>
          </div>
        </div>
      ) :<div className='not-found'>
         <p className='text-danger'>No product found!</p>
         </div>
      }
    </>
  )
}

export default Product