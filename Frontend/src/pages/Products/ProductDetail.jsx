import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReq } from '../../api/axios';
import { 
  FaStar, 
  FaStarHalfAlt, 
  FaRegStar,
  FaHeart,
  FaShareAlt,
  FaTruck,
  FaShieldAlt,
  FaUndoAlt,
  FaCheckCircle,
  FaMinus,
  FaPlus,
  FaShoppingBag
} from 'react-icons/fa';
import { MdLocalOffer } from 'react-icons/md';
import { RiSecurePaymentFill } from 'react-icons/ri';

const ProductDetail = () => {
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const getSingleProduct = async () => {
        try {
            setIsLoading(true);
            const response = await getReq(`/products/${id}`);
            setSingleProduct(response.product);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getSingleProduct();
    }, [id]);

    const renderRatingStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
        }

        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
        }

        const remainingStars = 5 - stars.length;
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
        }

        return stars;
    };

    const handleQuantityChange = (type) => {
        if (type === 'increment' && quantity < singleProduct.stock) {
            setQuantity(prev => prev + 1);
        } else if (type === 'decrement' && quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (!singleProduct) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <p className="text-gray-500">Product not found</p>
            </div>
        );
    }

    const originalPrice = singleProduct.price;
    const discountedPrice = singleProduct.discountedPrice || singleProduct.price;
    const discountPercentage = originalPrice > discountedPrice 
        ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100) 
        : 0;

    return (
        <div className="bg-white min-h-screen py-8">
            <div className="container mx-auto px-4">
                {/* Breadcrumb */}
                <nav className="text-sm mb-8">
                    <ol className="list-none p-0 inline-flex">
                        <li className="flex items-center">
                            <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
                            <span className="mx-2 text-gray-400">/</span>
                        </li>
                        <li className="flex items-center">
                            <a href={`/category/${singleProduct.category.slug}`} className="text-gray-500 hover:text-gray-700">
                                {singleProduct.category.name}
                            </a>
                            <span className="mx-2 text-gray-400">/</span>
                        </li>
                        <li className="text-gray-900 font-medium">{singleProduct.name}</li>
                    </ol>
                </nav>

                {/* Main Product Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
                            <img
                                src={singleProduct.images[selectedImage]?.url || '/placeholder-image.jpg'}
                                alt={singleProduct.name}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        
                        {/* Thumbnail Images */}
                        {singleProduct.images.length > 1 && (
                            <div className="grid grid-cols-5 gap-2">
                                {singleProduct.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden border-2 transition-all
                                            ${selectedImage === index 
                                                ? 'border-black' 
                                                : 'border-transparent hover:border-gray-300'
                                            }`}
                                    >
                                        <img
                                            src={image.url}
                                            alt={`${singleProduct.name} ${index + 1}`}
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        {/* Brand and Title */}
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">{singleProduct.brand}</p>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{singleProduct.name}</h1>
                            
                            {/* Rating */}
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center space-x-1">
                                    {renderRatingStars(singleProduct.ratings.average)}
                                </div>
                                <span className="text-sm text-gray-600">
                                    ({singleProduct.ratings.count} reviews)
                                </span>
                                {singleProduct.isFeatured && (
                                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">
                                        Featured
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Price */}
                        <div className="border-y border-gray-200 py-4">
                            <div className="flex items-center space-x-3">
                                <span className="text-3xl font-bold text-gray-900">
                                    ₹{discountedPrice}
                                </span>
                                {originalPrice > discountedPrice && (
                                    <>
                                        <span className="text-lg text-gray-500 line-through">
                                            ₹{originalPrice}
                                        </span>
                                        <span className="px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded">
                                            {discountPercentage}% OFF
                                        </span>
                                    </>
                                )}
                            </div>
                            <p className="text-sm text-green-600 mt-1">Inclusive of all taxes</p>
                        </div>

                        {/* Colors */}
                        {singleProduct.colors && singleProduct.colors.length > 0 && (
                            <div>
                                <h3 className="text-sm font-medium text-gray-900 mb-3">Colors</h3>
                                <div className="flex flex-wrap gap-2">
                                    {singleProduct.colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                                                ${selectedColor === color
                                                    ? 'bg-black text-white'
                                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                                }`}
                                        >
                                            {color.charAt(0).toUpperCase() + color.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Sizes */}
                        {singleProduct.sizes && singleProduct.sizes.length > 0 && (
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                    <button className="text-sm text-gray-500 hover:text-gray-700">
                                        Size Guide
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {singleProduct.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`w-12 h-12 rounded-lg border text-sm font-medium transition-all
                                                ${selectedSize === size
                                                    ? 'border-black bg-black text-white'
                                                    : 'border-gray-300 text-gray-700 hover:border-gray-400'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={() => handleQuantityChange('decrement')}
                                    disabled={quantity <= 1}
                                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center
                                        hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <FaMinus size={14} />
                                </button>
                                <span className="w-12 text-center font-medium">{quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange('increment')}
                                    disabled={quantity >= singleProduct.stock}
                                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center
                                        hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <FaPlus size={14} />
                                </button>
                                <span className="text-sm text-gray-500">
                                    {singleProduct.stock} units available
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <button className="flex-1 bg-black text-white px-6 py-3 rounded-lg font-medium
                                hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                                <FaShoppingBag />
                                <span>Buy Now</span>
                            </button>
                            <button className="flex-1 bg-white text-black border-2 border-black px-6 py-3 rounded-lg font-medium
                                hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                                <span>Add to Cart</span>
                            </button>
                            <button className="p-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors">
                                <FaHeart size={20} />
                            </button>
                            <button className="p-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors">
                                <FaShareAlt size={20} />
                            </button>
                        </div>

                        {/* Key Features */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                            <div className="text-center">
                                <FaTruck className="mx-auto text-2xl text-gray-600 mb-2" />
                                <p className="text-xs text-gray-600">Free Delivery</p>
                            </div>
                            <div className="text-center">
                                <FaUndoAlt className="mx-auto text-2xl text-gray-600 mb-2" />
                                <p className="text-xs text-gray-600">30 Days Return</p>
                            </div>
                            <div className="text-center">
                                <RiSecurePaymentFill className="mx-auto text-2xl text-gray-600 mb-2" />
                                <p className="text-xs text-gray-600">Secure Payment</p>
                            </div>
                            <div className="text-center">
                                <FaShieldAlt className="mx-auto text-2xl text-gray-600 mb-2" />
                                <p className="text-xs text-gray-600">1 Year Warranty</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Details Tabs */}
                <div className="mt-16">
                    <div className="border-b border-gray-200">
                        <nav className="flex space-x-8">
                            <button className="py-4 px-1 border-b-2 border-black font-medium text-sm">
                                Description
                            </button>
                            <button className="py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700">
                                Specifications
                            </button>
                            <button className="py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700">
                                Reviews ({singleProduct.ratings.count})
                            </button>
                        </nav>
                    </div>
                    
                    <div className="py-6">
                        <p className="text-gray-700 leading-relaxed">
                            {singleProduct.description}
                        </p>
                        
                        {/* Tags */}
                        {singleProduct.tags && singleProduct.tags.length > 0 && (
                            <div className="mt-6">
                                <h4 className="text-sm font-medium text-gray-900 mb-3">Tags</h4>
                                <div className="flex flex-wrap gap-2">
                                    {singleProduct.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Delivery & Returns Info */}
                <div className="mt-12 bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Delivery & Returns</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-start space-x-3">
                            <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                            <div>
                                <p className="font-medium">Free Delivery</p>
                                <p className="text-sm text-gray-600">Free delivery on orders above ₹999</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                            <div>
                                <p className="font-medium">30 Days Return</p>
                                <p className="text-sm text-gray-600">Easy returns and exchanges</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                            <div>
                                <p className="font-medium">Cash on Delivery</p>
                                <p className="text-sm text-gray-600">Available on all orders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;