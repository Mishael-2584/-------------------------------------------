'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, GraduationCap, Cross, Users, Target, Eye } from 'lucide-react'
import Image from 'next/image'

const missionPoints = [
  {
    icon: Cross,
    title: 'Evangelism & Outreach',
    description: 'Leading souls to Christ through evangelistic campaigns and community outreach programs.'
  },
  {
    icon: GraduationCap,
    title: 'Education Ministry',
    description: 'Nurturing minds and spirits through quality education and spiritual guidance.'
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Promoting physical, mental, and spiritual wellness in our communities.'
  },
  {
    icon: Users,
    title: 'Community Service',
    description: 'Serving our communities with love, compassion, and practical assistance.'
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            About North Rift Valley Field
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in 2022, serving communities across Northern Kenya with dedication and faith
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To proclaim the everlasting gospel of Jesus Christ to all people, preparing them for His soon return through evangelism, education, health ministry, and community service.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be a vibrant, growing field that transforms communities through the power of the gospel, fostering spiritual growth, education, and holistic development.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Territory</h3>
                <p className="text-gray-600 leading-relaxed">
                  NRVF encompasses Trans-Nzoia, Turkana, and West Pokot Counties; Tiaty East and Tiaty West Sub-Counties in Baringo County; and Mt. Elgon, Cheptais, and Sirisia Sub-Counties in Bungoma County.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="overflow-hidden shadow-xl">
              <div className="relative h-96">
                <Image
                  src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Church Community"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Building Communities</h4>
                  <p className="text-white/90">Together in faith and service</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Mission Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 font-serif">
            Our Core Ministries
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <point.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {point.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
