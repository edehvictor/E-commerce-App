  import React, { useContext, } from 'react'
  import HeroBg from '../Assets/Hero-bg.jpeg'
  import HomeProducts from './HomeProducts'
  import { Link } from 'react-router-dom'
  import { ProductContext } from '../Context/ProductContext'

  const Home = () => {
    const { homeProducts } = useContext(ProductContext)
   
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 mt-5 hero text-start">
            <div className='py-3'>
              <h1 className='fw-bolder hello color2'>
                Design Your Comfort Zone
              </h1>
            </div>

            <div >
              <p className='lh-small  color1'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ipsum dolorum, repellat perspiciatis sequi sint nesciunt ipsam explicabo. Delectus, similique.
              </p>
            </div>
            <div>
              <Link to='/products'>
                <button type="button" className="btn   btn-primary btn-lg px-4 py-2">SHOP NOW</button>
              </Link>

            </div>
          </div>
          <div className="col-6 mt-1">
            <img src={HeroBg} alt="" style={{ objectFit: 'cover', height: "500px", width: '100%' }} />
          </div>

        </div>

        {/* feature product */}
        <section className='featured-product mt-5 p-5'>
          <h1 className='text-center color2'>Featured Products</h1>
          <div className='row'>
            <HomeProducts
              homeProducts={homeProducts} />
          </div>

        </section>

        {/* Mission/vision */}
        <section className='mission mt-5 p-5'>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="card p-3" style={{ width: '20rem', height: '310px' }}>
                  <div className="mission-icon text-center">
                    <i className="  fas fa-compass fa-2x text-center  "></i>
                  </div>
                  <div className="card-body text-wrap p-3">
                    <h5 className="card-title text-center fw-bolder">Mission</h5>
                    <p className="card-text ">Lorem ipsum,ok dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="card p-3" style={{ width: '20rem', height: '310px' }}>
                  <div className="mission-icon text-center">
                    <i className="  fas fa-low-vision  fa-2x   text-center"></i>
                  </div>
                  <div className="card-body text-wrap p-3">
                    <h5 className="card-title text-center fw-bolder">Vision</h5>
                    <p className="card-text ">Lorem ipsum,ok dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                  </div>

                </div>

              </div>
              <div className="col-4">
                <div className="card p-3" style={{ width: '22rem', height: '310px' }}>
                  <div className="mission-icon text-center">
                    <i className="  fas fa-history fa-2x text-center  "></i>
                  </div>
                  <div className="card-body text-wrap p-3">
                    <h5 className="card-title text-center fw-bolder">History</h5>
                    <p className="card-text ">Lorem ipsum,ok dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className='subscribe'>
          <div className="container py-5">
            <div className="row">
              <div className="col-6">
                <h3 className='color2'>Join our newsletter and get 20% off</h3>
                <p className='color1 '>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
              </div>
              <div className="col-6">
                <div className="input-group pt-1 mt-5">
                  <input type="text" className="form-control p-3" placeholder="Email..." />
                  <button className="btn btn-outline-secondary lh-small" type="button" id="button-addon2">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  export default Home