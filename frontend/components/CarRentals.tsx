import { useEffect, useState } from 'react';
import axios from 'axios';

const CarRentals = () => {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({
    type: '',
    priceRange: '',
    pickupLocation: '',
    dropoffLocation: ''
  });

  useEffect(() => {
    fetchCars();
  }, [filters]);

  const fetchCars = async () => {
    try {
      const response = await axios.get('/api/cars', { params: filters });
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <section className="car-rentals">
      <h2>Car Rentals</h2>
      <div className="filters">
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={filters.type}
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
          Pickup Location:
          <input
            type="text"
            name="pickupLocation"
            value={filters.pickupLocation}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Drop-off Location:
          <input
            type="text"
            name="dropoffLocation"
            value={filters.dropoffLocation}
            onChange={handleFilterChange}
          />
        </label>
      </div>
      <div className="cars-grid">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>Type: {car.type}</p>
            <p>Price: {car.price}</p>
            <p>Pickup Location: {car.pickupLocation}</p>
            <p>Drop-off Location: {car.dropoffLocation}</p>
            <button>Book Car</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarRentals;
