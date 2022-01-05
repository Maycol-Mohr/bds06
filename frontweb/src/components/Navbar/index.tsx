import { Link } from 'react-router-dom';
import './styles.css';

function Navbar() {
  return (
    <nav className="bg-warning main-nav">
      <div>
        <Link to="/" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
