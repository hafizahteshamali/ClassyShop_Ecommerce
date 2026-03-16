import React, { useEffect, useState } from 'react'
import { getReq } from '../../../../api/axios'
import ProductItem from '../../../../components/ProductItem'
import RingLoader from "react-spinners/RingLoader";

const TShirt = () => {
  const [isTshirtProducts, setIsTshirtProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTShirtProduct = async () =>{
    try {
      setIsLoading(true);
      const response = await getReq(`/products?category=t-shirt&limit=15`);
      setIsTshirtProducts(response.products || []);
    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    getTShirtProduct();
  },[])

  return (
    <div className='bg-white'>
    <div className='container mx-auto'>
          {isLoading ? <div className='w-full flex justify-center items-center'><RingLoader /></div> : (
        <div className='w-full flex lg:justify-between justify-center items-center flex-wrap gap-y-5 py-10'>
            {isTshirtProducts.map((item)=>(
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

export default TShirt