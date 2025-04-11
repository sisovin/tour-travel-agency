import { useEffect, useState } from 'react';
import axios from 'axios';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get('/api/destinations');
        setDestinations(response.data);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <div>
      <h1>Destinations</h1>
      <div className="destinations-grid">
        {destinations.map((destination) => (
          <div key={destination.id} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
