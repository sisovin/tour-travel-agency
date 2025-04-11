import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [destinations, setDestinations] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [flights, setFlights] = useState([]);
  const [carRentals, setCarRentals] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [reviews, setReviews] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('/api/admin/stats');
        setStats(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stats:', error);
        router.push('/auth/login');
      }
    };

    const fetchDestinations = async () => {
      try {
        const response = await axios.get('/api/admin/destinations');
        setDestinations(response.data);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    const fetchHotels = async () => {
      try {
        const response = await axios.get('/api/admin/hotels');
        setHotels(response.data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    const fetchFlights = async () => {
      try {
        const response = await axios.get('/api/admin/flights');
        setFlights(response.data);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };

    const fetchCarRentals = async () => {
      try {
        const response = await axios.get('/api/admin/car-rentals');
        setCarRentals(response.data);
      } catch (error) {
        console.error('Error fetching car rentals:', error);
      }
    };

    const fetchBookings = async () => {
      try {
        const response = await axios.get('/api/admin/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/admin/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get('/api/admin/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchStats();
    fetchDestinations();
    fetchHotels();
    fetchFlights();
    fetchCarRentals();
    fetchBookings();
    fetchUsers();
    fetchReviews();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="stats">
        <div className="stat">
          <h2>Total Bookings</h2>
          <p>{stats.totalBookings}</p>
        </div>
        <div className="stat">
          <h2>Total Revenue</h2>
          <p>${stats.totalRevenue}</p>
        </div>
        <div className="stat">
          <h2>Total Users</h2>
          <p>{stats.totalUsers}</p>
        </div>
      </div>
      <div className="manage-sections">
        <div className="section">
          <h2>Manage Destinations</h2>
          {destinations.map((destination) => (
            <div key={destination.id} className="destination">
              <p>{destination.name}</p>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          ))}
        </div>
        <div className="section">
          <h2>Manage Hotels</h2>
          {hotels.map((hotel) => (
            <div key={hotel.id} className="hotel">
              <p>{hotel.name}</p>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          ))}
        </div>
        <div className="section">
          <h2>Manage Flights</h2>
          {flights.map((flight) => (
            <div key={flight.id} className="flight">
              <p>{flight.airline}</p>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          ))}
        </div>
        <div className="section">
          <h2>Manage Car Rentals</h2>
          {carRentals.map((carRental) => (
            <div key={carRental.id} className="car-rental">
              <p>{carRental.type}</p>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          ))}
        </div>
        <div className="section">
          <h2>Manage Bookings</h2>
          {bookings.map((booking) => (
            <div key={booking.id} className="booking">
              <p>{booking.type}</p>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          ))}
        </div>
        <div className="section">
          <h2>Manage Users</h2>
          {users.map((user) => (
            <div key={user.id} className="user">
              <p>{user.email}</p>
              <button>Edit</button>
              <button>Block</button>
            </div>
          ))}
        </div>
        <div className="section">
          <h2>Manage Reviews</h2>
          {reviews.map((review) => (
            <div key={review.id} className="review">
              <p>{review.comment}</p>
              <button>Approve</button>
              <button>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
