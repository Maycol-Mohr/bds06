import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './Login';

import './styles.css';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Avalie Filmes</h1>
        <p>
          Diga o que você achou do seu <br /> filme favorito
        </p>
        <MainImage />
      </div>
      <div className="auth-form-container">
        <BrowserRouter>
          <Route path="/admin/auth/login">
            <Login />
          </Route>
          <Route path="/admin/auth/signup">
            <h1>card de signup</h1>
          </Route>
          <Route path="/admin/auth/recover">
            <h1>card de recover</h1>
          </Route>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Auth;
