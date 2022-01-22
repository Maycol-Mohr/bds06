import Navbar from 'components/Navbar';
import PrivateRoute from 'components/PrivateRoutes';
import Auth from 'pages/Admin/Auth';
import MovieRoute from 'pages/MovieRoute';

import { Route, Router, Switch } from 'react-router-dom';
import history from 'util/history';

const Routess = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
        <PrivateRoute path="/movies">
          <MovieRoute />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default Routess;
