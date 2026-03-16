import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoCart } from "react-icons/io5";
import { postReq } from "../api/axios";
import { toast } from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import { setCart } from "../store/cartSlice";

const ProductItem = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProducts = useSelector((state)=>state?.cart);

  const {
    category,
    discountedPrice,
    images = [],
    brand,
    name,
    price,
    _id
  } = data || {};

  const categoryName = typeof category === "object" ? category?.name : category;

  if (!data || !_id) return null;

  const handleAddToCart = async (productId) =>{
    try {
      const token = sessionStorage.getItem("token");
      if(token){
        const response = await postReq("/cart/add", {
          productId: productId,
          quantity: quantity
        })
        dispatch(setCart(response?.cart))
      }else{
        toast.error("please loggin by your account before shopping")
        setTimeout(()=>{
          navigate('/login')
        }, 1000)
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className="rounded-xl border overflow-hidden border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Image Container */}
      <div className="w-full h-[280px] relative overflow-hidden bg-gray-100">
          {brand && (
            <span className="absolute left-3 top-3 bg-white/90 backdrop-blur-sm py-1.5 px-4 rounded-full z-20 text-sm font-semibold text-gray-700 hover:text-[#ff5252] transition-all duration-300 shadow-md">{brand}</span>
          )}
        {/* Main Image */}
        {images[0]?.url && (
          <img
            src={images[0].url}
            className={`w-full h-full object-contain transition-all duration-500 ${
              isHovered ? "opacity-0 scale-110" : "opacity-100"
            }`}
            alt={name}
          />
        )}

        {/* Hover Image */}
        {images[1]?.url && (
          <img
            src={images[1].url}
            className={`absolute top-0 left-0 w-full h-full object-contain transition-all duration-500 ${
              isHovered ? "opacity-100 scale-110" : "opacity-0"
            }`}
            alt={name}
          />
        )}

      </div>

      {/* Product Info */}
      <div className="p-4">

        {/* Category */}
        {categoryName && (
          <p className="text-xs text-gray-500 uppercase">
            {categoryName}
          </p>
        )}

        {/* Product Name */}
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          <Link to={`/product/${_id}`}>
            {name}
          </Link>
        </h3>

        {/* Price */}
        <div className="flex items-center justify-between gap-2 my-2">
          {discountedPrice && (
            <span className="text-lg font-bold text-red-500">
              Rs. {discountedPrice}
            </span>
          )}

          {price && discountedPrice && (
            <span className="text-sm text-gray-400 line-through">
              Rs. {price}
            </span>
          )}
        </div>

        {/* Add To Cart */}
        <button onClick={()=>handleAddToCart(_id)} className="w-full flex justify-center items-center gap-2 py-2 rounded-lg bg-red-500 text-white hover:bg-black transition">
          <IoCart />
          Add To Cart
        </button>

      </div>
    </div>
  );
};

export default ProductItem;