import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Header = () => {
  const [userRole, setUserRole] = useState('guest');
  const router = useRouter();

  useEffect(() => {
    // Fetch user role from localStorage or API
    const role = localStorage.getItem('userRole') || 'guest';
    setUserRole(role);
  }, []);

  const handleLogout = () => {
    // Clear user data and redirect to home
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    router.push('/');
  };

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <a>Tour & Travel Agency</a>
        </Link>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/destinations">
              <a>Destinations</a>
            </Link>
          </li>
          <li>
            <Link href="/tours">
              <a>Tours & Packages</a>
            </Link>
          </li>
          <li>
            <Link href="/hotels">
              <a>Hotels</a>
            </Link>
          </li>
          <li>
            <Link href="/flights">
              <a>Flights</a>
            </Link>
          </li>
          <li>
            <Link href="/car-rentals">
              <a>Car Rentals</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          {userRole === 'admin' && (
            <li>
              <Link href="/admin">
                <a>Admin Dashboard</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <div className="user-actions">
        {userRole === 'guest' ? (
          <>
            <button onClick={() => router.push('/bookings')}>Book Now</button>
            <button onClick={() => router.push('/auth/login')}>Sign In</button>
            <button onClick={() => router.push('/auth/register')}>Register</button>
          </>
        ) : (
          <>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
