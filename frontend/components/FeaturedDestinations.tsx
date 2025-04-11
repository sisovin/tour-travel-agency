import { useEffect, useState } from 'react';
import axios from 'axios';

const FeaturedDestinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get('/api/destinations/featured');
        setDestinations(response.data);
      } catch (error) {
        console.error('Error fetching featured destinations:', error);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <section className="featured-destinations">
      <h2>Featured Destinations</h2>
      <div className="destinations-grid">
        {destinations.map((destination) => (
          <div key={destination.id} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
            <button>Explore Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDestinations;
