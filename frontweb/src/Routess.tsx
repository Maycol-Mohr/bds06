import Navbar from 'components/Navbar';
import Auth from 'pages/Admin/Auth';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MoviesId from 'pages/MoviesId';

import {
  BrowserRouter,
  BrowserRouter as Router,
  Redirect,
  Route,
} from 'react-router-dom';

const Routess = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Router>
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
    </BrowserRouter>
  );
};

export default Routess;
