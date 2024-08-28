import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Title } from './Components';

const CartTotal = () => {
  // Accessing necessary values and functions from ShopContext
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  // State to hold the total amount including delivery fee
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Function to calculate the total amount
    const calculateTotal = async () => {
      // Get the current cart amount
      const cartAmount = await getCartAmount();
      
      // Update the total amount state by adding the delivery fee
      setTotalAmount(cartAmount + delivery_fee);
    };

    calculateTotal(); // Call the calculation function
  }, [getCartAmount, delivery_fee]); // Effect dependencies to run when getCartAmount or delivery_fee changes

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      {/* Section title */}
      <h3 className="text-lg font-medium mb-4">
        <Title text1={'Order'} text2={'Summary '} />
      </h3>
      
      {/* Display subtotal (without delivery fee) */}
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>{currency}{totalAmount - delivery_fee}.00</span>
      </div>
      
      {/* Display delivery fee */}
      <div className="flex justify-between mb-2">
        <span>Delivery Fee</span>
        <span>{currency}{delivery_fee}.00</span>
      </div>

      <hr className="my-2" />
      
      {/* Display total amount (including delivery fee) */}
      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>{currency}{totalAmount}.00</span>
      </div>
    </div>
  );
};

export default CartTotal;
