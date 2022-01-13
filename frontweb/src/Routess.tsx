import Navbar from 'components/Navbar';
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
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/movies/:movieId">
        <MoviesId />
      </Route>
      <Redirect from="/admin/auth" to="/admin/auth/login" exact />
      <Route path="/admin/auth">
        <Auth />
      </Route>
    </Router>
  );
};

export default Routess;
