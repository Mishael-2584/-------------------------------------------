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
  description: 'Official website of the North Rift Valley Field of the Seventh-day Adventist Church, serving Trans-Nzoia, Turkana, West Pokot, Baringo, and Bungoma Counties in Kenya.',
  keywords: ['North Rift Valley Field', 'Seventh-day Adventist Church', 'Kenya', 'Adventist', 'Church', 'Christian', 'Ministry', 'Evangelism', 'Trans-Nzoia', 'Turkana', 'West Pokot', 'Baringo', 'Bungoma'],
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
    description: 'Official website of the North Rift Valley Field of the Seventh-day Adventist Church, serving Northern Kenya with faith, hope, and love.',
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
    description: 'Official website of the North Rift Valley Field of the Seventh-day Adventist Church, serving Northern Kenya with faith, hope, and love.',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#003366" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}