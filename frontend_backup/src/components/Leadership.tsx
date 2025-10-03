'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, User } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { apiClient, type Leader } from '@/lib/api'

export default function Leadership() {
  const [leaders, setLeaders] = useState<Leader[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const response = await apiClient.getLeadership()
        if (response.success) {
          setLeaders(response.data)
        }
      } catch (error) {
        console.error('Failed to fetch leaders:', error)
        // Fallback data
        setLeaders([
          {
            id: '1',
            name: 'Jackson N. Soet',
            position: 'President',
            description: 'Leading the field with vision and dedication to serve our communities.',
            image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
            email: 'president@nrvf.adventist.or.ke',
            phone: '+254-0715 981 630',
            position_order: 1,
            is_active: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '2',
            name: 'Joseph Ocharo',
            position: 'Secretary',
            description: 'Ensuring effective administration and communication across the field.',
            image_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            email: 'secretary@nrvf.adventist.or.ke',
            phone: '+254-0715 981 630',
            position_order: 2,
            is_active: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '3',
            name: 'Amos Songa',
            position: 'Treasurer',
            description: 'Managing resources with integrity and transparency for God\'s work.',
            image_url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            email: 'treasurer@nrvf.adventist.or.ke',
            phone: '+254-0715 981 630',
            position_order: 3,
            is_active: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchLeaders()
  }, [])

  if (loading) {
    return (
      <section id="leadership" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Our Leadership
            </h2>
            <p className="text-xl text-gray-600">
              Dedicated leaders serving our community
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-lg h-96"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="leadership" className="py-20 bg-white">
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
            Our Leadership
          </h2>
          <p className="text-xl text-gray-600">
            Dedicated leaders serving our community
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src={leader.image_url || '/placeholder-leader.jpg'}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-green-600 font-medium mb-4">
                      {leader.position}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {leader.description}
                    </p>
                    
                    {/* Contact Info */}
                    <div className="space-y-2">
                      {leader.email && (
                        <div className="flex items-center justify-center text-sm text-gray-500">
                          <Mail className="w-4 h-4 mr-2" />
                          <a 
                            href={`mailto:${leader.email}`}
                            className="hover:text-green-600 transition-colors"
                          >
                            {leader.email}
                          </a>
                        </div>
                      )}
                      {leader.phone && (
                        <div className="flex items-center justify-center text-sm text-gray-500">
                          <Phone className="w-4 h-4 mr-2" />
                          <a 
                            href={`tel:${leader.phone}`}
                            className="hover:text-green-600 transition-colors"
                          >
                            {leader.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
