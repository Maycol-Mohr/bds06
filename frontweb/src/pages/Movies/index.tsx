import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <>
      <div className="my-4 configurar-movies">
        <h1>Tela listagem de filmes</h1>
      </div>
      <div className="configurar-link1">
        <Link to="link">Acessar /movies/1</Link>
      </div>
      <div className="configurar-link2">
        <Link to="link">Acessar /movies/2</Link>
      </div>
    </>
  );
};

export default Movies;
