// src/components/Navbar.tsx

import { Link } from 'react-router-dom';
import '../CssFiles/Navbar.css'; // Make sure you have this CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">MySite</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
