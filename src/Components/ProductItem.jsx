/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {

    const {currency} =useContext(ShopContext)
  return (
    <div>
      <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img src={image[0]} alt="" className='hover:scale-110 transition ease-in-out'/>
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='font-medium text-sm'>{currency}{price}</p>
      </Link>
    </div>
  )
}

export default ProductItem

