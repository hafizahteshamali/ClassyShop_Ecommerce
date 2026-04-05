import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FiUser,
  FiPhone,
  FiMapPin,
  FiTruck,
  FiCreditCard,
  FiShield,
  FiCheckCircle,
  FiHome,
  FiNavigation,
} from "react-icons/fi";
import {
  FaGlobeAfrica,
  FaMoneyBillWaveAlt,
  FaRegCreditCard,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { postReq } from "../../api/axios";
import {useNavigate} from "react-router-dom";
import { clearCart } from "../../store/cartSlice";

const Checkout = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("COD");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cart, product } = useSelector((state) => state);

  const cartData = cart.items.map((cartItem) => {
    const productItem = product.product.find((p) => p._id === cartItem.product);
    return { ...productItem, quantity: cartItem.quantity };
  });

  const SubTotal = cartData.reduce((result, acc) => {
    return result + acc.discountedPrice * acc.quantity;
  }, 0);

  const shippingCharges = SubTotal > 10000 ? 150 : 0;
  const taxCharges = (SubTotal * 18) / 100;
  const totalCharges = SubTotal + shippingCharges + taxCharges;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
    },
  });

const onSubmit = async (data) => {
  setIsSubmitting(true);

  try {
    const payload = {
      shippingAddress: {
        fullname: data.fullname,
        phone: data.phone,
        address: data.address,
        city: data.city,
        postalCode: data.postalCode,
        country: data.country,
      },
      paymentMethod: selectedPaymentMethod
    };

    const response = await postReq("/order/create", payload);
    console.log("order response: ", response);

    if (response.success) {

      // ✅ STRIPE case
      if (selectedPaymentMethod === "STRIPE") {
        window.location.href = response.url; 
        dispatch(clearCart());
        // 👆 better than navigate (full redirect to Stripe)
      }

      // ✅ COD case
      else if (selectedPaymentMethod === "COD") {
        dispatch(clearCart());
        navigate(`/order-confirmation/${response?.order?._id}`);
      }
    }

  } catch (error) {
    console.log(error);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg mb-8 p-8">
          <h1 className="text-4xl font-bold text-white text-center mb-2">
            Checkout
          </h1>
          <p className="text-blue-100 text-center">
            Complete your purchase securely
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Section */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Shipping Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <FiTruck className="text-2xl text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    Shipping Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        {...register("fullname", {
                          required: "Full name is required",
                          minLength: {
                            value: 3,
                            message: "Name must be at least 3 characters",
                          },
                        })}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ahtesham Ali"
                      />
                    </div>
                    {errors.fullname && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.fullname.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[0-9]{11}$/,
                            message: "Please enter a valid 11-digit phone number",
                          },
                        })}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="03301234567"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <div className="relative">
                      <FiMapPin className="absolute left-3 top-3 text-gray-400" />
                      <input
                        {...register("address", {
                          required: "Street address is required",
                        })}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="123 Main Street, Apartment 4B"
                      />
                    </div>
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.address.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <div className="relative">
                      <FiHome className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        {...register("city", { required: "City is required" })}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Karachi"
                      />
                    </div>
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.city.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Postal Code *
                    </label>
                    <div className="relative">
                      <FiNavigation className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        {...register("postalCode", {
                          required: "Postal code is required",
                          pattern: {
                            value: /^[0-9]{5}$/,
                            message: "Please enter a valid 5-digit postal code",
                          },
                        })}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="400001"
                      />
                    </div>
                    {errors.postalCode && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.postalCode.message}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <div className="relative">
                      <FaGlobeAfrica className="absolute left-3 top-3 text-gray-400" />
                      <input
                        {...register("country", {
                          required: "Country is required",
                        })}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Pakistan"
                      />
                    </div>
                    {errors.country && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.country.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <FiCreditCard className="text-2xl text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    Payment Method
                  </h2>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-gray-400 rounded-lg cursor-pointer hover:bg-gray-50 transition-all">
                    <input
                      type="radio"
                      value="COD"
                      checked={selectedPaymentMethod === "COD"}
                      onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="ml-3 flex items-center">
                      <FaMoneyBillWaveAlt className="text-xl text-green-600 mr-2" />
                      <div>
                        <span className="font-medium text-gray-800">
                          Cash on Delivery
                        </span>
                        <p className="text-sm text-gray-500">
                          Pay when you receive the order
                        </p>
                      </div>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border border-gray-400 rounded-lg cursor-pointer hover:bg-gray-50 transition-all">
                    <input
                      type="radio"
                      value="STRIPE"
                      checked={selectedPaymentMethod === "STRIPE"}
                      onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="ml-3 flex items-center">
                      <FaRegCreditCard className="text-xl text-purple-600 mr-2" />
                      <div>
                        <span className="font-medium text-gray-800">
                          Credit/Debit Card
                        </span>
                        <p className="text-sm text-gray-500">
                          Pay securely with Stripe
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Button - NOW INSIDE THE FORM */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  `Place Order • Rs: ${Math.ceil(totalCharges)}`
                )}
              </button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">
                Order Summary
              </h2>

              {/* Cart Items Preview */}
              <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">
                {cartData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex justify-start gap-3.5 items-center lg:w-[70%]">
                      <div className="p-3 bg-gray-100 h-15 w-15 rounded overflow-hidden flex justify-center items-center">
                        <img
                          src={item.images[0].url}
                          className="object-cover w-full h-full"
                          alt=""
                        />
                      </div>
                      <div className="lg:w-[70%] flex-col justify-center items-start">
                        <p className="text-sm font-semibold">
                          {item.name.slice(0, 30)}...
                        </p>
                        <span className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        Rs: {item.discountedPrice * item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 border-t pt-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>Rs: {SubTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>
                    Rs:{" "}
                    {shippingCharges === 0 ? "0" : shippingCharges.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (18% GST)</span>
                  <span>Rs: {taxCharges.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-800 pt-2 border-t">
                  <span>Total</span>
                  <span className="text-blue-600">
                    Rs: {Math.ceil(totalCharges)}
                  </span>
                </div>
              </div>

              {/* Security Badges */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center text-sm text-green-600">
                  <FiCheckCircle className="mr-2" />
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <FiShield className="mr-2" />
                  <span>Buyer Protection</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                By placing your order, you agree to our Terms of Service and
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;