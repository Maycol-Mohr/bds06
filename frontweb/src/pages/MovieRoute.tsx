import Movies from 'pages/Movies';
import { Switch, Route } from 'react-router-dom';
import MovieDetails from './MovieDetail';

const MovieRoute = () => (
  <Switch>
    <Route path="/movies" exact>
      <Movies />
    </Route>
    <Route path="/movies/:movieId">
      <MovieDetails />
    </Route>
  </Switch>
);
export default MovieRoute;
