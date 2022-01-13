import Navbar from 'components/Navbar';
import PrivateRoute from 'components/PrivateRoutes';
import Auth from 'pages/Admin/Auth';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MoviesId from 'pages/MoviesId';

import { Redirect, Route, Router } from 'react-router-dom';
import history from 'util/history';

const Routess = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Route path="/" exact>
        <Home />
      </Route>
      <PrivateRoute path="/movies">
        <Movies />
      </PrivateRoute>
      <PrivateRoute path="/movies/:movieId">
        <MoviesId />
      </PrivateRoute>
      <Redirect from="/admin/auth" to="/admin/auth/login" />
      <Route path="/admin/auth">
        <Auth />
      </Route>
    </Router>
  );
};

export default Routess;
