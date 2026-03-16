import React, { useEffect, useState } from 'react'
import ProductItem from '../../../../components/ProductItem';
import RingLoader from 'react-spinners/RingLoader';
import { getReq } from '../../../../api/axios';

const Samsung = () => {
  const [isSamsungPhone, setIsSamsungPhone] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSamsungPhone = async () => {
    try {
      setIsLoading(true)
      const response = await getReq(`/products?category=samsung&limit=12`)
      setIsSamsungPhone(response?.products);
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getSamsungPhone();
  }, []);

  return (
    <div className='bg-white'>
      <div className="container mx-auto">
        {isLoading ? <div className='w-full flex justify-center items-center'><RingLoader /></div> : (
          <div className='w-full flex lg:justify-between justify-center items-center flex-wrap gap-y-5 py-10'>
            {isSamsungPhone.map((item) => (
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

export default Samsung