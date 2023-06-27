import React from 'react'
import ProductPage from '../Products/ProductPage';
import Buttons from '../Products/Buttons'
import { ProductContext } from '../../Context/ProductContext';
import { useContext } from 'react';



const Products = () => {
  const { fetchData, filterData, count, search, data, handleSearch, handleFIlter, sideLink, category, handlePriceHandler, priceRange, shipping, setShipping, handleShipping, clearFilter } = useContext(ProductContext)


  return (
    <div style={{ backgroundColor: '#FFFFFF' }} className='about'>
      <div style={{ backgroundColor: '#EADED7', width: '100%' }} className='p-3'>
        <h1 className='about-home' >Home/ <span className='about-page'>Products</span> </h1>
      </div>


      <div className="row py-5">
        <div className="col-2 ">
          <form className="my-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              autoFocus
              autoComplete='on'
              placeholder='Search...'
              style={{ width: '100%' }}
              value={search}
              onChange={handleSearch} />

          </form>
          <Buttons
            handleFIlter={handleFIlter}
            sideLink={sideLink}
          />
          <div className='company'>
            <h4 className='color2 my-2' >Company</h4>
            <select value={sideLink} onChange={(e) => handleFIlter(e.target.value)} className='color1' >
              <option value="All" className='color1'>All</option>
              <option value="ikea">Ikea</option>
              <option value="marcos">Marcos</option>
              <option value="liddy">liddy</option>
              <option value="caressa">caressa</option>
            </select>
          </div>

          <div className='price'>
            <h4 className='color2 my-2' >Price</h4>
            <p className='color2 my-2 lh-small' >${priceRange}</p>
            <input
              type='range'
              onChange={(e) => handlePriceHandler(e.target.value)}
              min={0}
              max={250099}
              step={1}
              value={priceRange}
            />
          </div>


          <div>
            <label className='color1'>Free shipping</label>
            <input type="checkbox" checked={shipping} onChange={(e) => handleShipping(e.target.checked)} />
          </div>
          <div >
            <p  className='my-2'>
              <button type="button" className="btn btn-primary btn-lg" onClick={clearFilter}>clear filter</button>
            </p>
          </div>
        </div>


        <div className="col-10 ">
          <div className="m-2">
            <i className="fas fa-th-large fa-2x text-center " ></i> <i className="  fas fa-table fa-2x text-center  "></i> <span className='fs-4 '>{count} products found.</span>
          </div>

          <ProductPage
            filterData={filterData}
            fetchData={fetchData}
            search={search}
            data={data}
            category={category}

          />

        </div>
      </div>
    </div>
  )
};

export default Products