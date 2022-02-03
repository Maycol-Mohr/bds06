import { ReactComponent as CardFilm } from 'assets/images/Imagem-Card.svg';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import './styles.css';

const List = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

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
    </div>
  );
};

export default List;
