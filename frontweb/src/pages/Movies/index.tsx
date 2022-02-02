import PrivateRoute from 'components/PrivateRoutes';
import { Switch } from 'react-router-dom';
import MovieCrud from './MovieCrud';

const Movies = () => {
  return (
    <div>
      <div>
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
