'use client'

import { motion } from 'framer-motion'
import { Church, Users, MapPin, Heart, Star, ArrowRight, Play, BookOpen, Shield, Calendar, Mail, Phone, Clock, Globe, ChevronDown, Sparkles, Award, Cross } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-blue-100/50 shadow-lg shadow-blue-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-4"
            >
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/25 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <Church className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                  North Rift Valley Field
                </h1>
                <p className="text-sm font-medium text-blue-600 flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Seventh-day Adventist Church
                </p>
              </div>
            </motion.div>
            
            <div className="hidden lg:flex items-center space-x-8">
              {['About', 'Ministries', 'Leadership', 'Events', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>
            
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-8 py-3 rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center space-x-2"
            >
              <Heart className="w-4 h-4" />
              <span>Get Involved</span>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-slate-900/95 z-10"></div>
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-fixed"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-8">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-white/90 mb-6 border border-white/20"
              >
                <Award className="w-4 h-4 inline mr-2" />
                Seventh-day Adventist Church
              </motion.span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight"
            >
              North Rift Valley Field
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-2xl md:text-3xl mb-8 text-blue-100 font-light max-w-5xl mx-auto leading-relaxed"
            >
              Proclaiming the everlasting gospel of Jesus Christ across Northern Kenya
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl mb-16 max-w-6xl mx-auto leading-relaxed text-blue-50"
            >
              <p className="mb-4">
                Serving <span className="text-yellow-300 font-semibold bg-yellow-300/10 px-3 py-1 rounded-full">Trans-Nzoia, Turkana, West Pokot</span>
              </p>
              <p>
                <span className="text-yellow-300 font-semibold bg-yellow-300/10 px-3 py-1 rounded-full">393 churches</span> • 
                <span className="text-yellow-300 font-semibold bg-yellow-300/10 px-3 py-1 rounded-full ml-2">41,106 members</span> • 
                <span className="text-yellow-300 font-semibold bg-yellow-300/10 px-3 py-1 rounded-full ml-2">5 counties</span>
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-3 group"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center space-x-3 backdrop-blur-sm"
            >
              <Play className="w-5 h-5" />
              <span>Watch Video</span>
            </motion.button>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              { icon: Church, value: '393', label: 'Churches', color: 'text-yellow-300', bg: 'bg-yellow-300/10' },
              { icon: Users, value: '41,106', label: 'Members', color: 'text-yellow-300', bg: 'bg-yellow-300/10' },
              { icon: MapPin, value: '5', label: 'Counties', color: 'text-yellow-300', bg: 'bg-yellow-300/10' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6 group-hover:bg-white/30 transition-all duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className={`text-5xl md:text-6xl font-bold ${stat.color} mb-3`}>
                  {stat.value}
                </div>
                <div className="text-xl text-white/90 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-6">
              <Cross className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About North Rift Valley Field
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Established in 2022, serving communities across Northern Kenya with dedication, faith, and unwavering commitment to spreading the gospel
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                {
                  icon: Heart,
                  title: 'Our Mission',
                  description: 'To proclaim the everlasting gospel of Jesus Christ to all people, preparing them for His soon return through evangelism, education, health ministry, and community service.',
                  color: 'from-blue-500 to-blue-600',
                  bg: 'from-blue-50 to-blue-100'
                },
                {
                  icon: Star,
                  title: 'Our Vision',
                  description: 'To be a vibrant, growing field that transforms communities through the power of the gospel, fostering spiritual growth, education, and holistic development.',
                  color: 'from-red-500 to-red-600',
                  bg: 'from-red-50 to-red-100'
                },
                {
                  icon: MapPin,
                  title: 'Our Territory',
                  description: 'NRVF encompasses Trans-Nzoia, Turkana, and West Pokot Counties; Tiaty East and Tiaty West Sub-Counties in Baringo County; and Mt. Elgon, Cheptais, and Sirisia Sub-Counties in Bungoma County.',
                  color: 'from-slate-500 to-slate-600',
                  bg: 'from-slate-50 to-slate-100'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`bg-gradient-to-br ${item.bg} rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300 group`}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative text-center text-white p-8 z-10">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
                      <Church className="w-16 h-16" />
                    </div>
                    <h4 className="text-3xl font-bold mb-4">Building Communities</h4>
                    <p className="text-white/90 text-xl">Together in faith and service</p>
                    <div className="mt-8 flex justify-center space-x-3">
                      {[1, 2, 3].map((dot) => (
                        <div key={dot} className={`w-3 h-3 rounded-full ${dot === 2 ? 'bg-white' : 'bg-white/30'} transition-all duration-300`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section id="ministries" className="py-24 bg-gradient-to-br from-blue-50 via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Core Ministries
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Serving our community through various ministries and programs designed to uplift, educate, and transform lives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Evangelism & Outreach',
                description: 'Leading souls to Christ through evangelistic campaigns and community outreach programs.',
                color: 'from-red-500 to-red-600',
                bg: 'from-red-50 to-red-100'
              },
              {
                icon: BookOpen,
                title: 'Education Ministry',
                description: 'Nurturing minds and spirits through quality education and spiritual guidance.',
                color: 'from-blue-500 to-blue-600',
                bg: 'from-blue-50 to-blue-100'
              },
              {
                icon: Shield,
                title: 'Health & Wellness',
                description: 'Promoting physical, mental, and spiritual wellness in our communities.',
                color: 'from-green-500 to-green-600',
                bg: 'from-green-50 to-green-100'
              },
              {
                icon: Users,
                title: 'Community Service',
                description: 'Serving our communities with love, compassion, and practical assistance.',
                color: 'from-purple-500 to-purple-600',
                bg: 'from-purple-50 to-purple-100'
              }
            ].map((ministry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`bg-gradient-to-br ${ministry.bg} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 group`}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${ministry.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <ministry.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {ministry.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {ministry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Dedicated leaders serving our community with wisdom, compassion, and unwavering faith
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: 'Jackson Soet',
                position: 'President',
                description: 'Leading the field with vision and dedication to serve our communities across Northern Kenya.',
                color: 'from-blue-500 to-blue-700',
                bg: 'from-blue-50 to-blue-100',
                status: 'Newly Elected'
              },
              {
                name: 'Joseph Ocharo',
                position: 'Executive Secretary',
                description: 'Ensuring effective administration and communication across the field.',
                color: 'from-red-500 to-red-700',
                bg: 'from-red-50 to-red-100',
                status: 'Newly Elected'
              },
              {
                name: 'Reu Katam',
                position: 'Treasurer',
                description: 'Managing resources with integrity and transparency for God\'s work.',
                color: 'from-slate-500 to-slate-700',
                bg: 'from-slate-50 to-slate-100',
                status: 'Newly Elected'
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 group"
              >
                <div className={`h-64 bg-gradient-to-br ${leader.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative text-center text-white z-10">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                      <Users className="w-12 h-12" />
                    </div>
                    <h4 className="text-2xl font-bold">{leader.name}</h4>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {leader.name}
                    </h3>
                    {leader.status && (
                      <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {leader.status}
                      </span>
                    )}
                  </div>
                  <p className="text-blue-600 font-semibold text-lg mb-6">
                    {leader.position}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {leader.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join us for worship, fellowship, and community service events that bring us together in faith
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Field Evangelistic Campaign',
                date: 'March 15, 2024',
                location: 'Kitale Stadium',
                description: 'Join us for a week-long evangelistic campaign featuring powerful messages, music, and community outreach.',
                color: 'from-blue-500 to-blue-700',
                bg: 'from-blue-50 to-blue-100'
              },
              {
                title: 'Youth Convention',
                date: 'March 22, 2024',
                location: 'Eldoret Conference Center',
                description: 'Annual youth convention with workshops, music, and spiritual growth sessions.',
                color: 'from-red-500 to-red-700',
                bg: 'from-red-50 to-red-100'
              },
              {
                title: 'Health & Wellness Fair',
                date: 'April 5, 2024',
                location: 'Various Locations',
                description: 'Free health screenings, wellness workshops, and community health education.',
                color: 'from-green-500 to-green-700',
                bg: 'from-green-50 to-green-100'
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 group"
              >
                <div className={`h-56 bg-gradient-to-br ${event.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative text-center text-white z-10">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                      <Calendar className="w-10 h-10" />
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full blur-lg animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-blue-600 mb-3">
                    <Calendar className="w-5 h-5 mr-3" />
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-6">
                    <MapPin className="w-5 h-5 mr-3" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
              Get in touch with us for more information, prayer requests, or to learn how you can get involved
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
                <p className="text-blue-200 mb-10 leading-relaxed text-lg">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible. Your prayers, questions, and support are always welcome.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: MapPin, title: 'Address', content: 'P.O. Box 68, Kitale, 30200, Kenya', color: 'from-blue-500 to-blue-600' },
                  { icon: Phone, title: 'Phone', content: '+254-0715 981 630', color: 'from-green-500 to-green-600' },
                  { icon: Mail, title: 'Email', content: 'nrvf@adventist.or.ke', color: 'from-red-500 to-red-600' },
                  { icon: Clock, title: 'Office Hours', content: 'Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 8:00 AM - 12:00 PM\nSunday: Closed', color: 'from-purple-500 to-purple-600' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
                      <p className="text-blue-200 leading-relaxed whitespace-pre-line">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl"
            >
              <h3 className="text-3xl font-bold mb-8">Send us a Message</h3>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-blue-200 mb-3">Name *</label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-blue-200 mb-3">Email *</label>
                    <input
                      type="email"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-200 mb-3">Subject *</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-200 mb-3">Message *</label>
                  <textarea
                    rows={6}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300 backdrop-blur-sm"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl">
                  <Church className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">North Rift Valley Field</h3>
                  <p className="text-blue-400 font-medium">Seventh-day Adventist Church</p>
                </div>
        </div>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg max-w-2xl">
                Serving Trans-Nzoia, Turkana, West Pokot, Baringo, and Bungoma Counties with dedication, faith, and commitment to spreading the gospel of Jesus Christ.
              </p>
              <div className="flex space-x-4">
                {[Globe, Mail].map((Icon, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="#"
                    className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {['About Us', 'Ministries', 'Leadership', 'Events', 'Contact'].map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-blue-400 transition-colors text-lg">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Ministries</h4>
              <ul className="space-y-4">
                {['Evangelism', 'Health', 'Education', 'Youth', 'Women'].map((ministry, index) => (
                  <motion.li
                    key={ministry}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-lg">
                      {ministry}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-16 pt-8 text-center">
            <p className="text-gray-400 text-lg">
              © 2024 North Rift Valley Field - Seventh-day Adventist Church. All rights reserved.
            </p>
            <p className="text-gray-500 mt-2">
              An official website of the Seventh-day Adventist Church East Kenya Union Conference.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}