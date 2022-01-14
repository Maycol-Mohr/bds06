import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import { hasAnyRoles, isAuthenticated } from 'util/requests';

import './styles.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Resultado = {hasAnyRoles(['ROLE_MEMBER']) ? 'sim' : 'nao'}</h1>
      <h1>{isAuthenticated() ? 'autenticado' : 'NAO autenticado'}</h1>
      <div className="home-card">
        <div className="home-content-container">
          <h1>Avalie Filmes</h1>
          <p>
            Diga o que você achou do seu <br /> filme favorito
          </p>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
    </div>
  );
}

export default Home;
