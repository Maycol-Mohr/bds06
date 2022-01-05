import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <>
      <div className="my-4">
        <h1>Tela listagem de filmes</h1>
      </div>
      <div>
        <Link to="link">Acessar /movies/1</Link>
      </div>
      <div>
        <Link to="link">Acessar /movies/2</Link>
      </div>
    </>
  );
};

export default Movies;
