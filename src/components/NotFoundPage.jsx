import { Link } from 'react-router-dom';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

export default function NotFoundPage() {
  return (
    <>
      <Nav />
      <div className="section head-center">
        <h1 className="h2">Page not found</h1>
        <p className="sub"><Link to="/">Back to home</Link></p>
      </div>
      <Footer />
    </>
  );
}
