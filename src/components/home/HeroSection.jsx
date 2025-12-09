// // src/components/home/HeroSection.jsx
// import React from 'react';
// import { ShieldCheck, Lock, Heart } from 'lucide-react'; 

// const HeroSection = () => {
//   return (
//     <section className="pt-28 md:pt-16 p-6 md:p-10 bg-white">
      
//       <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center max-w-7xl mx-auto">
        
      
//         <div className="md:col-span-7">
          
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
//             Runload Kit
//           </h2>
          
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug mb-6">
//             Your All-in-One Free HD Video Downloader and MP3 Converter
//           </h1>
          
//           <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl hidden md:flex">
//             Download music and videos in MP4 or MP3 format from YT, TikTok, Instagram, Facebook, and 1000+ sites. 
//             Runload Kit is your go-to HD video downloader and free music downloader app—safe, smooth, and lightning fast.
//           </p>
          
        
//           <button className="hidden md:block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 text-xl rounded-lg shadow-xl transition duration-300 transform hover:scale-[1.02] mb-8">
//             Official Download
//           </button>
          
//           {/* Security Verification Section */}
//           <div className="text-gray-500 font-semibold mb-4 text-lg">
//             Security Verified
//           </div>
//           <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
//             <div className="flex items-center text-green-700">
//               <ShieldCheck className="w-5 h-5 mr-1 text-green-500" /> CM Security
//             </div>
//             <div className="flex items-center text-blue-700">
//               <Lock className="w-5 h-5 mr-1 text-blue-500" /> Lookout
//             </div>
//             <div className="flex items-center text-red-700">
//               <Heart className="w-5 h-5 mr-1 text-red-500" /> McAfee
//             </div>
//           </div>
//         </div>

        
//         <div className="md:col-span-5 flex justify-center md:justify-end relative">
          
//           <div className="absolute right-0 top-0 w-full h-full bg-gradient-to-br from-orange-600/80 to-red-700/80 rounded-full blur-3xl opacity-50 md:opacity-70 z-0 hidden md:block"></div>
          
//           {/* Z-10 removed from here to fix overlap issue */}
//           <div className="relative p-4"> 
//              <div className="w-[300px] h-[550px] bg-gray-900 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex items-center justify-center p-2">
//                  <div className="w-full h-full bg-white rounded-[2rem] flex flex-col overflow-hidden">
//                      <div className="flex-grow bg-gray-100 flex items-center justify-center text-gray-500 text-xs p-2">
                         



// [Image of Runload Kit App Screenshot on Phone]


//                      </div>
//                  </div>
//              </div>
//           </div>
          
//         </div>
//       </div>
      
//       {/* ------------------------------------------------------------------- */}
//       {/* --- MOVED ELEMENTS: Fixed QR Code and Fixed Mobile Download Button --- */}
      
//       {/* 1. FIXED QR CODE CONTAINER (Desktop Only) */}
//       <div 
//         className="hidden md:block fixed bottom-10 right-10 p-3 bg-white shadow-2xl rounded-lg z-20 border border-gray-100"
//       >
//           <div className="w-24 h-24 bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700">
//               QR Code
//           </div>
//           <p className="text-xs text-gray-600 mt-1 text-center">Runload Kit App</p>
//       </div>
      
//       {/* 2. FIXED MOBILE DOWNLOAD BUTTON (Mobile Only) */}
//       <div className="md:hidden fixed bottom-5  z-30 px-4">
//           <button className="w-fit px-3 py-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 text-xl rounded-4xl shadow-2xl transition duration-300 transform hover:scale-[1.01]">
//               Official Download
//           </button>
//       </div>
//       {/* ------------------------------------------------------------------- */}
      
//     </section>
//   );
// };

// export default HeroSection;
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Heart, Download, Sparkles } from 'lucide-react';

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const securityBadges = [
    { icon: ShieldCheck, text: 'CM Security', color: 'text-green-700', iconColor: 'text-green-500' },
    { icon: Lock, text: 'Lookout', color: 'text-blue-700', iconColor: 'text-blue-500' },
    { icon: Heart, text: 'McAfee', color: 'text-red-700', iconColor: 'text-red-500' }
  ];

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-10 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-6 border border-red-100">
              <Sparkles className="w-4 h-4" />
              <span>Trusted by Millions Worldwide</span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4"
            >
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Runload Kit
              </span>
            </motion.h2>
            
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-snug mb-6"
            >
              Your All-in-One Free HD Video Downloader and MP3 Converter
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Download music and videos in MP4 or MP3 format from YouTube, TikTok, Instagram, Facebook, and 1000+ sites. 
              Safe, smooth, and lightning fast.
            </motion.p>
            
            {/* Desktop Download Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-10 text-lg rounded-full shadow-lg transition duration-300 mb-8"
            >
              <Download className="w-5 h-5" />
              Official Download
            </motion.button>
            
            {/* Security Verification */}
            <motion.div variants={itemVariants}>
              <div className="text-gray-500 font-semibold mb-4 text-base">
                🔒 Security Verified
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                {securityBadges.map((badge, index) => (
                  <motion.div
                    key={badge.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`flex items-center ${badge.color} font-medium`}
                  >
                    <badge.icon className={`w-5 h-5 mr-2 ${badge.iconColor}`} />
                    {badge.text}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
            variants={phoneVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Glowing Background Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-red-600/40 to-pink-600/40 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Phone Container with Float Animation */}
            <motion.div
              className="relative z-10"
              animate={floatAnimation}
            >
              <motion.div
                className="w-[280px] sm:w-[320px] h-[500px] sm:h-[580px] bg-gray-900 rounded-[3rem] shadow-2xl flex items-center justify-center p-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-white rounded-[2.5rem] flex flex-col overflow-hidden relative">
                  
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
                  
                  {/* Screen Content */}
                  <div className="flex-grow bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-6 relative">
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl flex items-center justify-center shadow-lg"
                      >
                        <Download className="w-12 h-12 text-white" />
                      </motion.div>
                      <div className="text-gray-700 font-bold text-lg">Runload Kit</div>
                      <div className="text-gray-500 text-sm mt-1">HD Downloader</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Fixed QR Code (Desktop) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className="hidden md:block fixed bottom-8 right-8 p-4 bg-white shadow-2xl rounded-2xl z-50 border border-gray-100"
      >
        <div className="w-28 h-28 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl flex items-center justify-center text-sm font-semibold text-gray-700">
          QR Code
        </div>
        <p className="text-xs text-gray-600 mt-2 text-center font-medium">Scan to Download</p>
      </motion.div>

      {/* Fixed Mobile Download Button */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="md:hidden fixed bottom-6 left-4 right-4 z-50"
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-6 text-lg rounded-full shadow-2xl"
        >
          <Download className="w-5 h-5" />
          Official Download
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;