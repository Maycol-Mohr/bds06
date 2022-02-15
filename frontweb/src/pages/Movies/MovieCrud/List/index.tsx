import { ReactComponent as CardFilm } from 'assets/images/Imagem-Card.svg';
import Pagination from 'components/Pagination';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import './styles.css';

const List = () => {
  const options = [{ value: 'aventura', label: 'Aventura' }];

  return (
    <>
      <div className="container-fluid">
        <div className="select-item">
          <Select
            className="teste"
            options={options}
            classNamePrefix="movie-crud-select"
            isMulti
          />
        </div>

        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <div className="card-film2">
              <div className="img-container d-block">
                <Link to={'/movies/:movieId'}>
                  <img
                    src={
                      'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?w=740'
                    }
                    alt={'nome'}
                    className="image "
                  />
                </Link>
              </div>
              <div>
                <h1>O Retorno do Rei</h1>
                <h2>2013</h2>
                <h3>O olho do inimigo está se movendo.</h3>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <div className="card-film2">
              <div className="img-container d-block">
                <Link to={'/movies/:movieId'}>
                  <img
                    src={
                      'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?w=740'
                    }
                    alt={'nome'}
                    className="image "
                  />
                </Link>
              </div>
              <div>
                <h1>O Retorno do Rei</h1>
                <h2>2013</h2>
                <h3>O olho do inimigo está se movendo.</h3>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <div className="card-film2">
              <div className="img-container d-block">
                <Link to={'/movies/:movieId'}>
                  <img
                    src={
                      'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?w=740'
                    }
                    alt={'nome'}
                    className="image "
                  />
                </Link>
              </div>
              <div>
                <h1>O Retorno do Rei</h1>
                <h2>2013</h2>
                <h3>O olho do inimigo está se movendo.</h3>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <div className="card-film2">
              <div className="img-container d-block">
                <Link to={'/movies/:movieId'}>
                  <img
                    src={
                      'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?w=740'
                    }
                    alt={'nome'}
                    className="image "
                  />
                </Link>
              </div>
              <div>
                <h1>O Retorno do Rei</h1>
                <h2>2013</h2>
                <h3>O olho do inimigo está se movendo.</h3>
              </div>
            </div>
          </div>
          <div>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
