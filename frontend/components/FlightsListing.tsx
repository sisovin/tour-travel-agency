import { useEffect, useState } from 'react';
import axios from 'axios';

const FlightsListing = () => {
  const [flights, setFlights] = useState([]);
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    passengers: 1
  });

  useEffect(() => {
    fetchFlights();
  }, [searchParams]);

  const fetchFlights = async () => {
    try {
      const response = await axios.get('/api/flights', { params: searchParams });
      setFlights(response.data);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  return (
    <section className="flights-listing">
      <h2>Flights</h2>
      <div className="search-filters">
        <label>
          From:
          <input
            type="text"
            name="from"
            value={searchParams.from}
            onChange={handleSearchChange}
          />
        </label>
        <label>
          To:
          <input
            type="text"
            name="to"
            value={searchParams.to}
            onChange={handleSearchChange}
          />
        </label>
        <label>
          Departure Date:
          <input
            type="date"
            name="departureDate"
            value={searchParams.departureDate}
            onChange={handleSearchChange}
          />
        </label>
        <label>
          Return Date:
          <input
            type="date"
            name="returnDate"
            value={searchParams.returnDate}
            onChange={handleSearchChange}
          />
        </label>
        <label>
          Passengers:
          <input
            type="number"
            name="passengers"
            value={searchParams.passengers}
            onChange={handleSearchChange}
            min="1"
          />
        </label>
      </div>
      <div className="flights-grid">
        {flights.map((flight) => (
          <div key={flight.id} className="flight-card">
            <h3>{flight.airline}</h3>
            <p>Flight Number: {flight.flightNumber}</p>
            <p>Price: {flight.price}</p>
            <p>Duration: {flight.duration}</p>
            <p>Stops: {flight.stops}</p>
            <button>Book Flight</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlightsListing;
