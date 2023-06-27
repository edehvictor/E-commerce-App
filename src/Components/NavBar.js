    import React from 'react'
    import { Link } from 'react-router-dom'
    import Logo from '../Assets/Logo.svg'
    import { useSelector } from 'react-redux'

    const NavBar = () => {
        const cartItem = useSelector((state) => state.cart.itemList)

        let total = 0
        cartItem.forEach(element => {
            total +=element.quantity
        });
        return (
            <nav className="navbar navbar-expand-lg mt-3 mb-4">
                <div className="container-fluid">

                    <div className="logo-box">
                        <Link className="navbar-brand" to="/">
                            <img src={Logo} alt="" width="200px" />
                        </Link>
                    </div>
                

                    <div className="" >
                        <ul className="navbar-nav   ">
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/products">Products</Link>
                            </li>
                        </ul>
                    </div>

                    <div className=" " >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link fs-4 position-relative" to="/cart">Cart
                                    <i className="  fas fa-cart-arrow-down  "><span className="position-absolute top-0  start-100 translate-middle badge rounded-circle bg-danger ">
                              {total}
                                    </span></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-4" to="/">Register<i className="  fas fa-user-plus  "></i></Link>


                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }

    export default NavBar