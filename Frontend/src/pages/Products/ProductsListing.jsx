import { useEffect, useState } from "react";
import { getReq } from "../../api/axios";
import FilterSidebar from "./elements/FilterSidebar";
import ProductItem from "../../components/ProductItem";

const ProductsListing = () => {

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isCategories, setIsCategories] = useState([]);

  const getProductsData = async () => {
    try {
      setLoading(true)
      const response = await getReq(isCategories.length === 0 ? `/products?page=${page}&limit=12` : `/products?category=${isCategories.join(",")}&page=${page}&limit=12`)
      setProducts(response?.products);
      setTotalPages(response?.pages)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  // 🔹 Scroll to top on page change
  useEffect(() => {
    getProductsData();
  }, [page, isCategories]);

  return (
    <div className="bg-white">
      <div className="container mx-auto">

        <div className="flex flex-col lg:flex-row gap-3 py-5">
          {/* Sidebar */}
          <div className="lg:w-[23%]">
            <FilterSidebar setIsCategories={setIsCategories} isCategories={isCategories} />
          </div>

          {/* Products Section */}
          <div className="lg:w-[75%]">
            {loading ? (
              <div className="text-center py-20 text-lg font-semibold">
                Loading...
              </div>
            ) : (
              <>
                <div className="flex flex-wrap gap-2 justify-between">
                  {products.length > 0 ? (
                    products.map((product) => (
                      <div
                        className="w-full sm:w-[48%] md:w-[32%]"
                        key={product._id}
                      >
                        <ProductItem data={product} />
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-20 text-lg">
                      No Products Found
                    </div>
                  )}
                </div>

                {totalPages > 0 && (
                  <div className="w-full my-5 flex justify-center items-center">
                  <button disabled={page === 1} onClick={() => setPage(page - 1)} className={`py-1 rounded px-3 border ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-black text-white'}`}>prev</button>

                  {[...Array(totalPages)].map((_, index) => (
                    <button onClick={() => setPage(index + 1)} className={`h-[40px] w-[40px] mx-1 flex justify-center items-center rounded border ${page === index + 1 ? 'bg-black text-white' : 'bg-gray-200'}`}>{index + 1}</button>
                  ))}

                  <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className={`py-1 rounded px-3 border ${page === totalPages ? 'opacity-50 cursor-not-allowed' : 'bg-black text-white'}`}>next</button>
                </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsListing;
