import Head from 'next/head';
import Header from '../../components/Header';
import FlightsListing from '../../components/FlightsListing';
import Footer from '../../components/Footer';

export default function Flights() {
  return (
    <div>
      <Head>
        <title>Flights - Tour & Travel Agency</title>
        <meta name="description" content="Search and book flights for your next vacation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <FlightsListing />
      <Footer />
    </div>
  );
}
