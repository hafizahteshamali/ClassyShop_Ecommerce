import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { postReq } from '../../api/axios';
import { FaUserAlt } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [profilePreview, setProfilePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      profile: null
    }
  });

  const watchPassword = watch('password');

  // Password strength calculator
  useEffect(() => {
    if (!watchPassword) {
      setPasswordStrength(0);
      return;
    }
    
    let strength = 0;
    if (watchPassword.length >= 8) strength += 1;
    if (/[A-Z]/.test(watchPassword)) strength += 1;
    if (/[a-z]/.test(watchPassword)) strength += 1;
    if (/[0-9]/.test(watchPassword)) strength += 1;
    if (/[^A-Za-z0-9]/.test(watchPassword)) strength += 1;
    
    setPasswordStrength(strength);
  }, [watchPassword]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        alert('Invalid file type. Please upload JPG, PNG, or GIF.');
        return;
      }
      
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePreview(reader.result);
      };
      reader.onerror = () => {
        alert('Error reading file');
      };
      reader.readAsDataURL(file);
      setValue('profile', file, { shouldValidate: true });
    }
  };

  const getStrengthColor = () => {
    if (passwordStrength <= 2) return 'bg-red-500';
    if (passwordStrength <= 3) return 'bg-yellow-500';
    if (passwordStrength <= 4) return 'bg-green-500';
    return 'bg-green-600';
  };

  const getStrengthText = () => {
    if (passwordStrength <= 2) return 'Weak';
    if (passwordStrength <= 3) return 'Medium';
    if (passwordStrength <= 4) return 'Strong';
    return 'Very Strong';
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append('firstname', data.firstname.trim());
      formData.append('lastname', data.lastname.trim());
      formData.append('email', data.email.trim().toLowerCase());
      formData.append('password', data.password);
      
      if (data.profile) {
        formData.append('profile', data.profile);
      }

      const response = await postReq('/auth/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if(response.success){
        sessionStorage.setItem("email", response.user.email);
        navigate("/verify-email-signup")
      }

    } catch (error) {
      console.error('Signup Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-blue-400 to-purple-500 opacity-10 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full opacity-10 -z-10"></div>
        
        {/* Header */}
        <div className="text-center mb-8 animate-fadeInDown flex justify-center flex-col items-center">
          <h1 className="text-4xl font-extrabold text-gray-700">
            Create Account
          </h1>
          <p className="text-gray-700 mt-2">Join our community and start your journey!</p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-3xl animate-fadeInUp">
          
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="space-y-6">
            
            {/* Profile Image Upload */}
            <div className="flex flex-col items-center">
              <div className="relative mb-4 group">
                <div className="w-28 h-28 rounded-full bg-gray-700 p-1">
                  <div className="w-full h-full rounded-full bg-white overflow-hidden">
                    {profilePreview ? (
                      <img 
                        src={profilePreview} 
                        alt="Profile" 
                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <FaUserAlt className='text-5xl text-gray-600' />
                      </div>
                    )}
                  </div>
                </div>
                
                <label 
                  htmlFor="profile" 
                  className="absolute bottom-0 right-0 bg-gray-700 rounded-full p-3 cursor-pointer shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl group"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Upload Profile Picture
                  </span>
                </label>
                
                <input
                  type="file"
                  id="profile"
                  accept="image/jpeg,image/jpg,image/png,image/gif"
                  className="hidden"
                  {...register('profile')}
                  onChange={handleImageChange}
                />
              </div>
              
              {errors.profile && (
                <p className="text-xs text-red-500 mt-1">{errors.profile.message}</p>
              )}
              
              <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                JPG, PNG, GIF (Max 5MB)
              </span>
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className={`w-full px-4 py-3 pl-10 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                      errors.firstname 
                        ? 'border-red-300 bg-red-50 focus:border-red-500' 
                        : 'border-gray-200 focus:border-blue-500 hover:border-blue-300'
                    }`}
                    placeholder="John"
                    {...register('firstname', {
                      required: 'First name is required',
                      minLength: {
                        value: 2,
                        message: 'First name must be at least 2 characters'
                      },
                      maxLength: {
                        value: 50,
                        message: 'First name must be less than 50 characters'
                      },
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: 'Only letters and spaces are allowed'
                      }
                    })}
                  />
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                {errors.firstname && (
                  <p className="text-xs text-red-500 mt-1">{errors.firstname.message}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className={`w-full px-4 py-3 pl-10 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                      errors.lastname 
                        ? 'border-red-300 bg-red-50 focus:border-red-500' 
                        : 'border-gray-200 focus:border-blue-500 hover:border-blue-300'
                    }`}
                    placeholder="Doe"
                    {...register('lastname', {
                      required: 'Last name is required',
                      minLength: {
                        value: 2,
                        message: 'Last name must be at least 2 characters'
                      },
                      maxLength: {
                        value: 50,
                        message: 'Last name must be less than 50 characters'
                      },
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: 'Only letters and spaces are allowed'
                      }
                    })}
                  />
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                {errors.lastname && (
                  <p className="text-xs text-red-500 mt-1">{errors.lastname.message}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  className={`w-full px-4 py-3 pl-10 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                    errors.email 
                      ? 'border-red-300 bg-red-50 focus:border-red-500' 
                      : 'border-gray-200 focus:border-blue-500 hover:border-blue-300'
                  }`}
                  placeholder="john.doe@example.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address'
                    },
                    maxLength: {
                      value: 100,
                      message: 'Email must be less than 100 characters'
                    }
                  })}
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password with Strength Meter */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  className={`w-full px-4 py-3 pl-10 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                    errors.password 
                      ? 'border-red-300 bg-red-50 focus:border-red-500' 
                      : 'border-gray-200 focus:border-blue-500 hover:border-blue-300'
                  }`}
                  placeholder="••••••••"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters'
                    },
                    validate: {
                      hasUppercase: (value) => /[A-Z]/.test(value) || 'Password must contain at least one uppercase letter',
                      hasLowercase: (value) => /[a-z]/.test(value) || 'Password must contain at least one lowercase letter',
                      hasNumber: (value) => /\d/.test(value) || 'Password must contain at least one number'
                    }
                  })}
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>

              {/* Password Strength Meter */}
              {watchPassword && watchPassword.length > 0 && (
                <div className="mt-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getStrengthColor()} transition-all duration-500`}
                        style={{ width: `${(passwordStrength / 5) * 100}%` }}
                      ></div>
                    </div>
                    <span className="ml-3 text-xs font-semibold text-gray-600">
                      {getStrengthText()}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <p className={`flex items-center ${watchPassword?.length >= 8 ? 'text-green-600' : 'text-gray-500'}`}>
                      <svg className={`w-4 h-4 mr-1 ${watchPassword?.length >= 8 ? 'text-green-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      8+ characters
                    </p>
                    <p className={`flex items-center ${/[a-z]/.test(watchPassword) ? 'text-green-600' : 'text-gray-500'}`}>
                      <svg className={`w-4 h-4 mr-1 ${/[a-z]/.test(watchPassword) ? 'text-green-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Lowercase
                    </p>
                    <p className={`flex items-center ${/[A-Z]/.test(watchPassword) ? 'text-green-600' : 'text-gray-500'}`}>
                      <svg className={`w-4 h-4 mr-1 ${/[A-Z]/.test(watchPassword) ? 'text-green-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Uppercase
                    </p>
                    <p className={`flex items-center ${/\d/.test(watchPassword) ? 'text-green-600' : 'text-gray-500'}`}>
                      <svg className={`w-4 h-4 mr-1 ${/\d/.test(watchPassword) ? 'text-green-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Number
                    </p>
                  </div>
                </div>
              )}

              {errors.password && (
                <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-700 text-white py-4 px-4 rounded-xl font-bold text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </div>
              ) : 'Sign Up'}
            </button>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:underline">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Add these animations to your global CSS */}
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
        
        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Signup;