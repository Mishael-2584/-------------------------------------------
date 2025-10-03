'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  quick: [
    { name: 'About Us', href: '#about' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Departments', href: '#departments' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ],
  ministries: [
    { name: 'Evangelism', href: '#evangelism' },
    { name: 'Health Ministries', href: '#health' },
    { name: 'Education', href: '#education' },
    { name: 'Youth Ministries', href: '#youth' },
    { name: 'Women Ministries', href: '#women' },
    { name: 'Children Ministries', href: '#children' },
  ],
  resources: [
    { name: 'Sermons', href: '#sermons' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Newsletters', href: '#newsletters' },
    { name: 'Bible Study Guides', href: '#bible-study' },
    { name: 'Forms & Documents', href: '#documents' },
  ]
}

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100083500807198',
    icon: Facebook
  },
  {
    name: 'Twitter',
    href: '#',
    icon: Twitter
  },
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram
  },
  {
    name: 'YouTube',
    href: '#',
    icon: Youtube
  }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">NRVF</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">North Rift Valley Field</h3>
                <p className="text-gray-400 text-sm">Seventh-day Adventist Church</p>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Serving Trans-Nzoia, Turkana, West Pokot, Baringo, and Bungoma Counties with 
              dedication, faith, and commitment to spreading the gospel of Jesus Christ.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">P.O. Box 68, Kitale, 30200, Kenya</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a 
                  href="tel:+254715981630" 
                  className="text-sm hover:text-green-400 transition-colors"
                >
                  +254-0715 981 630
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a 
                  href="mailto:nrvf@adventist.or.ke" 
                  className="text-sm hover:text-green-400 transition-colors"
                >
                  nrvf@adventist.or.ke
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quick.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ministries</h4>
            <ul className="space-y-2">
              {footerLinks.ministries.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 North Rift Valley Field - Seventh-day Adventist Church. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                An official website of the Seventh-day Adventist Church East Kenya Union Conference.
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
