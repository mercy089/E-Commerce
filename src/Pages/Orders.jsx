import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Title } from '../Components/Components';

const Orders = () => {
  const { cartItem, products, currency } = useContext(ShopContext);

  // Get the list of items added to the cart
  const cartItems = Object.keys(cartItem);

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1='MY' text2='ORDERS' />
      </div>
      {cartItems.length === 0 ? (
        <p className='text-center text-gray-700 py-4'>No items in your order.</p>
      ) : (
        cartItems.map((itemId) => {
          const product = products.find((product) => product._id === itemId);
          const sizes = Object.keys(cartItem[itemId]);

          return sizes.map((size) => (
            <div key={`${itemId}-${size}`} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img src={product.image[0]} alt={product.name} className='w-16 sm:w-20' />
                <div>
                  <p className='font-medium'>{product.name}</p>
                  <p>Size: {size}</p>
                  <p>Quantity: {cartItem[itemId][size]}</p>
                  <p>{currency}{product.price.toLocaleString()}</p>
                </div>
              </div>
              <div className='md:w1/2 flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                <p className='text-sm md:text-base'>Ready to ship</p>
              </div>
              </div>
              <div className='text-right md:text-left'>
                <p className='text-gray-500'>
                  Total: {currency}{(product.price * cartItem[itemId][size]).toLocaleString()}
                </p>
              </div>
              <div>
                <button className='border px-4 py-2 text-sm font-medium'>Track Order</button>
              </div>
            </div>
          ));
        })
      )}
    </div>
  );
};

export default Orders;
