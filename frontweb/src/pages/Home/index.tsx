import { ReactComponent as MainImage } from 'assets/images/main-image.svg';

import './styles.css';

function Home() {
  return (
    <div className="home-container">
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
