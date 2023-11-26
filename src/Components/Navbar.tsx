import { Link } from 'react-router-dom';

function Navbar() {
  return (
  
    <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/customer">Customer</Link>
    <Link to="collections">Collection page</Link>
    </nav>

  )
}

export default Navbar