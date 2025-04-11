import Head from 'next/head';
import Header from '../../components/Header';
import BookingFlow from '../../components/BookingFlow';
import Footer from '../../components/Footer';

export default function Bookings() {
  return (
    <div>
      <Head>
        <title>Bookings - Tour & Travel Agency</title>
        <meta name="description" content="Manage your bookings for hotels, flights, and tours." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <BookingFlow />
      <Footer />
    </div>
  );
}
