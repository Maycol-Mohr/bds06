import PrivateRoute from 'components/PrivateRoutes';
import { Switch } from 'react-router-dom';
import MovieCrud from './MovieCrud';

const Movies = () => {
  return (
    <div className="my-4 configurar-movies">
      <div className="configurar-link1">
        <ul>
          <Switch>
            <PrivateRoute path="/movies">
              <MovieCrud />
            </PrivateRoute>
          </Switch>
        </ul>
      </div>
    </div>
  );
};

export default Movies;
