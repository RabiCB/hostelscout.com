import React from "react"
import Commonnav from "../../../components/commonnav"

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
    url: "https://hostelscout.vercel.app/",
    openGraph: {
      title: "hostelscout",
      description: "hostels and accomodations",
      url: "https://nextjs.org",
      siteName: "Hostelscout",
      images: [
        {
          url: "https://hostelscout.vercel.app/hostelscout.png",
        },
        {
          url: "https://hostelscout.vercel.app/hostelscout.png",
  
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
            <Commonnav/>
            <main>{children}</main>
        </>
    )
}