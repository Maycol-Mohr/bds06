import Evaluation from 'components/Evaluation';
import Comment from 'components/Comment';
import { useParams } from 'react-router-dom';
import './styles.css';
import { hasAnyRoles } from 'utils/auth';
import MovieCardDetails from './CardDetails';
import { Movies } from 'types/movies';
import { useEffect, useState } from 'react';
import { BASE_URL, requestBackend } from 'utils/requests';
import { AxiosRequestConfig } from 'axios';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();
  const [movie, setMovie] = useState<Movies>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: BASE_URL + '/movies/' + movieId,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);
  return (
    <div className="movie-details-container">
      <MovieCardDetails
        imgUrl={movie?.imgUrl}
        nomeFilme={movie?.title}
        anoFilme={movie?.year}
        subNomeFilme={movie?.subTitle}
        synopse={movie?.synopsis}
      />
      {hasAnyRoles(['ROLE_MEMBER']) && <Evaluation movieId={movieId} />}
      <div className="movie-details-card">
        <Comment movieId={movieId} />
      </div>
    </div>
  );
};

export default MovieDetails;
