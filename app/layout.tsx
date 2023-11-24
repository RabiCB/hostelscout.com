import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hostelscout",
  description:
    "Hostelscout expolore hostels and accomodation around the globe ",
  keywords:
    "hostelscout, hostels in nepal , hostel near me , best hostel in nepal , best hostels, accomdation, cheap hostels, hostel , hostescout ",
  subject: "hostels and accomdation",
  copyright: "chesterlee",
  language: "ES",
  robots: "index,follow",
  coverage: "worldwide",
  verification: {
    google: "rqoGcoydFL1P8M80747RFMH41LZkBG1Ti4eCLGPiAEo",
  },
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
