import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
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

    fetchStats();
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
    </div>
  );
};

export default AdminDashboard;
