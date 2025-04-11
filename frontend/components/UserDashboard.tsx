import { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [profile, setProfile] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [travelHistory, setTravelHistory] = useState([]);

  useEffect(() => {
    fetchProfile();
    fetchBookings();
    fetchPaymentMethods();
    fetchFavorites();
    fetchTravelHistory();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get('/api/user/profile');
      setProfile(response.data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await axios.get('/api/user/bookings');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const fetchPaymentMethods = async () => {
    try {
      const response = await axios.get('/api/user/payment-methods');
      setPaymentMethods(response.data);
    } catch (error) {
      console.error('Error fetching payment methods:', error);
    }
  };

  const fetchFavorites = async () => {
    try {
      const response = await axios.get('/api/user/favorites');
      setFavorites(response.data);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  const fetchTravelHistory = async () => {
    try {
      const response = await axios.get('/api/user/travel-history');
      setTravelHistory(response.data);
    } catch (error) {
      console.error('Error fetching travel history:', error);
    }
  };

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      {profile && (
        <div className="profile">
          <h2>Profile Settings</h2>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Phone: {profile.phone}</p>
        </div>
      )}
      <div className="bookings">
        <h2>My Bookings</h2>
        {bookings.map((booking) => (
          <div key={booking.id} className="booking">
            <p>Booking ID: {booking.id}</p>
            <p>Type: {booking.type}</p>
            <p>Status: {booking.status}</p>
          </div>
        ))}
      </div>
      <div className="payment-methods">
        <h2>Payment Methods</h2>
        {paymentMethods.map((method) => (
          <div key={method.id} className="payment-method">
            <p>Card Number: {method.cardNumber}</p>
            <p>Expiry Date: {method.expiryDate}</p>
          </div>
        ))}
      </div>
      <div className="favorites">
        <h2>Saved Destinations / Favorites</h2>
        {favorites.map((favorite) => (
          <div key={favorite.id} className="favorite">
            <p>Destination: {favorite.destination}</p>
          </div>
        ))}
      </div>
      <div className="travel-history">
        <h2>Travel History</h2>
        {travelHistory.map((history) => (
          <div key={history.id} className="history">
            <p>Destination: {history.destination}</p>
            <p>Date: {history.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
