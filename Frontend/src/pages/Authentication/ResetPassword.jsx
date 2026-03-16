import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaLock, FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa";
import { postReq } from '../../api/axios';

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    message: ''
  });
  
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get email from location state or sessionStorage
  const email = location.state?.email || sessionStorage.getItem("email") || '';

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch('password', '');

  // Check password strength
  const checkPasswordStrength = (password) => {
    let score = 0;
    let message = '';

    if (password.length >= 8) score++;
    if (password.match(/[a-z]/)) score++;
    if (password.match(/[A-Z]/)) score++;
    if (password.match(/[0-9]/)) score++;
    if (password.match(/[^a-zA-Z0-9]/)) score++;

    switch(score) {
      case 0:
      case 1:
        message = 'Weak';
        break;
      case 2:
      case 3:
        message = 'Medium';
        break;
      case 4:
      case 5:
        message = 'Strong';
        break;
      default:
        message = '';
    }

    setPasswordStrength({ score, message });
  };

  // Handle password change
  const handlePasswordChange = (e) => {
    checkPasswordStrength(e.target.value);
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
        const email = sessionStorage.getItem("email");
      const payload = {
        email: email,
        newPassword: data.password
      };

      const response = await postReq('/auth/reset-password', payload);

      if (response.success) {
        // Clear session storage
        sessionStorage.removeItem('email');
        
        // Redirect to login page
        navigate('/login');
      }

    } catch (error) {
      console.error('Reset Password Error:', error);
      alert(error.response?.data?.message || 'Failed to reset password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Get password strength color
  const getStrengthColor = () => {
    switch(passwordStrength.message) {
      case 'Weak':
        return 'bg-red-500';
      case 'Medium':
        return 'bg-yellow-500';
      case 'Strong':
        return 'bg-green-500';
      default:
        return 'bg-gray-200';
    }
  };

  // If no email found
  if (!email) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Invalid Access</h2>
            <p className="text-gray-600 mb-6">No email found. Please start the password reset process again.</p>
            <button
              onClick={() => navigate('/forgot-password')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Go to Forgot Password
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md w-full bg-white p-5 rounded">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gray-700 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaLock className="text-4xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Reset Password</h1>
        </div>

        {/* Form */}
        <div className="rounded-lg p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* New Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter new password"
                  className={`w-full pl-10 pr-10 py-3 border ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters'
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: 'Password must contain at least one uppercase, one lowercase, one number and one special character'
                    }
                  })}
                  onChange={(e) => {
                    register('password').onChange(e);
                    handlePasswordChange(e);
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                  ) : (
                    <FaEye className="text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}

              {/* Password Strength Meter */}
              {password && (
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">Password Strength:</span>
                    <span className={`text-xs font-medium ${
                      passwordStrength.message === 'Weak' ? 'text-red-500' :
                      passwordStrength.message === 'Medium' ? 'text-yellow-500' :
                      passwordStrength.message === 'Strong' ? 'text-green-500' :
                      'text-gray-500'
                    }`}>
                      {passwordStrength.message}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getStrengthColor()} transition-all duration-300`}
                      style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Password Requirements */}
              <div className="mt-3 text-xs text-gray-600 space-y-1">
                <p className="flex items-center">
                  <FaCheckCircle className={`mr-2 ${password?.length >= 8 ? 'text-green-500' : 'text-gray-300'}`} />
                  At least 8 characters
                </p>
                <p className="flex items-center">
                  <FaCheckCircle className={`mr-2 ${/[a-z]/.test(password) ? 'text-green-500' : 'text-gray-300'}`} />
                  One lowercase letter
                </p>
                <p className="flex items-center">
                  <FaCheckCircle className={`mr-2 ${/[A-Z]/.test(password) ? 'text-green-500' : 'text-gray-300'}`} />
                  One uppercase letter
                </p>
                <p className="flex items-center">
                  <FaCheckCircle className={`mr-2 ${/[0-9]/.test(password) ? 'text-green-500' : 'text-gray-300'}`} />
                  One number
                </p>
                <p className="flex items-center">
                  <FaCheckCircle className={`mr-2 ${/[^a-zA-Z0-9]/.test(password) ? 'text-green-500' : 'text-gray-300'}`} />
                  One special character (@$!%*?&)
                </p>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm new password"
                  className={`w-full pl-10 pr-10 py-3 border ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: value => value === password || 'Passwords do not match'
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                  ) : (
                    <FaEye className="text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-700 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;