import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import { Route, Routes } from 'react-router-dom';

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
        <Routes>
          <Route path="/admin/auth/login">
            <h1>card de login</h1>
          </Route>
          <Route path="/admin/auth/signup">
            <h1>card de signup</h1>
          </Route>
          <Route path="/admin/auth/recover">
            <h1>card de recover</h1>
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Auth;
