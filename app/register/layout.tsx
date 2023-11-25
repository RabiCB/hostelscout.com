import React from "react"
import Commonnav from "../../components/commonnav"
import type { Metadata } from 'next'
export const metadata:Metadata = {
    title: "Hostelscout",
    description:
      "Hostelscout expolore hostels and accomodation around the globe ",
    keywords:
      "hostelscout, hostels in nepal , hostel near me , best hostel in nepal , best hostels, accomdation, cheap hostels, hostel , hostescout , login hostelscout",
   

    robots: "index,follow",
    
  
   
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
  
export default function DetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {/* <Commonnav/> */}
            <main>{children}</main>
        </>
    )
}