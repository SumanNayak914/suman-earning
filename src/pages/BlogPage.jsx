import React, { useState, useEffect, useRef } from 'react';
import { Clock, Calendar, ArrowRight, Search, TrendingUp, Sparkles } from 'lucide-react';

const blogPostsData = [
  {
    category: 'Tutorial',
    title: 'Complete Guide to Converting AVI to MP4 - Free Tools & Methods',
    date: 'December 8, 2025',
    readTime: '5 min read',
    summary: 'Master the art of converting AVI to MP4 with our comprehensive guide. Discover the best free converters, quality optimization tips, and step-by-step instructions for seamless video conversion.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
    author: 'Tech Team'
  },
  {
    category: 'Guide',
    title: 'Extract Audio from Video: MP4 to MP3 Conversion Made Easy',
    date: 'December 7, 2025',
    readTime: '4 min read',
    summary: 'Learn how to extract high-quality audio from your videos instantly. Our free MP4 to MP3 converter ensures lossless audio extraction with zero hassle.',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=500&fit=crop',
    author: 'Audio Expert'
  },
  {
    category: 'Technical',
    title: 'MP4 to WAV Conversion: Professional Audio Quality Guide',
    date: 'December 6, 2025',
    readTime: '6 min read',
    summary: 'Discover how to convert MP4 to WAV format while maintaining pristine audio quality. Perfect for audio professionals and music enthusiasts.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=500&fit=crop',
    author: 'Media Pro'
  },
  {
    category: 'Tutorial',
    title: 'Video Format Conversion: Understanding Codecs and Quality',
    date: 'December 5, 2025',
    readTime: '7 min read',
    summary: 'Dive deep into video codecs, compression techniques, and quality settings. Learn how to choose the right format for your needs.',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=500&fit=crop',
    author: 'Video Expert'
  },
  {
    category: 'Guide',
    title: 'Batch Convert Videos: Save Time with Bulk Processing',
    date: 'December 4, 2025',
    readTime: '5 min read',
    summary: 'Process multiple videos simultaneously with our batch conversion guide. Maximize efficiency and streamline your workflow.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop',
    author: 'Productivity Pro'
  },
  {
    category: 'Technical',
    title: 'Video Compression Without Quality Loss: Expert Tips',
    date: 'December 3, 2025',
    readTime: '6 min read',
    summary: 'Master advanced compression techniques to reduce file sizes while maintaining exceptional video quality. Professional tips and tricks included.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop',
    author: 'Compression Specialist'
  },
  {
    category: 'Tutorial',
    title: 'Mobile Video Optimization: Convert for Any Device',
    date: 'December 2, 2025',
    readTime: '4 min read',
    summary: 'Optimize your videos for mobile playback. Learn the best settings and formats for smartphones and tablets.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
    author: 'Mobile Expert'
  },
  {
    category: 'Guide',
    title: 'Social Media Video Specs: Complete Format Guide 2025',
    date: 'December 1, 2025',
    readTime: '8 min read',
    summary: 'Your ultimate reference for video specifications across all major social platforms. Instagram, TikTok, YouTube, and more.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=500&fit=crop',
    author: 'Social Media Pro'
  },
  {
    category: 'Technical',
    title: 'HDR Video Conversion: Preserve Dynamic Range',
    date: 'November 30, 2025',
    readTime: '7 min read',
    summary: 'Navigate the complexities of HDR video conversion. Maintain stunning visual quality across different formats and devices.',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=500&fit=crop',
    author: 'HDR Specialist'
  },
  {
    category: 'Tutorial',
    title: 'Subtitle Integration: Add and Convert with Ease',
    date: 'November 29, 2025',
    readTime: '5 min read',
    summary: 'Learn how to add, edit, and convert subtitles during video conversion. Support multiple languages and accessibility features.',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=500&fit=crop',
    author: 'Accessibility Expert'
  }
];

const categories = ['All', 'Tutorial', 'Guide', 'Technical'];

// Intersection Observer Hook for scroll animations
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1,
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

const BlogCard = ({ post, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <article 
      ref={ref}
      className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      style={{ 
        transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={post.image} 
          alt={post.title} 
          className={`w-full h-full object-cover transition-all duration-1000 ${isHovered ? 'scale-125 rotate-2' : 'scale-100 rotate-0'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-60'}`} />
        
        <span className={`absolute top-6 left-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all duration-500 ${isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'}`}>
          {post.category}
        </span>

        {/* Sparkle effect on hover */}
        <div className={`absolute top-4 right-4 transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
          <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
        </div>
      </div>
      
      <div className="p-8 relative">
        <div className={`flex items-center gap-4 text-gray-500 text-sm mb-4 transition-all duration-500 ${isHovered ? 'transform translate-x-2' : ''}`}>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>
        
        <h2 className={`text-2xl font-bold text-gray-900 mb-4 leading-tight transition-all duration-500 line-clamp-2 ${isHovered ? 'text-red-600 transform translate-x-2' : ''}`}>
          {post.title}
        </h2>
        
        <p className={`text-gray-600 text-base mb-6 line-clamp-3 leading-relaxed transition-all duration-500 ${isHovered ? 'transform translate-x-2' : ''}`}>
          {post.summary}
        </p>
        
        <div className={`flex items-center justify-between pt-4 border-t border-gray-100 transition-all duration-500 ${isHovered ? 'border-red-200' : ''}`}>
          <span className="text-sm text-gray-500 font-medium">By {post.author}</span>
          <button className={`flex items-center gap-2 text-red-600 font-semibold transition-all duration-500 ${isHovered ? 'gap-4 transform scale-110' : 'gap-2'}`}>
            Read Article
            <ArrowRight className={`w-4 h-4 transition-transform duration-500 ${isHovered ? 'translate-x-2' : ''}`} />
          </button>
        </div>

        {/* Animated border on hover */}
        <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-700 ${isHovered ? 'w-full' : 'w-0'}`} />
      </div>
    </article>
  );
};

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [heroRef, heroVisible] = useIntersectionObserver();
  const [searchRef, searchVisible] = useIntersectionObserver();
  const [newsletterRef, newsletterVisible] = useIntersectionObserver();

  const filteredPosts = blogPostsData.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      
      {/* Hero Section with Animation */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 pt-32 pb-20 overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 opacity-20">
          <div className={`absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl transition-all duration-[2000ms] ${heroVisible ? 'scale-100 opacity-30' : 'scale-0 opacity-0'}`} />
          <div className={`absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl transition-all duration-[2000ms] delay-300 ${heroVisible ? 'scale-100 opacity-30' : 'scale-0 opacity-0'}`} />
          <div className={`absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl transition-all duration-[2000ms] delay-500 ${heroVisible ? 'scale-100 opacity-20' : 'scale-0 opacity-0'}`} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-red-400" />
                <span className="text-red-300 text-sm font-semibold">Latest Articles & Guides</span>
              </div>
            </div>
            
            <h1 className={`text-6xl md:text-7xl font-black text-white mb-6 tracking-tight transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Runload Kit <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 animate-pulse">Blog</span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Expert guides, tutorials, and insights for video conversion and media processing
            </p>
          </div>
        </div>

        {/* Animated wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-16 fill-gray-50">
            <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1200,64 L1200,120 L0,120 Z" className={`transition-all duration-[1500ms] ${heroVisible ? 'opacity-100' : 'opacity-0'}`} />
          </svg>
        </div>
      </section>

      {/* Search and Filter Section with Animation */}
      <div ref={searchRef} className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <div className={`bg-white rounded-2xl shadow-2xl p-6 md:p-8 transition-all duration-1000 ${searchVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-red-500 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none focus:shadow-lg transition-all duration-300 text-gray-900"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap md:flex-nowrap">
              {categories.map((category, idx) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-500 whitespace-nowrap transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                  }`}
                  style={{ 
                    transitionDelay: searchVisible ? `${idx * 100}ms` : '0ms'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 inline-flex items-center gap-3">
            {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full text-sm font-bold animate-bounce">
              {filteredPosts.length}
            </span>
          </h2>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={index} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fadeIn">
            <div className="text-6xl mb-4 animate-bounce">📭</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Newsletter Section with Animation */}
      <section ref={newsletterRef} className="bg-gradient-to-r from-red-600 to-red-700 py-16 mt-16 relative overflow-hidden">
        {/* Animated background shapes */}
        <div className={`absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transition-all duration-[2000ms] ${newsletterVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
        <div className={`absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transition-all duration-[2000ms] delay-300 ${newsletterVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className={`transition-all duration-1000 ${newsletterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Sparkles className="w-12 h-12 text-yellow-300 mx-auto mb-4 animate-pulse" />
            <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
          </div>
          
          <p className={`text-xl text-red-100 mb-8 transition-all duration-1000 delay-200 ${newsletterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Get the latest tutorials and tips delivered to your inbox
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 max-w-xl mx-auto transition-all duration-1000 delay-400 ${newsletterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-300 transform focus:scale-105"
            />
            <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all duration-300 whitespace-nowrap transform hover:scale-105 hover:shadow-2xl">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;