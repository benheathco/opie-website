import { Logo } from './Nav.jsx';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link to="/" aria-label="Opie home"><Logo light /></Link>
        <div className="footer-links">
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">Privacy policy</a>
          <a href="#">Terms of service</a>
        </div>
        <span className="footer-credit">Designed by Wazowski Studios</span>
      </div>
    </footer>
  );
}
