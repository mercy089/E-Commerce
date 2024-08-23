import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Title, ProductItem } from './Components';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]); // Ensure to include products as a dependency if it's changing

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={"LATEST"} text2={"COLLECTION"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Discover the latest trends and timeless pieces from our newest collection. Elevate your style today.
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProducts.map((items, index) => (
                    <ProductItem 
                        key={index}
                        id={items._id}
                        image={items.image}
                        name={items.name}
                        price={items.price} 
                    />
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;
