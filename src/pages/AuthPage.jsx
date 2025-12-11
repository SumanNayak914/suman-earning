// import React, { useState, useEffect } from 'react';
// import { Mail, Lock, User, Eye, EyeOff, ArrowRight, CheckCircle, AlertCircle, Sparkles, Github, Chrome, ArrowLeft } from 'lucide-react';

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setIsVisible(true), 100);
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!isLogin && !formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }

//     if (!isLogin && formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) return;

//     setIsLoading(true);

//     setTimeout(() => {
//       setIsLoading(false);
//       setShowSuccess(true);
      
//       setTimeout(() => {
//         setShowSuccess(false);
//         setFormData({ name: '', email: '', password: '', confirmPassword: '' });
//       }, 2000);
//     }, 1500);
//   };

//   const toggleAuthMode = () => {
//     setIsLogin(!isLogin);
//     setFormData({ name: '', email: '', password: '', confirmPassword: '' });
//     setErrors({});
//     setShowSuccess(false);
//   };

//   const handleSocialLogin = (provider) => {
//     console.log(`Login with ${provider}`);
//   };

//   const handleBack = () => {
//     window.history.back();
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 relative overflow-hidden">
      
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full bg-white opacity-5"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               width: `${Math.random() * 4 + 2}px`,
//               height: `${Math.random() * 4 + 2}px`,
//               animation: `float ${Math.random() * 15 + 10}s ease-in-out infinite`,
//               animationDelay: `${Math.random() * 5}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Gradient Blobs */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ animation: 'blob 7s infinite' }} />
//       <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ animation: 'blob 7s infinite 2s' }} />
//       <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ animation: 'blob 7s infinite 4s' }} />

//       {/* Back Button */}
//       <button
//         onClick={handleBack}
//         className="absolute top-6 left-6 z-50 flex items-center gap-2 text-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 px-4 py-2 rounded-full hover:bg-opacity-20 transition-all duration-300 hover:scale-105"
//       >
//         <ArrowLeft className="w-5 h-5" />
//         <span className="hidden sm:inline">Back</span>
//       </button>

//       {/* Main Container */}
//       <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
//         <div className="w-full max-w-7xl mx-auto relative z-10">
//           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
//             {/* Left Side - Branding (Hidden on mobile, visible on lg+) */}
//             <div 
//               className={`hidden lg:block text-white space-y-6 transition-all duration-1000 ${
//                 isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
//               }`}
//             >
//               <div className="inline-flex items-center gap-2  bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-full px-6 py-3 mb-4 transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
//                 <Sparkles className="w-5 h-5 text-red-400" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
//                 <span className="text-sm font-semibold">Welcome to Runload Kit</span>
//               </div>
              
//               <h1 className="text-5xl xl:text-6xl font-black leading-tight">
//                 Your Ultimate
//                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600" style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>
//                   Video Solution
//                 </span>
//               </h1>
              
//               <p className="text-lg xl:text-xl text-gray-300 leading-relaxed">
//                 Join thousands of users who trust Runload Kit for fast, secure, and high-quality video downloads and conversions.
//               </p>

//               <div className="space-y-4 pt-6">
//                 {[
//                   'Lightning-fast video downloads',
//                   'High-quality format conversions',
//                   'Secure and private processing',
//                   '24/7 customer support'
//                 ].map((feature, index) => (
//                   <div 
//                     key={index}
//                     className="flex items-center gap-3 transition-all duration-700"
//                     style={{
//                       opacity: isVisible ? 1 : 0,
//                       transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
//                       transitionDelay: `${index * 150 + 500}ms`
//                     }}
//                   >
//                     <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
//                     <span className="text-gray-200">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Side - Auth Form */}
//             <div 
//               className={`relative w-full transition-all duration-1000 ${
//                 isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//               }`}
//             >
//               {/* Mobile Logo */}
//               <div className="lg:hidden text-center mb-8">
//                 <h1 className="text-4xl sm:text-5xl font-black text-white mb-2">
//                   Runload <span className="text-red-500">Kit</span>
//                 </h1>
//                 <p className="text-gray-300 text-sm">Video Download & Conversion Platform</p>
//               </div>

//               {/* Success Message Overlay */}
//               {showSuccess && (
//                 <div className="absolute inset-0 bg-white rounded-2xl sm:rounded-3xl shadow-2xl flex items-center justify-center z-50" style={{ animation: 'scaleIn 0.5s ease-out' }}>
//                   <div className="text-center px-4">
//                     <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-500 mx-auto mb-4" style={{ animation: 'bounce 1s infinite' }} />
//                     <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
//                       {isLogin ? 'Welcome Back!' : 'Account Created!'}
//                     </h3>
//                     <p className="text-gray-600 text-sm sm:text-base">Redirecting you now...</p>
//                   </div>
//                 </div>
//               )}

//               <div className="bg-white bg-opacity-95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-white border-opacity-20">
                
//                 {/* Header */}
//                 <div className="text-center mb-6 sm:mb-8">
//                   <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2 sm:mb-3">
//                     {isLogin ? 'Welcome Back' : 'Create Account'}
//                   </h2>
//                   <p className="text-gray-600 text-sm sm:text-base">
//                     {isLogin 
//                       ? 'Enter your credentials to access your account' 
//                       : 'Join us and start downloading videos today'}
//                   </p>
//                 </div>

//                 {/* Social Login Buttons */}
//                 <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
//                   <button
//                     onClick={() => handleSocialLogin('Google')}
//                     className="flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-white border-2 border-gray-200 rounded-xl font-semibold text-sm sm:text-base text-gray-700 hover:border-red-500 hover:text-red-600 hover:shadow-lg transition-all duration-300 hover:scale-105"
//                   >
//                     <Chrome className="w-4 h-4 sm:w-5 sm:h-5" />
//                     <span className="hidden sm:inline">Google</span>
//                   </button>
//                   <button
//                     onClick={() => handleSocialLogin('Github')}
//                     className="flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-white border-2 border-gray-200 rounded-xl font-semibold text-sm sm:text-base text-gray-700 hover:border-gray-900 hover:text-gray-900 hover:shadow-lg transition-all duration-300 hover:scale-105"
//                   >
//                     <Github className="w-4 h-4 sm:w-5 sm:h-5" />
//                     <span className="hidden sm:inline">Github</span>
//                   </button>
//                 </div>

//                 {/* Divider */}
//                 <div className="relative mb-6">
//                   <div className="absolute inset-0 flex items-center">
//                     <div className="w-full border-t-2 border-gray-200" />
//                   </div>
//                   <div className="relative flex justify-center text-xs sm:text-sm">
//                     <span className="px-3 sm:px-4 bg-white text-gray-500 font-medium">Or continue with email</span>
//                   </div>
//                 </div>

//                 {/* Form */}
//                 <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  
//                   {/* Name Field (Register Only) */}
//                   {!isLogin && (
//                     <div className="transition-all duration-500" style={{ animation: 'slideDown 0.3s ease-out' }}>
//                       <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
//                         Full Name
//                       </label>
//                       <div className="relative group">
//                         <User className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-all duration-300 group-focus-within:text-red-500 group-focus-within:scale-110" />
//                         <input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleInputChange}
//                           placeholder="John Doe"
//                           className={`w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-2 rounded-xl text-sm sm:text-base focus:outline-none transition-all duration-300 hover:shadow-md ${
//                             errors.name ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-red-500 focus:shadow-lg'
//                           }`}
//                         />
//                         {errors.name && (
//                           <div className="flex items-center gap-2 mt-2 text-red-600 text-xs sm:text-sm" style={{ animation: 'slideDown 0.3s ease-out' }}>
//                             <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
//                             {errors.name}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   )}

//                   {/* Email Field */}
//                   <div>
//                     <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
//                       Email Address
//                     </label>
//                     <div className="relative group">
//                       <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-all duration-300 group-focus-within:text-red-500 group-focus-within:scale-110" />
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         placeholder="you@example.com"
//                         className={`w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-2 rounded-xl text-sm sm:text-base focus:outline-none transition-all duration-300 hover:shadow-md ${
//                           errors.email ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-red-500 focus:shadow-lg'
//                         }`}
//                       />
//                       {errors.email && (
//                         <div className="flex items-center gap-2 mt-2 text-red-600 text-xs sm:text-sm" style={{ animation: 'slideDown 0.3s ease-out' }}>
//                           <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
//                           {errors.email}
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Password Field */}
//                   <div>
//                     <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
//                       Password
//                     </label>
//                     <div className="relative group">
//                       <Lock className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-all duration-300 group-focus-within:text-red-500 group-focus-within:scale-110" />
//                       <input
//                         type={showPassword ? 'text' : 'password'}
//                         name="password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         placeholder="••••••••"
//                         className={`w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 border-2 rounded-xl text-sm sm:text-base focus:outline-none transition-all duration-300 hover:shadow-md ${
//                           errors.password ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-red-500 focus:shadow-lg'
//                         }`}
//                       />
//                       <button
//                         type="button"
//                         onClick={() => setShowPassword(!showPassword)}
//                         className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-all duration-300 hover:scale-110"
//                       >
//                         {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
//                       </button>
//                       {errors.password && (
//                         <div className="flex items-center gap-2 mt-2 text-red-600 text-xs sm:text-sm" style={{ animation: 'slideDown 0.3s ease-out' }}>
//                           <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
//                           {errors.password}
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Confirm Password (Register Only) */}
//                   {!isLogin && (
//                     <div className="transition-all duration-500" style={{ animation: 'slideDown 0.3s ease-out' }}>
//                       <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
//                         Confirm Password
//                       </label>
//                       <div className="relative group">
//                         <Lock className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-all duration-300 group-focus-within:text-red-500 group-focus-within:scale-110" />
//                         <input
//                           type={showPassword ? 'text' : 'password'}
//                           name="confirmPassword"
//                           value={formData.confirmPassword}
//                           onChange={handleInputChange}
//                           placeholder="••••••••"
//                           className={`w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-2 rounded-xl text-sm sm:text-base focus:outline-none transition-all duration-300 hover:shadow-md ${
//                             errors.confirmPassword ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-red-500 focus:shadow-lg'
//                           }`}
//                         />
//                         {errors.confirmPassword && (
//                           <div className="flex items-center gap-2 mt-2 text-red-600 text-xs sm:text-sm" style={{ animation: 'slideDown 0.3s ease-out' }}>
//                             <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
//                             {errors.confirmPassword}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   )}

//                   {/* Remember Me & Forgot Password (Login Only) */}
//                   {isLogin && (
//                     <div className="flex items-center justify-between text-xs sm:text-sm">
//                       <label className="flex items-center gap-2 cursor-pointer group">
//                         <input type="checkbox" className="w-4 h-4 text-red-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-red-500 transition-all duration-300 cursor-pointer" />
//                         <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Remember me</span>
//                       </label>
//                       <a href="#" className="font-semibold text-red-600 hover:text-red-700 transition-all duration-300 hover:underline">
//                         Forgot Password?
//                       </a>
//                     </div>
//                   )}

//                   {/* Submit Button */}
//                   <button
//                     type="submit"
//                     disabled={isLoading}
//                     className={`w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group ${
//                       isLoading ? 'opacity-70 cursor-not-allowed' : ''
//                     }`}
//                   >
//                     {isLoading ? (
//                       <>
//                         <div className="w-5 h-5 sm:w-6 sm:h-6 border-3 border-white border-t-transparent rounded-full" style={{ animation: 'spin 1s linear infinite' }} />
//                         Processing...
//                       </>
//                     ) : (
//                       <>
//                         {isLogin ? 'Sign In' : 'Create Account'}
//                         <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
//                       </>
//                     )}
//                   </button>
//                 </form>

//                 {/* Toggle Auth Mode */}
//                 <div className="mt-6 text-center text-sm sm:text-base">
//                   <p className="text-gray-600">
//                     {isLogin ? "Don't have an account?" : 'Already have an account?'}
//                     <button
//                       onClick={toggleAuthMode}
//                       className="ml-2 font-bold text-red-600 hover:text-red-700 transition-all duration-300 hover:underline"
//                     >
//                       {isLogin ? 'Sign Up' : 'Sign In'}
//                     </button>
//                   </p>
//                 </div>

//                 {/* Terms */}
//                 {!isLogin && (
//                   <p className="text-xs text-gray-500 text-center mt-4 sm:mt-6">
//                     By creating an account, you agree to our{' '}
//                     <a href="#" className="text-red-600 hover:underline transition-colors duration-300">Terms of Service</a>
//                     {' '}and{' '}
//                     <a href="#" className="text-red-600 hover:underline transition-colors duration-300">Privacy Policy</a>
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Animations */}
//       <style>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px) translateX(0px);
//           }
//           50% {
//             transform: translateY(-20px) translateX(10px);
//           }
//         }

//         @keyframes blob {
//           0%, 100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//         }

//         @keyframes spin {
//           to { transform: rotate(360deg); }
//         }

//         @keyframes bounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-25px); }
//         }

//         @keyframes pulse {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.7; }
//         }

//         @keyframes scaleIn {
//           0% {
//             transform: scale(0.9);
//             opacity: 0;
//           }
//           100% {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }

//         @keyframes slideDown {
//           0% {
//             transform: translateY(-10px);
//             opacity: 0;
//           }
//           100% {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AuthPage;
import React, { useState, useEffect } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, CheckCircle, AlertCircle, Sparkles, Github, Chrome, ArrowLeft } from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    // Dummy login check
    setTimeout(() => {
      if (isLogin) {
        // Check dummy credentials
        if (formData.email === 'user@gmail.com' && formData.password === 'Test@123') {
          setIsLoading(false);
          setShowSuccess(true);
          
          // Save user data to localStorage
          const userData = {
            email: formData.email,
            loginTime: new Date().toISOString(),
            isLoggedIn: true
          };
          localStorage.setItem('user', JSON.stringify(userData));
          
          setTimeout(() => {
            // Redirect to home page
            window.location.href = '/';
          }, 2000);
        } else {
          setIsLoading(false);
          setErrors({ 
            email: 'Invalid credentials',
            password: 'Use: user@gmail.com / Test@123'
          });
        }
      } else {
        // Registration always succeeds
        setIsLoading(false);
        setShowSuccess(true);
        
        // Save registered user data to localStorage
        const userData = {
          name: formData.name,
          email: formData.email,
          registrationTime: new Date().toISOString(),
          isLoggedIn: true
        };
        localStorage.setItem('user', JSON.stringify(userData));
        
        setTimeout(() => {
          // Redirect to home page
          window.location.href = '/';
        }, 2000);
      }
    }, 1500);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
    setShowSuccess(false);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animation: `float ${Math.random() * 15 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Gradient Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ animation: 'blob 7s infinite' }} />
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ animation: 'blob 7s infinite 2s' }} />
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ animation: 'blob 7s infinite 4s' }} />

      {/* Back Button */}
      <button
        onClick={handleBack}
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 px-4 py-2 rounded-full hover:bg-opacity-20 transition-all duration-300 hover:scale-105"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="hidden sm:inline">Back</span>
      </button>

      {/* Main Container */}
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Branding (Hidden on mobile, visible on lg+) */}
            <div 
              className={`hidden lg:block text-white space-y-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              <div className="inline-flex items-center gap-2  bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-full px-6 py-3 mb-4 transition-all duration-500 hover:bg-opacity-20 hover:scale-105">
                <Sparkles className="w-5 h-5 text-red-400" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
                <span className="text-sm font-semibold">Welcome to Runload Kit</span>
              </div>
              
              <h1 className="text-5xl xl:text-6xl font-black leading-tight">
                Your Ultimate
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600" style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>
                  Video Solution
                </span>
              </h1>
              
              <p className="text-lg xl:text-xl text-gray-300 leading-relaxed">
                Join thousands of users who trust Runload Kit for fast, secure, and high-quality video downloads and conversions.
              </p>

              <div className="space-y-4 pt-6">
                {[
                  'Lightning-fast video downloads',
                  'High-quality format conversions',
                  'Secure and private processing',
                  '24/7 customer support'
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 transition-all duration-700"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                      transitionDelay: `${index * 150 + 500}ms`
                    }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Auth Form */}
            <div 
              className={`relative w-full transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Mobile Logo */}
              <div className="lg:hidden text-center mb-8">
                <h1 className="text-4xl sm:text-5xl font-black text-white mb-2">
                  Runload <span className="text-red-500">Kit</span>
                </h1>
                <p className="text-gray-300 text-sm">Video Download & Conversion Platform</p>
              </div>

              {/* Success Message Overlay */}
              {showSuccess && (
                <div className="absolute inset-0 bg-white rounded-2xl sm:rounded-3xl shadow-2xl flex items-center justify-center z-50" style={{ animation: 'scaleIn 0.5s ease-out' }}>
                  <div className="text-center px-4">
                    <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-500 mx-auto mb-4" style={{ animation: 'bounce 1s infinite' }} />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {isLogin ? 'Welcome Back!' : 'Account Created!'}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">Redirecting you now...</p>
                  </div>
                </div>
              )}

              <div className="bg-white bg-opacity-95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-white border-opacity-20">
                
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2 sm:mb-3">
                    {isLogin ? 'Welcome Back' : 'Create Account'}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {isLogin 
                      ? 'Enter your credentials to access your account' 
                      : 'Join us and start downloading videos today'}
                  </p>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                  <button
                    onClick={() => handleSocialLogin('Google')}
                    className="flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-white border-2 border-gray-200 rounded-xl font-semibold text-sm sm:text-base text-gray-700 hover:border-red-500 hover:text-red-600 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Chrome className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">Google</span>
                  </button>
                  <button
                    onClick={() => handleSocialLogin('Github')}
                    className="flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-white border-2 border-gray-200 rounded-xl font-semibold text-sm sm:text-base text-gray-700 hover:border-gray-900 hover:text-gray-900 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">Github</span>
                  </button>
                </div>

                {/* Divider */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-xs sm:text-sm">
                    <span className="px-3 sm:px-4 bg-white text-gray-500 font-medium">Or continue with email</span>
                  </div>
                </div>

                {/* Form */}
                <div className="space-y-4 sm:space-y-5">
                  
                  {/* Name Field (Register Only) */}
                  {!isLogin && (
                    <div className="transition-all duration-500" style={{ animation: 'slideDown 0.3s ease-out' }}>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative group">
                        <User className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-all duration-300 group-focus-within:text-red-500 group-focus-within:scale-110" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className={`w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-2 rounded-xl text-sm sm:text-base focus:outline-none transition-all duration-300 hover:shadow-md ${
                            errors.name ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-red-500 focus:shadow-lg'
                          }`}
                        />
                        {errors.name && (
                          <div className="flex items-center gap-2 mt-2 text-red-600 text-xs sm:text-sm" style={{ animation: 'slideDown 0.3s ease-out' }}>
                            <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                            {errors.name}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative group">
                      <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-all duration-300 group-focus-within:text-red-500 group-focus-within:scale-110" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        className={`w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-2 rounded-xl text-sm sm:text-base focus:outline-none transition-all duration-300 hover:shadow-md ${
                          errors.email ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-red-500 focus:shadow-lg'
                        }`}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-2 mt-2 text-red-600 text-xs sm:text-sm" style={{ animation: 'slideDown 0.3s ease-out' }}>
                          <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative group">
                      <Lock className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-all duration-300 group-focus-within:text-red-500 group-focus-within:scale-110" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                        className={`w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 border-2 rounded-xl text-sm sm:text-base focus:outline-none transition-all duration-300 hover:shadow-md ${
                          errors.password ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-red-500 focus:shadow-lg'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-all duration-300 hover:scale-110"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                      </button>
                      {errors.password && (
                        <div className="flex items-center gap-2 mt-2 text-red-600 text-xs sm:text-sm" style={{ animation: 'slideDown 0.3s ease-out' }}>
                          <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                          {errors.password}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Confirm Password (Register Only) */}
                  {!isLogin && (
                    <div className="transition-all duration-500" style={{ animation: 'slideDown 0.3s ease-out' }}>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                        Confirm Password
                      </label>
                      <div className="relative group">
                        <Lock className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-all duration-300 group-focus-within:text-red-500 group-focus-within:scale-110" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          placeholder="••••••••"
                          className={`w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-2 rounded-xl text-sm sm:text-base focus:outline-none transition-all duration-300 hover:shadow-md ${
                            errors.confirmPassword ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-red-500 focus:shadow-lg'
                          }`}
                        />
                        {errors.confirmPassword && (
                          <div className="flex items-center gap-2 mt-2 text-red-600 text-xs sm:text-sm" style={{ animation: 'slideDown 0.3s ease-out' }}>
                            <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                            {errors.confirmPassword}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Remember Me & Forgot Password (Login Only) */}
                  {isLogin && (
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 text-red-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-red-500 transition-all duration-300 cursor-pointer" />
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Remember me</span>
                      </label>
                      <a href="#" className="font-semibold text-red-600 hover:text-red-700 transition-all duration-300 hover:underline">
                        Forgot Password?
                      </a>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className={`w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group ${
                      isLoading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 sm:w-6 sm:h-6 border-3 border-white border-t-transparent rounded-full" style={{ animation: 'spin 1s linear infinite' }} />
                        Processing...
                      </>
                    ) : (
                      <>
                        {isLogin ? 'Sign In' : 'Create Account'}
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>

                {/* Toggle Auth Mode */}
                <div className="mt-6 text-center text-sm sm:text-base">
                  <p className="text-gray-600">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}
                    <button
                      onClick={toggleAuthMode}
                      className="ml-2 font-bold text-red-600 hover:text-red-700 transition-all duration-300 hover:underline"
                    >
                      {isLogin ? 'Sign Up' : 'Sign In'}
                    </button>
                  </p>
                </div>

                {/* Terms */}
                {!isLogin && (
                  <p className="text-xs text-gray-500 text-center mt-4 sm:mt-6">
                    By creating an account, you agree to our{' '}
                    <a href="#" className="text-red-600 hover:underline transition-colors duration-300">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-red-600 hover:underline transition-colors duration-300">Privacy Policy</a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes scaleIn {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes slideDown {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AuthPage;