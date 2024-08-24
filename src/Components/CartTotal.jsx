import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import {Title} from './Components';
const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculateTotal = async () => {
      const cartAmount = await getCartAmount();
      setTotalAmount(cartAmount + delivery_fee);
    };

    calculateTotal();
  }, [getCartAmount, delivery_fee]);

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h3 className="text-lg font-medium mb-4"><Title text1={'Order'} text2={'Summary '}/></h3>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>{currency}{totalAmount - delivery_fee}.00</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Delivery Fee</span>
        <span>{currency}{delivery_fee}.00</span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>{currency}{totalAmount}.00</span>
      </div>
    </div>
    
  );
};

export default CartTotal;
