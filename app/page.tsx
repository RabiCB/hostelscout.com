"use client"
import Navbar from '../components/Navbar'
import Homepage from '../components/Homepage'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Client, Databases, ID,Query  } from "appwrite";


export default function Home() {

  const [query,setQuery]=useState("")

  const handleSearch=(d:any)=>{
    setQuery(d)
    console.log("query",d)

  }
<Head>
<link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUUDIWZF5wMie9Tlz_tZIVlZ7kH4ApfoiVgUVXhIma&s" />

</Head>
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
      
      <Navbar query={query} handleSearch={handleSearch} setQuery={setQuery} />
      <Homepage />

    </>

  )

}
