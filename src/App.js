import React from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products/Products';
import Product from './Pages/Product'
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import { MyContextProvider } from './Context/ProductContext';

function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer/>
      </MyContextProvider>
    </div>
  );
}

export default App;
