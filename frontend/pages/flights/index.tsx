import Head from 'next/head';
import Header from '../../components/Header';
import FlightsListing from '../../components/FlightsListing';
import Footer from '../../components/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Flights() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('/api/flights');
        setFlights(response.data);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };

    fetchFlights();
  }, []);

  return (
    <div>
      <Head>
        <title>Flights - Tour & Travel Agency</title>
        <meta name="description" content="Search and book flights for your next vacation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <FlightsListing flights={flights} />
      <Footer />
    </div>
  );
}
