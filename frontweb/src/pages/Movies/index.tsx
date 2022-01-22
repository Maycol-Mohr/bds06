import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <div className="my-4 configurar-movies">
      <h1>Tela listagem de filmes</h1>
      <div className="configurar-link1">
        <ul>
          <Link to="/movies/1">
            <li>Acessar /movies/1</li>
          </Link>
          <Link to="/movies/2">
            <li>Acessar /movies/2</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Movies;
