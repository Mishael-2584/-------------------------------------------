import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'North Rift Valley Field - Seventh-day Adventist Church',
  description: 'North Rift Valley Field of the Seventh-day Adventist Church in Kenya. Serving Trans-Nzoia, Turkana, West Pokot, Baringo, and Bungoma Counties with 393 churches and 41,106 members.',
  keywords: ['Seventh-day Adventist', 'Church', 'Kenya', 'North Rift Valley Field', 'NRVF', 'Adventist', 'Christian', 'Faith'],
  authors: [{ name: 'North Rift Valley Field' }],
  creator: 'North Rift Valley Field',
  publisher: 'North Rift Valley Field',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nrvf.adventist.or.ke'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'North Rift Valley Field - Seventh-day Adventist Church',
    description: 'Serving communities across Northern Kenya with 393 churches and 41,106 members.',
    url: 'https://nrvf.adventist.or.ke',
    siteName: 'North Rift Valley Field',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'North Rift Valley Field - Seventh-day Adventist Church',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'North Rift Valley Field - Seventh-day Adventist Church',
    description: 'Serving communities across Northern Kenya with 393 churches and 41,106 members.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2E7D32" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
