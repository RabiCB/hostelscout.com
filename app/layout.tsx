import Navbar from "../components/Navbar";
import "./globals.css";

import React from "react";
import { Manrope } from 'next/font/google'





//👇 Configure our font object
const openSans = Manrope({
  subsets: ['latin'],
  display: 'swap',
})
const metadata = {
  title: "Hostelscout",
  description:
    "Hostelscout expolore hostels and accomodation around the globe ",
  keywords:
    "hostelscout, hostels in nepal , hostel near me , best hostel in nepal , best hostels, accomdation, cheap hostels, hostel , hostescout , login hostelscout",
  subject: "hostels and accomdation",
  copyright: "chesterlee",
  language: "ES",
  robots: "index,follow",
  coverage: "worldwide",
 
  url: "https://hostelscout.vercel.app/",
  openGraph: {
    title: "hostelscout",
    description: "hostels and accomodations",
    url: "https://nextjs.org",
    siteName: "Hostelscout",
    images: [
      {
        url: "https://hostelscout.vercel.app/hostelscoutlogo.png",
      },
      {
        url: "https://hostelscout.vercel.app/hostelscoutlogo.png",

        alt: "hostelscoutlogo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
      
        {children}</body>
    </html>
  );
}
