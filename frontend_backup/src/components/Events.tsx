'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'
import { apiClient, type Event } from '@/lib/api'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'

export default function Events() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await apiClient.getEvents()
        if (response.success) {
          setEvents(response.data)
        }
      } catch (error) {
        console.error('Failed to fetch events:', error)
        // Fallback data
        setEvents([
          {
            id: '1',
            title: 'Field Evangelistic Campaign',
            description: 'Join us for a week-long evangelistic campaign featuring powerful messages, music, and community outreach.',
            event_date: '2024-03-15',
            time: '6:00 PM - 8:30 PM',
            location: 'Kitale Stadium',
            category: 'evangelism',
            image_url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
            is_featured: true,
            is_active: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '2',
            title: 'Youth Convention',
            description: 'Annual youth convention with workshops, music, and spiritual growth sessions.',
            event_date: '2024-03-22',
            time: '9:00 AM - 5:00 PM',
            location: 'Eldoret Conference Center',
            category: 'youth',
            image_url: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            is_featured: false,
            is_active: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '3',
            title: 'Health Fair',
            description: 'Free health screenings, consultations, and wellness education across the field.',
            event_date: '2024-03-29',
            time: '8:00 AM - 4:00 PM',
            location: 'Various Locations',
            category: 'health',
            image_url: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
            is_featured: false,
            is_active: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const featuredEvent = events.find(event => event.is_featured)
  const otherEvents = events.filter(event => !event.is_featured)

  if (loading) {
    return (
      <section id="events" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Join us for worship, fellowship, and community service
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-lg h-80"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="events" className="py-20 bg-gray-50">
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
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600">
            Join us for worship, fellowship, and community service
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Featured Event */}
          {featuredEvent && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-auto">
                    <Image
                      src={featuredEvent.image_url || '/placeholder-event.jpg'}
                      alt={featuredEvent.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured Event
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-green-600 font-medium">
                        {formatDate(featuredEvent.event_date)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {featuredEvent.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredEvent.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      {featuredEvent.time && (
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{featuredEvent.time}</span>
                        </div>
                      )}
                      {featuredEvent.location && (
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{featuredEvent.location}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-4">
                      <Button className="bg-green-600 hover:bg-green-700">
                        Learn More
                      </Button>
                      {featuredEvent.registration_url && (
                        <Button variant="outline">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Register
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Other Events */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={event.image_url || '/placeholder-event.jpg'}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Calendar className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm text-green-600 font-medium">
                        {formatDate(event.event_date)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {event.time && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-3 h-3 mr-2" />
                          <span>{event.time}</span>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-3 h-3 mr-2" />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                    <Button size="sm" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
