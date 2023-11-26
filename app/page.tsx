
import Navbar from '../components/Navbar'
import Homepage from '../components/Homepage'
import Head from 'next/head'
import metada from 'next'
import React from 'react'
export const metadata = {
  title: "Hostelscout, Unleashing Adventure, One Stay at a Time",
  description:
    "Welcome to HostelScout, your ultimate destination for discovering the best hostels across the country! , HostelScout is your go-to platform .",
  keywords:
    "hostelscout, hostels in nepal , hostel near me , best hostel in nepal , best hostels, accomdation, cheap hostels, hostel , hostescout , login hostelscout",
  subject: "hostels and accomdation",
  copyright: "chesterlee",
  language: "ES",
  robots: "index,follow",
  coverage: "worldwide",
 
  url: "https://hostelscout.netlify.app/",
  openGraph: {
    title: "Hostelscout, Unleashing Adventure, One Stay at a Time",
    description: "Welcome to HostelScout, your ultimate destination for discovering the best hostels across the country! , HostelScout is your go-to platform .",
    url: "https://hostelscout.netlify.app/",
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
export default function Home() {

  

//  useEffect(()=>{


// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('647b1d99a6be71182293');

// const databases = new Databases(client);

// databases.listDocuments(
//     '647b2b3bdbfeed04e463',
//     '647b2b550dddd5971409',
//     [
//         Query.orderAsc(query),
//     ]
// );
//  },[query])

  return (
    
  
    <>
      
      <Navbar  />
      <Homepage />

    </>

  )

}
