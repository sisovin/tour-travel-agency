import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedDestinations from '../components/FeaturedDestinations';
import PopularTourPackages from '../components/PopularTourPackages';
import HotelsListing from '../components/HotelsListing';
import FlightsListing from '../components/FlightsListing';
import CarRentals from '../components/CarRentals';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tour & Travel Agency</title>
        <meta name="description" content="Discover your dream vacation with our tour and travel agency." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <FeaturedDestinations />
      <PopularTourPackages />
      <HotelsListing />
      <FlightsListing />
      <CarRentals />
      <Footer />
    </div>
  );
}
