import React, { useEffect, useState } from 'react'
import { getReq } from '../../../api/axios'

const FilterSidebar = ({setIsCategories, isCategories}) => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const response = await getReq("/v1/category/get-categories");
      setCategories(response?.categories);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  const handleCategories = (e)=>{
    const value = e.target.value;
    if(e.target.checked){
      setIsCategories((prev)=>[...prev, value])
    }else{
      setIsCategories((prev) => prev.filter((cat) => cat !== value));
    }
  }

  const uniqueCategories = categories.filter((cat) => cat.parent === null);

  return (
    <div className='min-h-screen bg-white shadow-xl p-6 border-r border-gray-200'>
      <div className='mb-8'>
        <h1 className='text-2xl font-bold text-gray-800 mb-2'>Categories</h1>
        <div className='w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full'></div>
      </div>

      <div className='space-y-4'>
        {uniqueCategories.map((cat, index) => (
          <label
            key={index}
            className='flex items-center group cursor-pointer'
          >
            <div className='relative flex items-center'>
              <input
                type="checkbox"
                value={cat.slug}
                onChange={handleCategories}
                className='w-5 h-5 accent-amber-500 rounded border-2 border-gray-300 
                         focus:ring-2 focus:ring-amber-300 focus:ring-offset-2
                         transition-all duration-200 cursor-pointer'
              />
            </div>
            <span className='ml-3 text-gray-700 group-hover:text-amber-600 
                           font-medium transition-colors duration-200 text-sm'>
              {cat.name}
            </span>
          </label>
        ))}

        {uniqueCategories.length === 0 && (
          <div className='text-center py-8 text-gray-400'>
            No categories available
          </div>
        )}
      </div>

      {/* Optional: Add a filter button */}
      <button className='mt-8 w-full bg-gradient-to-r from-amber-400 to-orange-400 
                       text-white font-semibold py-3 px-4 rounded-lg
                       hover:from-amber-500 hover:to-orange-500 
                       transform transition-all duration-200 
                       focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2
                       shadow-md hover:shadow-lg'>
        Apply Filters
      </button>
    </div>
  )
}

export default FilterSidebar