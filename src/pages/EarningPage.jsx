import React, { useState, useEffect } from 'react';
import { ExternalLink, TrendingUp, Star, Search, X, Filter, DollarSign, Award, Zap, Clock, Users, CheckCircle, ArrowRight, Target } from 'lucide-react';

const EarningPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTask, setHoveredTask] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Task Array
  const tasks = [
    {
      id: 1,
      name: 'YouTube Video Watch & Subscribe',
      category: 'video',
      earnings: '₹50-100',
      time: '5 min',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
      rating: 4.8,
      completed: 5200,
      link: 'https://www.youtube.com',
      badge: 'Hot',
      description: 'Watch full video, like and subscribe to earn instantly',
      difficulty: 'Easy'
    },
    {
      id: 2,
      name: 'Instagram Follow & Like Posts',
      category: 'social',
      earnings: '₹30-80',
      time: '3 min',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80',
      rating: 4.7,
      completed: 8500,
      link: 'https://www.instagram.com',
      badge: 'Popular',
      description: 'Follow account and like recent 5 posts to complete task',
      difficulty: 'Easy'
    },
    {
      id: 3,
      name: 'Facebook Page Like & Share',
      category: 'social',
      earnings: '₹40-90',
      time: '4 min',
      image: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=800&q=80',
      rating: 4.9,
      completed: 3400,
      link: 'https://www.facebook.com',
      badge: 'Trending',
      description: 'Like the page and share post on your timeline',
      difficulty: 'Easy'
    },
    {
      id: 4,
      name: 'App Download & Register',
      category: 'app',
      earnings: '₹100-200',
      time: '10 min',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      rating: 4.8,
      completed: 6200,
      link: 'https://play.google.com',
      badge: 'High Pay',
      description: 'Download app, register and use for 2 minutes',
      difficulty: 'Medium'
    },
    {
      id: 5,
      name: 'Website Visit & Sign Up',
      category: 'web',
      earnings: '₹60-120',
      time: '7 min',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      rating: 4.7,
      completed: 4100,
      link: 'https://example.com',
      badge: 'Easy',
      description: 'Visit website and complete registration process',
      difficulty: 'Easy'
    },
    {
      id: 6,
      name: 'Survey Complete & Submit',
      category: 'survey',
      earnings: '₹80-150',
      time: '15 min',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
      rating: 4.6,
      completed: 2800,
      link: 'https://surveys.com',
      badge: 'Quick',
      description: 'Answer survey questions and submit your response',
      difficulty: 'Medium'
    },
    {
      id: 7,
      name: 'Telegram Channel Join',
      category: 'social',
      earnings: '₹20-50',
      time: '2 min',
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80',
      rating: 4.9,
      completed: 1900,
      link: 'https://t.me',
      badge: 'Fast',
      description: 'Join telegram channel and stay active for 24 hours',
      difficulty: 'Easy'
    },
    {
      id: 8,
      name: 'Twitter Follow & Retweet',
      category: 'social',
      earnings: '₹35-75',
      time: '3 min',
      image: 'https://images.unsplash.com/photo-1611605698335-22eedecc7b51?w=800&q=80',
      rating: 4.7,
      completed: 5600,
      link: 'https://twitter.com',
      badge: 'New',
      description: 'Follow account and retweet pinned post',
      difficulty: 'Easy'
    },
    {
      id: 9,
      name: 'WhatsApp Group Join',
      category: 'social',
      earnings: '₹25-60',
      time: '1 min',
      image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80',
      rating: 4.5,
      completed: 7300,
      link: 'https://whatsapp.com',
      badge: 'Simple',
      description: 'Join WhatsApp group via link provided',
      difficulty: 'Easy'
    },
    {
      id: 10,
      name: 'Product Review Write',
      category: 'review',
      earnings: '₹70-140',
      time: '12 min',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
      rating: 4.9,
      completed: 3200,
      link: 'https://reviews.com',
      badge: 'Premium',
      description: 'Write detailed review about the product',
      difficulty: 'Medium'
    },
    {
      id: 11,
      name: 'Google Play Store Rating',
      category: 'app',
      earnings: '₹40-85',
      time: '5 min',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
      rating: 4.6,
      completed: 2100,
      link: 'https://play.google.com',
      badge: 'Active',
      description: 'Rate and review app on Google Play Store',
      difficulty: 'Easy'
    },
    {
      id: 12,
      name: 'Refer Friends Program',
      category: 'referral',
      earnings: '₹150-300',
      time: '10 min',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      rating: 4.8,
      completed: 4500,
      link: 'https://refer.com',
      badge: 'Bonus',
      description: 'Refer friends and earn when they complete tasks',
      difficulty: 'Easy'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tasks', icon: Target },
    { id: 'video', name: 'Video', icon: TrendingUp },
    { id: 'social', name: 'Social', icon: Users },
    { id: 'app', name: 'Apps', icon: Zap },
    { id: 'web', name: 'Web', icon: ExternalLink },
    { id: 'survey', name: 'Survey', icon: CheckCircle },
    { id: 'review', name: 'Review', icon: Star },
    { id: 'referral', name: 'Refer', icon: Award }
  ];

  const filteredTasks = tasks.filter(task => {
    const matchesCategory = selectedCategory === 'all' || task.category === selectedCategory;
    const matchesSearch = task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getBadgeColor = (badge) => {
    const colors = {
      'Hot': 'from-red-500 to-orange-500',
      'Popular': 'from-pink-500 to-rose-500',
      'Trending': 'from-orange-500 to-amber-500',
      'High Pay': 'from-purple-600 to-pink-600',
      'Easy': 'from-green-500 to-emerald-500',
      'Quick': 'from-blue-500 to-cyan-500',
      'Fast': 'from-cyan-500 to-blue-400',
      'New': 'from-indigo-500 to-purple-500',
      'Simple': 'from-teal-500 to-green-500',
      'Premium': 'from-violet-600 to-purple-600',
      'Active': 'from-lime-500 to-green-500',
      'Bonus': 'from-yellow-500 to-orange-500'
    };
    return colors[badge] || 'from-gray-500 to-gray-600';
  };

  const totalEarnings = tasks.reduce((acc, task) => acc + parseInt(task.earnings.split('-')[1].replace('₹', '')), 0);
  const totalCompleted = tasks.reduce((acc, task) => acc + task.completed, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-pink-50">
      {/* Enhanced Header */}
      <div className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'shadow-2xl' : 'shadow-lg'}`}>
        {/* Main Header */}
        <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-orange-600 relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-blob" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-white rounded-full blur-3xl animate-blob animation-delay-4000" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Left Section - Branding */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-300 rounded-xl blur-lg animate-pulse" />
                    <div className="relative bg-white/20 backdrop-blur-sm p-2 rounded-xl">
                      <Zap className="w-8 h-8 lg:w-10 lg:h-10 text-yellow-300" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                      TaskEarn <span className="text-yellow-300">Pro</span>
                    </h1>
                    <p className="text-orange-100 text-sm lg:text-base">Complete tasks, Earn instantly! 💰</p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="flex items-center gap-4 text-white/90 text-xs lg:text-sm">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-semibold">{tasks.length} Active Tasks</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    <span className="font-semibold">{(totalCompleted / 1000).toFixed(0)}K+ Users</span>
                  </div>
                </div>
              </div>

              {/* Right Section - Search */}
              <div className="lg:w-96">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-600 w-5 h-5 z-10" />
                    <input
                      type="text"
                      placeholder="Search tasks..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-12 py-3 lg:py-3.5 bg-white text-gray-900 placeholder-gray-500 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-300/50 transition-all duration-300 font-medium shadow-xl"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-600 transition-colors z-10"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white/95 backdrop-blur-lg border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center group cursor-pointer">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-xl lg:text-2xl font-black bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  ₹{(totalEarnings / 1000).toFixed(0)}K+
                </p>
                <p className="text-xs text-gray-600 font-medium">Total Payouts</p>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-xl lg:text-2xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  {(totalCompleted / 1000).toFixed(0)}K+
                </p>
                <p className="text-xs text-gray-600 font-medium">Tasks Done</p>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-xl lg:text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  4.8★
                </p>
                <p className="text-xs text-gray-600 font-medium">Avg Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="flex items-center gap-2 lg:gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex items-center gap-2 pr-2 flex-shrink-0">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-semibold text-gray-700">Filter:</span>
          </div>
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-pink-600 via-rose-600 to-orange-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg hover:scale-105'
                }`}
                style={{
                  animation: isVisible ? `slideIn 0.5s ease-out ${index * 0.05}s both` : 'none'
                }}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tasks List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-8">
        <div className="space-y-4">
          {filteredTasks.map((task, index) => (
            <div
              key={task.id}
              onMouseEnter={() => setHoveredTask(task.id)}
              onMouseLeave={() => setHoveredTask(null)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl border border-gray-100"
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.05}s both` : 'none',
                transform: hoveredTask === task.id ? 'translateY(-4px) scale(1.01)' : 'translateY(0) scale(1)'
              }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Left Side - Image */}
                <div className="relative sm:w-56 lg:w-64 h-48 sm:h-auto flex-shrink-0 group overflow-hidden">
                  <img
                    src={task.image}
                    alt={task.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Badge */}
                  <div className={`absolute top-3 left-3 bg-gradient-to-r ${getBadgeColor(task.badge)} text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-xl backdrop-blur-sm`}
                       style={{ animation: 'pulse 2s ease-in-out infinite' }}>
                    ✨ {task.badge}
                  </div>

                  {/* Difficulty Badge */}
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {task.difficulty}
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Right Side - Details */}
                <div className="flex-1 p-4 lg:p-6 flex flex-col justify-between">
                  <div>
                    {/* Task Name */}
                    <h3 className="text-lg lg:text-xl font-black text-gray-900 mb-2 hover:text-transparent hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-600 hover:bg-clip-text transition-all duration-300 cursor-pointer">
                      {task.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-3 lg:mb-4 line-clamp-2">
                      {task.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      <div className="flex items-center gap-2 bg-gradient-to-br from-blue-50 to-cyan-50 px-3 py-2 rounded-lg">
                        <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-600">Time</p>
                          <p className="text-sm font-bold text-gray-900">{task.time}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-gradient-to-br from-purple-50 to-pink-50 px-3 py-2 rounded-lg">
                        <Users className="w-4 h-4 text-purple-600 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-600">Done</p>
                          <p className="text-sm font-bold text-gray-900">{(task.completed / 1000).toFixed(1)}K</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-gradient-to-br from-yellow-50 to-orange-50 px-3 py-2 rounded-lg col-span-2 sm:col-span-1">
                        <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 fill-yellow-500" />
                        <div>
                          <p className="text-xs text-gray-600">Rating</p>
                          <p className="text-sm font-bold text-gray-900">{task.rating}★</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-gradient-to-br from-green-50 to-emerald-50 px-3 py-2 rounded-lg col-span-2 sm:col-span-1">
                        <DollarSign className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-600">Earn</p>
                          <p className="text-sm font-bold text-green-600">{task.earnings}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section - Earnings & CTA */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    {/* Earnings Highlight */}
                    <div className="flex-1 bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100 p-4 rounded-xl border-2 border-pink-200">
                      <p className="text-xs text-gray-600 mb-1 font-medium">💰 You'll Earn</p>
                      <p className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                        {task.earnings}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={task.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative bg-gradient-to-r from-pink-600 via-rose-600 to-orange-600 text-white px-6 lg:px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden hover:scale-105 sm:w-auto"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-pink-700 via-rose-700 to-orange-700 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
                      <span className="relative flex items-center gap-2 text-base lg:text-lg">
                        <Zap className="w-5 h-5" />
                        Start Task
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTasks.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 blur-2xl opacity-30 animate-pulse" />
              <Zap className="relative w-20 h-20 text-gray-300" />
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-3">No tasks found</h3>
            <p className="text-gray-600 text-lg mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-gradient-to-r from-pink-600 to-orange-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Animations & Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default EarningPage;