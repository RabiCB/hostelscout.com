
import Navbar from '../components/Navbar'
import Homepage from '../components/Homepage'
import Head from 'next/head'
import { useEffect } from 'react'
import { Client, Databases, ID } from "appwrite";


export default function Home() {

 

  return (
    <>
      
      <Navbar />
      <Homepage />

    </>

  )

}
