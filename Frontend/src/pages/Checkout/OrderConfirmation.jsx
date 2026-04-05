import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getReq } from '../../api/axios';

const OrderConfirmation = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getSingleOrder = async () => {
        try {
            setLoading(true);
            const response = await getReq(`/order/confirmation/${id}`);
            console.log(response);
            
            // Check response structure
            if (response?.data?.success) {
                setOrder(response.data.order);
            } else if (response?.success) {
                setOrder(response.order);
            } else {
                setError("Order not found");
            }
        } catch (error) {
            console.log(error);
            setError(error.response?.data?.message || "Failed to fetch order");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            getSingleOrder();
        }
    }, [id]);

    // Format date function
    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-PK', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Get status badge color
    const getStatusBadge = (status) => {
        switch(status) {
            case 'processing':
                return 'bg-yellow-100 text-yellow-800';
            case 'shipped':
                return 'bg-blue-100 text-blue-800';
            case 'delivered':
                return 'bg-green-100 text-green-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    // Get payment status badge
    const getPaymentBadge = (status) => {
        return status === 'paid' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800';
    };

    // Calculate totals
    const calculateSubtotal = () => {
        if (!order?.items) return 0;
        return order.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    };

    const subtotal = calculateSubtotal();
    const shipping = subtotal > 10000 ? 150 : 0;
    const tax = subtotal * 0.18;
    const total = subtotal + shipping + tax;

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <p className="mt-2 text-gray-600">Loading order details...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md">
                    <div className="text-red-500 text-5xl mb-4">⚠️</div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Error</h2>
                    <p className="text-gray-600 mb-4">{error}</p>
                    <Link 
                        to="/" 
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Go to Home
                    </Link>
                </div>
            </div>
        );
    }

    if (!order) {
        return null;
    }

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Success Header */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6 text-center">
                    <div className="text-green-500 text-5xl mb-3">✓</div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        Order Confirmed!
                    </h1>
                    <p className="text-gray-600">
                        Thank you for your purchase. Your order has been successfully placed.
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 bg-white px-3 py-1 rounded border">
                        <span className="text-sm text-gray-500">Order ID:</span>
                        <span className="font-mono text-sm font-semibold text-gray-800">{order._id}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                        Placed on: {formatDate(order.createdAt)}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Items and Shipping */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Order Items */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                                Order Items
                            </h2>
                            <div className="space-y-4">
                                {order.items?.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center border-b border-gray-300 pb-4">
                                        <div className="flex gap-2 items-center">
                                            <div className='h-[80px] bg-gray-100 w-[100px] overflow-hidden rounded p-2'>
                                                <img src={item.product.images[0].url} alt="" className='h-[100%] w-[100%] object-contain' />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-800">
                                                {item.product?.name || 'Product'}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                Quantity: {item.quantity}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Price: Rs. {item.price?.toLocaleString()}
                                            </p>
                                            </div>
                                        </div>
                                        {/* <div className="text-right">
                                            <p className="font-bold text-gray-800">
                                                Rs. {(item.price * item.quantity)?.toLocaleString()}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                Rs. {item.price?.toLocaleString()} each
                                            </p>
                                        </div> */}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Shipping Address */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                                Shipping Address
                            </h2>
                            <div className="space-y-2">
                                <p className="text-gray-800">
                                    <span className="font-medium">Name:</span> {order.shippingAddress?.fullname}
                                </p>
                                <p className="text-gray-800">
                                    <span className="font-medium">Phone:</span> {order.shippingAddress?.phone}
                                </p>
                                <p className="text-gray-800">
                                    <span className="font-medium">Address:</span> {order.shippingAddress?.address}
                                </p>
                                <p className="text-gray-800">
                                    <span className="font-medium">City:</span> {order.shippingAddress?.city} - {order.shippingAddress?.postalCode}
                                </p>
                                <p className="text-gray-800">
                                    <span className="font-medium">Country:</span> {order.shippingAddress?.country}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow p-6 sticky top-8">
                            <h2 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                                Order Summary
                            </h2>

                            {/* Status Badges */}
                            <div className="mb-4 space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Order Status:</span>
                                    <span className={`px-2 py-1 rounded text-sm font-medium ${getStatusBadge(order.orderStatus)}`}>
                                        {order.orderStatus?.toUpperCase()}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Payment Status:</span>
                                    <span className={`px-2 py-1 rounded text-sm font-medium ${getPaymentBadge(order.paymentStatus)}`}>
                                        {order.paymentStatus?.toUpperCase()}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Payment Method:</span>
                                    <span className="text-gray-800 font-medium">
                                        {order.paymentMethod === 'COD' ? 'COD' : 'Card Payment'}
                                    </span>
                                </div>
                            </div>

                            {/* Price Breakdown */}
                            <div className="space-y-2 border-t border-gray-300 pt-4">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal:</span>
                                    <span>Rs. {subtotal?.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping:</span>
                                    <span>Rs. {shipping?.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Tax (18% GST):</span>
                                    <span>Rs. {tax?.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-xl font-bold text-gray-800 pt-2 border-t border-gray-300">
                                    <span>Total:</span>
                                    <span className="text-blue-600">Rs. {Math.ceil(total)?.toLocaleString()}</span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="mt-6 space-y-3">
                                <button 
                                    onClick={() => window.print()}
                                    className="w-full border border-blue-600 text-blue-600 py-2 rounded font-semibold hover:bg-blue-50 transition"
                                >
                                    🖨️ Print Order
                                </button>
                                <Link 
                                    to="/" 
                                    className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition text-center block"
                                >
                                    Continue Shopping
                                </Link>
                            </div>

                            <p className="text-xs text-gray-500 text-center mt-4">
                                For any questions, contact support
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;