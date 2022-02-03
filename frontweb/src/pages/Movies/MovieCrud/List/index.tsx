import { ReactComponent as CardFilm } from 'assets/images/Imagem-Card.svg';
import Pagination from 'components/Pagination';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import './styles.css';

const List = () => {
  const options = [{ value: 'aventura', label: 'Aventura' }];

  return (
    <div className="movie-film-container">
      <div className="select-item">
        <Select options={options} classNamePrefix="movie-crud-select" isMulti />
      </div>

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
      <Pagination />
    </div>
  );
};

export default List;
