
import Navbar from '../components/Navbar'
import Homepage from '../components/Homepage'
import Head from 'next/head'


export default function Home() {

  return (
    <>
      <Head>

        <meta name="hotelscout" key="hostelscout" content="find hostel near you on affordable price in nepal" />

        <meta name="description" content="Checkout our hostelscout" key="desc" />
        <meta property="hostelscout" content="www.facebook.com" />
        <meta
          property="og:description"
          content="And a social description for our website"
          key="website"
        />
        <meta
          key="property"
          property="profileimage"
          content="https://example.com/images/cool-page.jpg"
        />
      </Head>
      <Navbar />
      <Homepage />

    </>

  )

}
