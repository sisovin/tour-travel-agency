import { useEffect, useState } from 'react';
import axios from 'axios';

const PopularTourPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get('/api/packages/popular');
        setPackages(response.data);
      } catch (error) {
        console.error('Error fetching popular tour packages:', error);
      }
    };

    fetchPackages();
  }, []);

  return (
    <section className="popular-tour-packages">
      <h2>Popular Tour Packages</h2>
      <div className="packages-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.image} alt={pkg.title} />
            <h3>{pkg.title}</h3>
            <p>{pkg.destination}</p>
            <p>{pkg.price}</p>
            <p>{pkg.rating}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularTourPackages;
