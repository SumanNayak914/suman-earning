// // src/components/home/FeatureSection.jsx
// import React from 'react';
// // Lucide Icons (आपको ये icons npm install lucide-react से मिलेंगे)
// import { Smartphone, Zap, Music, Video, Star } from 'lucide-react'; 

// const FeatureSection = () => {
    
//     // Feature data structure based on the screenshot (354)
//     const features = [
//         {
//             icon: Video,
//             title: "HD & MP4 Video Downloader",
//             description: "Download videos in multiple formats, including MP4, HD, and even 4K. Save content from YT, Facebook, Instagram, TikTok, and 1000+ sites without compromising on quality.",
//             tag: "2K | 4K | 480", // Visual tag
//         },
//         {
//             icon: Music,
//             title: "MP3 Music Downloads",
//             description: "Convert videos to high-quality MP3 files with just a tap. Get your favorite songs, podcasts, or audio clips directly to your phone in seconds.",
//             tag: "MP3", // Visual tag
//         },
//         {
//             icon: Zap,
//             title: "Blazing-Fast Speed",
//             description: "No one likes waiting. Runload Kit's built-in speed tech ensures your downloads are completed in a fraction of the time, even for large files.",
//             tag: "⚡", // Visual tag
//         },
//         {
//             icon: Smartphone,
//             title: "Use Anywhere: Android & Web",
//             description: "Whether you prefer using an app or staying online, Runload Kit works on Android phones, and even as an online downloader.",
//             tag: "Mobile / Web", // Visual tag
//         },
//     ];

//     // Placeholder for the large logo at the top (Screenshot 353)
//     const logoPlaceholder = (
//         <div className="flex flex-col items-center mb-8">
//             <div className="bg-red-600 p-4 rounded-3xl shadow-xl">
//                 <div className="text-white text-6xl font-extrabold font-serif">V</div> 
//                 {/* या आपके लोगो का आइकन यहाँ जाएगा */}
//             </div>
//             {/* Rating placeholder */}
//             <div className="flex items-center mt-3 text-yellow-500 text-xl">
//                 4.9 
//                 {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 ml-1 fill-current" />)}
//                 <span className="text-gray-500 text-sm ml-2">(989264 vote)</span>
//             </div>
//         </div>
//     );


//     return (
//         <section className="py-12 md:py-20 bg-gray-50">
//             <div className="max-w-7xl mx-auto px-6 md:px-10">
                
//                 {/* 1. Top Logo/Rating (Based on Screenshot 353) */}
//                 {logoPlaceholder} 

//                 {/* 2. Main Heading: Using your logo name */}
//                 <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-4">
//                     Why **Runload Kit** is the Fastest, Easiest Video Downloader
//                 </h2>
//                 <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
//                     **Runload Kit** isn't just another app—it's your shortcut to downloading videos and music without limits. From viral clips to full-length HD videos, everything gets saved in a tap. No delays, no watermarks, no nonsense.
//                 </p>

//                 {/* 3. Features Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
//                     {features.map((feature, index) => (
//                         <div key={index} className="flex flex-col items-center text-center p-4">
                            
//                             {/* Icon/Visual Tag Box */}
//                             <div className="w-20 h-20 mb-4 bg-gray-100 rounded-full flex items-center justify-center border-2 border-gray-200 shadow-md relative">
//                                 {/* Feature Icon (using Lucide icons) */}
//                                 <feature.icon className="w-8 h-8 text-orange-600" /> 
                                
//                                 {/* Visual Tag Overlay (e.g., 2K | 4K) */}
//                                 {feature.tag && (
//                                     <div className={`absolute -top-3 px-2 py-0.5 rounded-full text-xs font-bold shadow-md 
//                                         ${feature.tag === "MP3" ? 'bg-blue-600 text-white' : 
//                                           feature.tag === "⚡" ? 'bg-yellow-500 text-gray-900' : 'bg-gray-800 text-white'}`}>
//                                         {feature.tag}
//                                     </div>
//                                 )}
//                             </div>

//                             {/* Title */}
//                             <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">
//                                 {feature.title}
//                             </h3>
                            
//                             {/* Description */}
//                             <p className="text-sm text-gray-600">
//                                 {feature.description.replace('VidMate', 'Runload Kit')} {/* Ensures Runload Kit branding */}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FeatureSection;
// src/components/home/FeatureSection.jsx
import React from "react";
import { Smartphone, Zap, Gift, ShoppingCart, Star } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Trending Amazon Products",
      description:
        "Discover daily updated trending and best-selling products directly from Amazon with real demand and offers.",
      tag: "Trending",
    },
    {
      icon: Gift,
      title: "Daily Coin Rewards",
      description:
        "Stay active, view products, and earn bonus coins daily. Redeem coins for gift cards and exclusive rewards.",
      tag: "Coins",
    },
    {
      icon: Zap,
      title: "Fast Affiliate Redirect",
      description:
        "One-click secure redirect to Amazon using verified affiliate links for fast and trusted shopping.",
      tag: "Fast",
    },
    {
      icon: Smartphone,
      title: "Mobile-Friendly Platform",
      description:
        "Our website works smoothly on all devices like mobile, tablet, and desktop without installing any app.",
      tag: "Responsive",
    },
  ];

  return (
    <section className="py-14 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* ✅ Logo + Rating */}
        <div className="flex flex-col items-center mb-12">
          <div className="bg-orange-600 p-5 rounded-3xl shadow-xl animate-bounce">
            <div className="text-white text-6xl font-extrabold font-serif">R</div>
          </div>

          <div className="flex items-center mt-4 text-yellow-500 text-xl">
            4.9
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 ml-1 fill-current" />
            ))}
            <span className="text-gray-500 text-sm ml-2">(9,89,264 users)</span>
          </div>
        </div>

        {/* ✅ Headline */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-4">
          India’s Smartest Amazon Deal & Rewards Platform
        </h2>

        <p className="text-lg text-gray-600 text-center mb-4 max-w-3xl mx-auto">
          Discover trending Amazon products, unlock exclusive deals, and earn
          daily coin rewards just by staying active on our platform.
        </p>

        {/* ✅ 30 sec coin notice */}
        <p className="text-sm text-center text-green-600 mb-14 animate-pulse">
          🎁 Stay 30 seconds on any product page to unlock your welcome bonus
          coin.
        </p>

        {/* ✅ Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-lg 
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* ✅ Animated Icon Circle */}
              <div
                className="w-20 h-20 mb-5 bg-gray-100 rounded-full flex items-center justify-center 
                border-2 border-gray-200 shadow-md relative group-hover:scale-110 transition-transform duration-300"
              >
                <feature.icon className="w-9 h-9 text-orange-600 group-hover:rotate-12 transition-transform duration-300" />

                {/* ✅ Tag */}
                {feature.tag && (
                  <div
                    className={`absolute -top-3 px-2 py-0.5 rounded-full text-xs font-bold shadow-md 
                    ${
                      feature.tag === "Coins"
                        ? "bg-green-600 text-white"
                        : feature.tag === "Fast"
                        ? "bg-yellow-500 text-gray-900"
                        : feature.tag === "Trending"
                        ? "bg-red-600 text-white"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {feature.tag}
                  </div>
                )}
              </div>

              {/* ✅ Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* ✅ Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
