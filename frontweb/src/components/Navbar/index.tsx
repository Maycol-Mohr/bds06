import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated, TokenData } from 'util/auth';
import history from 'util/history';
import { removeAuthData } from 'util/storage';

import './styles.css';

type AuthData = {
  authenticated: boolean;
  tokenData?: TokenData;
};

function Navbar() {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthData({
        authenticated: false,
      });
    }
  }, []);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="bg-warning main-nav">
      <div>
        <Link to="/" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </Link>

        <div className="nav-login-logout">
          {authData.authenticated ? (
            <a href="#sair" onClick={handleLogoutClick}>
              SAIR
            </a>
          ) : (
            <Link to="/admin/auth"></Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
