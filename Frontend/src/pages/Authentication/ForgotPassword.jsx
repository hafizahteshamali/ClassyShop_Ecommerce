import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { postReq } from '../../api/axios';

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const emailValue = watch('email');

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      
      const response = await postReq('/auth/forgot-password', {
        email: data.email
      });

      if (response.success) {
        setEmailSent(true);
        // Store email for OTP verification page
        sessionStorage.setItem('email', data.email);
        
        // Redirect to OTP verification after 2 seconds
        setTimeout(() => {
          navigate('/verify-email-forgot-password');
        }, 2000);
      }

    } catch (error) {
      console.error('Forgot Password Error:', error);
      alert(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-md w-full bg-white p-5 rounded-lg">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gray-700 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaEnvelope className="text-4xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Forgot Password?</h1>
          <p className="text-gray-600">
            No worries! Enter your email and we'll send you a reset code.
          </p>
        </div>

        {/* Success Message */}
        {emailSent ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <div className="text-green-600 text-5xl mb-3">✓</div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">Email Sent!</h3>
            <p className="text-green-700 mb-4">
              We've sent a password reset code to your email.
            </p>
            <p className="text-sm text-green-600">
              Redirecting to verification page...
            </p>
          </div>
        ) : (
          /* Form */
          <div className="bg-white rounded-lg p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !emailValue}
                className="w-full bg-gray-700 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Reset Code'}
              </button>

              {/* Note */}
              <p className="text-xs text-center text-gray-500 mt-4">
                We'll send a 6-digit verification code to your email.
              </p>
            </form>
          </div>
        )}

        {/* Help Text */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Remember your password?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;