import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="quick-links">
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
            <Link href="/packages">
              <a>Packages</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="social-media">
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <div className="newsletter">
        <form>
          <label htmlFor="email">Subscribe to our newsletter:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Tour & Travel Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
