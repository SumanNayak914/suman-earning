import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, Globe, Music, Video, Star, Play, Headphones, Zap, Check } from 'lucide-react';

const ContentSections = () => {
    
    // Reusable animated section wrapper
    const AnimatedSection = ({ children, className = "", delay = 0 }) => {
        const ref = React.useRef(null);
        const isInView = useInView(ref, { once: true, margin: "-100px" });
        
        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
                className={className}
            >
                {children}
            </motion.div>
        );
    };

    // Phone mockup component with enhanced animations
    const PhoneMockup = ({ children, delay = 0 }) => {
        const ref = React.useRef(null);
        const isInView = useInView(ref, { once: true, margin: "-100px" });

        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                animate={isInView ? { 
                    opacity: 1, 
                    scale: 1, 
                    rotateY: 0 
                } : { 
                    opacity: 0, 
                    scale: 0.9, 
                    rotateY: -15 
                }}
                transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
            >
                <motion.div
                    animate={{ 
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-[280px] sm:w-[320px] h-[500px] sm:h-[580px] bg-gray-900 rounded-[3rem] shadow-2xl flex items-center justify-center p-3"
                >
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-white rounded-[2.5rem] flex flex-col overflow-hidden relative">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
                        
                        {/* Screen Content */}
                        <div className="flex-grow bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
                            {children}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        );
    };

    // Feature badge component
    const FeatureBadge = ({ icon: Icon, text, delay = 0 }) => {
        const ref = React.useRef(null);
        const isInView = useInView(ref, { once: true });

        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay }}
                className="flex items-center gap-2 text-gray-700"
            >
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-red-600" />
                </div>
                <span className="font-medium">{text}</span>
            </motion.div>
        );
    };

    // --- SECTION 1: Multiple Sites Supported ---
    const Section1 = (
        <div className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <motion.div
                className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-100/30 to-orange-100/30 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                
                {/* Left Side: Mobile Mockup */}
                <div className="lg:col-span-5 flex justify-center">
                    <PhoneMockup delay={0.2}>
                        <div className="text-center space-y-4">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-20 h-20 mx-auto bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
                            >
                                <Globe className="w-10 h-10 text-white" />
                            </motion.div>
                            <div className="space-y-2">
                                <div className="text-gray-800 font-bold text-lg">1000+ Sites</div>
                                <div className="text-gray-500 text-sm">Download Anywhere</div>
                            </div>
                            <div className="grid grid-cols-3 gap-3 pt-4">
                                {['YT', 'TikTok', 'FB', 'Insta', 'Twitter', 'More'].map((site, i) => (
                                    <motion.div
                                        key={site}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8 + i * 0.1 }}
                                        className="bg-white rounded-lg p-2 shadow-md text-xs font-semibold text-gray-700"
                                    >
                                        {site}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </PhoneMockup>
                </div>

                {/* Right Side: Text Content */}
                <div className="lg:col-span-7">
                    <AnimatedSection delay={0.3}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-4">
                                <Star className="w-4 h-4" />
                                <span>Universal Support</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                                Multiple Sites Supported
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 mb-6 font-medium">
                                Discover and download videos, songs, and pictures from hundreds of platforms—all inside one app.
                            </p>
                            <p className="text-base md:text-lg text-gray-500 mb-8 leading-relaxed">
                                With <span className="font-bold text-gray-700">Runload Kit</span>, you don't need to switch between different apps to download your favorite content. 
                                Whether it's a YouTube video, a Facebook reel, or a trending TikTok, this online video downloader lets 
                                you grab everything straight to your Android device—completely free.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FeatureBadge icon={Video} text="1000+ Platforms" delay={0.5} />
                                <FeatureBadge icon={Download} text="One-Click Download" delay={0.6} />
                                <FeatureBadge icon={Zap} text="Lightning Fast" delay={0.7} />
                                <FeatureBadge icon={Check} text="100% Free" delay={0.8} />
                            </div>
                        </motion.div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );

    // --- SECTION 2: Video to MP3 Converter ---
    const Section2 = (
        <div className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background decoration */}
            <motion.div
                className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, -50, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                
                {/* Left Side: Text Content (Desktop Order) */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                    <AnimatedSection delay={0.3}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
                                <Music className="w-4 h-4" />
                                <span>Audio Conversion</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                                Video to MP3 Converter
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 mb-6 font-medium">
                                Convert videos into MP3 and build your own song library.
                            </p>
                            <p className="text-base md:text-lg text-gray-500 mb-8 leading-relaxed">
                                <span className="font-bold text-gray-700">Runload Kit</span> works as a powerful MP3 downloader for music lovers. Download full albums, convert 
                                videos into audio, and save them in high-quality MP3 format. It's your go-to music 
                                downloader app for Android that's fast, smooth, and always free.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FeatureBadge icon={Headphones} text="High-Quality MP3" delay={0.5} />
                                <FeatureBadge icon={Music} text="Full Albums" delay={0.6} />
                                <FeatureBadge icon={Zap} text="Fast Conversion" delay={0.7} />
                                <FeatureBadge icon={Check} text="No Limits" delay={0.8} />
                            </div>
                        </motion.div>
                    </AnimatedSection>
                </div>

                {/* Right Side: Mobile Mockup (Desktop Order) */}
                <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
                    <PhoneMockup delay={0.2}>
                        <div className="text-center space-y-4">
                            <motion.div
                                animate={{ 
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{ 
                                    duration: 2, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
                            >
                                <Headphones className="w-10 h-10 text-white" />
                            </motion.div>
                            <div className="space-y-2">
                                <div className="text-gray-800 font-bold text-lg">MP3 Converter</div>
                                <div className="text-gray-500 text-sm">High Quality Audio</div>
                            </div>
                            <div className="space-y-3 pt-4">
                                {['320kbps', '256kbps', '128kbps'].map((quality, i) => (
                                    <motion.div
                                        key={quality}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 + i * 0.1 }}
                                        className="bg-white rounded-lg p-3 shadow-md flex items-center justify-between"
                                    >
                                        <span className="text-sm font-semibold text-gray-700">{quality}</span>
                                        <Check className="w-4 h-4 text-green-500" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </PhoneMockup>
                </div>
            </div>
        </div>
    );

    // --- SECTION 3: Better Download Experience ---
    const Section3 = (
        <div className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <motion.div
                className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-green-100/30 to-teal-100/30 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                
                {/* Left Side: Mobile Mockup */}
                <div className="lg:col-span-5 flex justify-center">
                    <PhoneMockup delay={0.2}>
                        <div className="text-center space-y-4">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ 
                                    duration: 3, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg"
                            >
                                <Play className="w-10 h-10 text-white" />
                            </motion.div>
                            <div className="space-y-2">
                                <div className="text-gray-800 font-bold text-lg">HD Quality</div>
                                <div className="text-gray-500 text-sm">Up to 8K Resolution</div>
                            </div>
                            <div className="space-y-3 pt-4">
                                {['8K Ultra HD', '4K HDR', '1080p HD', '720p'].map((quality, i) => (
                                    <motion.div
                                        key={quality}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8 + i * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-3 shadow-md"
                                    >
                                        <span className="text-sm font-bold text-gray-700">{quality}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </PhoneMockup>
                </div>

                {/* Right Side: Text Content */}
                <div className="lg:col-span-7">
                    <AnimatedSection delay={0.3}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-semibold mb-4">
                                <Zap className="w-4 h-4" />
                                <span>Premium Quality</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                                Better Download Experience
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 mb-6 font-medium">
                                Download high-quality videos, music, and photos—fast and easy.
                            </p>
                            <p className="text-base md:text-lg text-gray-500 mb-8 leading-relaxed">
                                Choose your preferred resolution: 720p, 1080p, 2K, 4K, or even 8K. Thanks to the latest 
                                performance upgrades, this HD video downloader now delivers even faster speeds. Update to the 
                                newest version for the best results.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FeatureBadge icon={Video} text="Up to 8K Quality" delay={0.5} />
                                <FeatureBadge icon={Zap} text="Ultra Fast Speed" delay={0.6} />
                                <FeatureBadge icon={Download} text="Batch Download" delay={0.7} />
                                <FeatureBadge icon={Check} text="Auto Updates" delay={0.8} />
                            </div>
                        </motion.div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );

    return (
        <div className="content-sections-wrapper">
            {Section1}
            {Section2}
            {Section3}
        </div>
    );
};

export default ContentSections;