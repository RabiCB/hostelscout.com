import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hostelscout',
  description: 'Hostelscout expolore hostels and accomodation around the globe ',
  keywords:'hostelscout, hostels in nepal , hostel near me , best hostel in nepal , best hostels, accomdation, cheap hostels, hostel , hostescout ',
 subject:"hostels and accomdation",
 copyright:'chesterlee',
 language:'ES',
 robots:'index,follow',
 coverage:'worldwide',
 url: "https://hostelscout.vercel.app/",
 openGraph: {
  title: 'Next.js',
  description: 'The React Framework for the Web',
  url: 'https://nextjs.org',
  siteName: 'Next.js',
  images: [
    {
      url: 'https://nextjs.org/og.png',
      width: 800,
      height: 600,
    },
    {
      url: 'https://nextjs.org/og-alt.png',
      width: 1800,
      height: 1600,
      alt: 'My custom alt',
    },
  ],
  locale: 'en_US',
  type: 'website',
},



  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
