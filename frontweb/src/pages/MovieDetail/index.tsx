import Evaluation from 'components/Evaluation';
import Comment from 'components/Coment';
import { useParams } from 'react-router-dom';
import './styles.css';
import { hasAnyRoles } from 'util/auth';
import { ReactComponent as CardFilm } from 'assets/images/Imagem-Card.svg';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  return (
    <div className="movie-details-container">
      <div className="card-film card-e-texto">
        <div>
          <CardFilm className="image" />
        </div>
        <div>
          <h1>O Retorno do Rei</h1>
          <h2>2013</h2>
          <h3>O olho do inimigo está se movendo.</h3>
          <p>
            O confronto final entre as forças do bem e do mal que lutam pelo
            controle do futuro da Terra Média se aproxima. Sauron planeja um
            grande ataque a Minas Tirith, capital de Gondor, o que faz com que
            Gandalf e Pippin partam para o local na intenção de ajudar a
            resistência. Um exército é reunido por Theoden em Rohan, em mais uma
            tentativa de deter as forças de Sauron. Enquanto isso, Frodo, Sam e
            Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o
            anel.
          </p>
        </div>
      </div>
      {hasAnyRoles(['ROLE_MEMBER']) && <Evaluation movieId={movieId} />}
      <div className="movie-details-card">
        <Comment movieId={movieId} />
      </div>
    </div>
  );
};

export default MovieDetails;
