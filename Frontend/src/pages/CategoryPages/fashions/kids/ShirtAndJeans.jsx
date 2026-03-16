import React, { useEffect, useState } from 'react'
import { getReq } from '../../../../api/axios';
import ProductItem from '../../../../components/ProductItem';
import RingLoader from 'react-spinners/RingLoader';

const ShirtAndJeans = () => {
  const [isShirtAndJeans, setIsShirtAndJeans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getShirtAndJeans = async () => {
    try {
      setIsLoading(true)
      const response = await getReq(`/products?category=shirt-and-jeans&limit=12`)
      setIsShirtAndJeans(response?.products)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getShirtAndJeans();
  }, []);

  return (
    <div className='bg-white'>
      <div className="container mx-auto">
        {isLoading ? <div className='w-full flex justify-center items-center'><RingLoader /></div> : (
          <div className='w-full flex lg:justify-between justify-center items-center flex-wrap gap-y-5 py-10'>
            {isShirtAndJeans.map((item) => (
              <div key={item._id} className='w-[80%] sm:w-[48%] md:w-[31%] lg:w-[24%]'>
                <ProductItem data={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ShirtAndJeans