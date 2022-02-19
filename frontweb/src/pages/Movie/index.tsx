import { AxiosRequestConfig } from 'axios';
import MovieCard from 'components/MovieCard';
import MovieFilter, { MovieFilterData } from 'components/MovieFilter';
import Pagination from 'components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movies } from 'types/movies';
import { requestBackend } from 'utils/requests';
import { SpringPage } from 'utils/vendor/spring';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: MovieFilterData;
};

const Movie = () => {
  const [page, setPage] = useState<SpringPage<Movies>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { category: null },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: MovieFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  };

  const getMovies = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        genreId: controlComponentsData.filterData.category?.id,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);
  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="movie-container container">
      <div className="select-container">
        <MovieFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      <div className="row justify-content-center">
        {page?.content.map((item) => (
          <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3" key={item.id}>
            <Link to={`/movies/${item.id}`}>
              <MovieCard
                imgUrl={item.imgUrl}
                nomeFilme={item.title}
                subNomeFilme={item.subTitle}
                anoFilme={item.year}
              />
            </Link>
          </div>
        ))}
      </div>
      <div className="row">
        <Pagination
          pageCount={page ? page.totalPages : 0}
          range={3}
          onChange={getMovies}
        />
      </div>
    </div>
  );
};

export default Movie;
