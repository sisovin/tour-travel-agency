import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HotelsPage = () => {
  const [hotels, setHotels] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    starRating: '',
    amenities: []
  });

  useEffect(() => {
    fetchHotels();
  }, [filters]);

  const fetchHotels = async () => {
    try {
      const response = await axios.get('/api/hotels', { params: filters });
      setHotels(response.data);
    } catch (error) {
      console.error('Error fetching hotels:', error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div>
      <h1>Hotels</h1>
      <div>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Price Range:
          <input
            type="text"
            name="priceRange"
            value={filters.priceRange}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Star Rating:
          <input
            type="text"
            name="starRating"
            value={filters.starRating}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Amenities:
          <input
            type="text"
            name="amenities"
            value={filters.amenities}
            onChange={handleFilterChange}
          />
        </label>
      </div>
      <div>
        {hotels.map((hotel) => (
          <div key={hotel.id}>
            <h2>{hotel.name}</h2>
            <p>{hotel.location}</p>
            <p>{hotel.pricePerNight}</p>
            <p>{hotel.starRating}</p>
            <p>{hotel.amenities.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelsPage;
