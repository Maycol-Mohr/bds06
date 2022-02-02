import { ReactComponent as CardFilm } from 'assets/images/Imagem-Card.svg';
import { Link } from 'react-router-dom';

import './styles.css';

const List = () => {
  return (
    <>
      <div className="select-item">Aventura</div>
      <div className="row">
        <div className="card-film2">
          <div className="col-sm-6">
            <Link to={'/movies/:movieId'}>
              <CardFilm className="image" />
            </Link>
            <h1>O Retorno do Rei</h1>
            <h2>2013</h2>
            <h3>O olho do inimigo está se movendo.</h3>
          </div>
        </div>
        <div className="card-film2">
          <div className="col-sm-6">
            <Link to={'/movies/:movieId'}>
              <CardFilm className="image" />
            </Link>
            <h1>O Retorno do Rei</h1>
            <h2>2013</h2>
            <h3>O olho do inimigo está se movendo.</h3>
          </div>
        </div>
        <div className="card-film2">
          <div className="col-sm-6">
            <Link to={'/movies/:movieId'}>
              <CardFilm className="image" />
            </Link>
            <h1>O Retorno do Rei</h1>
            <h2>2013</h2>
            <h3>O olho do inimigo está se movendo.</h3>
          </div>
        </div>
        <div className="card-film2">
          <div className="col-sm-6">
            <Link to={'/movies/:movieId'}>
              <CardFilm className="image" />
            </Link>
            <h1>O Retorno do Rei</h1>
            <h2>2013</h2>
            <h3>O olho do inimigo está se movendo.</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
