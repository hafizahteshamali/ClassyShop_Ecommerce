import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { postReq } from '../../api/axios';
import { FaEnvelope, FaShieldAlt, FaKey } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';

const OTP_verification = () => {
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine verification type from URL
  const currentPath = window.location.pathname;
  const isSignupVerification = currentPath === '/verify-email-signup';
  const isForgotPasswordVerification = currentPath === '/verify-email-forgot-password';
  
  // Set API endpoint based on verification type
  const verifyEndpoint = isSignupVerification 
    ? '/auth/verify-otp-signup' 
    : '/auth/verify-forgot-password';
  
  // Set heading and description based on verification type
  const pageConfig = {
    heading: isSignupVerification ? 'Verify Email' : 'Reset Password',
    description: isSignupVerification 
      ? 'Enter the 6-digit code sent to your email' 
      : 'Enter the verification code sent to your email',
    icon: isSignupVerification ? FaShieldAlt : FaKey,
    successMessage: isSignupVerification 
      ? 'Email verified successfully!' 
      : 'Code verified successfully!',
    successRedirect: isSignupVerification ? '/login' : '/reset-password'
  };

  const email = location.state?.email || sessionStorage.getItem("email") || '';

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  // Timer for resend OTP
  useEffect(() => {
    let interval;
    if (timer > 0 && !canResend) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer, canResend]);

  // Focus first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return; // Only numbers allowed
    
    const newOtp = [...otpValues];
    newOtp[index] = value;
    setOtpValues(newOtp);
    setValue('otp', newOtp.join(''));

    // Auto-focus next input
    if (value !== '' && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && index > 0 && otpValues[index] === '') {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const digits = pastedData.split('');
      const newOtp = [...otpValues];
      digits.forEach((digit, index) => {
        if (index < 6) newOtp[index] = digit;
      });
      setOtpValues(newOtp);
      setValue('otp', newOtp.join(''));
      
      // Focus last filled input or next empty
      const lastFilledIndex = Math.min(digits.length - 1, 5);
      if (inputRefs.current[lastFilledIndex]) {
        inputRefs.current[lastFilledIndex].focus();
      }
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      
      // Get email from sessionStorage
      const email = sessionStorage.getItem("email");
      
      // Set purpose based on verification type
      const purpose = isSignupVerification ? "signup" : "forgot_password";
      
      const payload = {
        email: email,
        otp: data.otp,
        purpose: purpose  // ✅ purpose dynamically set: "signup" or "forgot-password"
      };

      console.log("Sending payload:", payload); // For debugging

      const response = await postReq(verifyEndpoint, payload);

      if (response.success) {
        // Clear OTP fields on success
        setOtpValues(['', '', '', '', '', '']);
        setValue('otp', '');
        
        // Navigate based on verification type
        if (isSignupVerification) {
          navigate('/login');
        } else {
          // For forgot password, store email and go to reset password
          sessionStorage.setItem('email', email);
          navigate('/reset-password');
        }
      }

    } catch (error) {
      console.error('Verification Error:', error);
      
      // Shake animation on error for visual feedback
      const formElement = document.querySelector('form');
      if (formElement) {
        formElement.classList.add('animate-shake');
        setTimeout(() => {
          formElement.classList.remove('animate-shake');
        }, 500);
      }
      
      // Clear OTP fields on error
      setOtpValues(['', '', '', '', '', '']);
      setValue('otp', '');
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
      
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    try {
      setLoading(true);
      
      const resendEndpoint = isSignupVerification 
        ? '/auth/resend-otp' 
        : '/auth/resend-forgot-password-otp';
      
      const purpose = isSignupVerification ? "signup" : "forgot-password";
      
      await postReq(resendEndpoint, { 
        email: email,
        purpose: purpose 
      });

      // Reset timer on successful resend
      setTimer(60);
      setCanResend(false);
      
      alert('OTP resent successfully!');

    } catch (error) {
      console.error('Resend OTP Error:', error);
      alert('Failed to resend OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackNavigation = () => {
    if (isSignupVerification) {
      navigate('/register');
    } else {
      navigate('/forgot-password');
    }
  };

  const IconComponent = pageConfig.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-blue-400 to-purple-500 opacity-10 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full opacity-10 -z-10"></div>
        
        {/* Header with animation */}
        <div className="text-center mb-8 animate-fadeInDown flex justify-center flex-col items-center">
          <div className="p-3 h-[100px] w-[100px] flex justify-center items-center bg-gray-700 rounded-full mb-4 shadow-lg">
            <IconComponent className='text-5xl text-white' />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-700">
            {pageConfig.heading}
          </h1>
          <p className="text-gray-700 mt-2">{pageConfig.description}</p>
          {email && (
            <div className="flex items-center mt-2 text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
              <FaEnvelope className="mr-2 text-gray-500" />
              <span>{email}</span>
            </div>
          )}
        </div>

        {/* Main Form Card */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-3xl animate-fadeInUp">
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            
            {/* OTP Input Fields */}
            <div className="flex flex-col items-center">
              <div className="flex justify-center gap-2 sm:gap-4 mb-4">
                {otpValues.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-700 hover:border-gray-400 transition-all duration-300"
                    disabled={loading}
                  />
                ))}
              </div>
              
              <input
                type="hidden"
                {...register('otp', {
                  required: 'OTP is required',
                  minLength: {
                    value: 6,
                    message: 'OTP must be 6 digits'
                  },
                  pattern: {
                    value: /^\d{6}$/,
                    message: 'OTP must contain only numbers'
                  }
                })}
              />
              
              {errors.otp && (
                <p className="text-xs text-red-500 mt-1 animate-bounce">{errors.otp.message}</p>
              )}

              {/* Timer & Resend */}
              <div className="text-center mt-4">
                {!canResend ? (
                  <p className="text-sm text-gray-600">
                    Resend code in <span className="font-bold text-gray-700">{timer}s</span>
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={handleResendOTP}
                    disabled={loading}
                    className="text-sm font-semibold text-gray-700 hover:text-gray-900 underline transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Resend Code
                  </button>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || otpValues.join('').length !== 6}
              className="w-full bg-gray-700 text-white py-4 px-4 rounded-xl font-bold text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </div>
              ) : 'Verify'}
            </button>

            {/* Back Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                {isSignupVerification ? "Didn't receive the code?" : "Wrong email?"}{' '}
                <button
                  type="button"
                  onClick={handleBackNavigation}
                  className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:underline"
                >
                  {isSignupVerification ? 'Go back to signup' : 'Go back'}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default OTP_verification;