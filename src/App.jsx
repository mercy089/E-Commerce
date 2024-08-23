import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import {Routes,Route } from 'react-router-dom'
import {Home,About,Cart,Collection,Contact,Login,Orders,PlaceOrder,Product} from "./Pages/Pages"
import {Navbar,Footer } from './Components/Components'
import SearchBar from './Components/SearchBar'
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7px] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar />
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/product/:productId' element={<Product />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
