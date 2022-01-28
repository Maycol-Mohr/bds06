import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from 'AuthContext';
import { getTokenData, isAuthenticated } from 'util/auth';
import { removeAuthData } from 'util/storage';
import history from 'util/history';
import 'bootstrap/js/src/collapse.js';

import './styles.css';

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      console.log('Autenticado');
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      console.log('Nao Autenticado');
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-warning main-nav">
      <div className="container-fluid">
        <Link to="/movies" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </Link>
        {authContextData.authenticated && (
          <div className="nav-logout">
            <a href="#logout" onClick={handleLogoutClick}>
              SAIR
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
