import Navbar from 'components/Navbar';
import Auth from 'pages/Admin/Auth';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MoviesId from 'pages/MoviesId';

import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

const Routess = () => {
  return (
    <Router>
      <Navbar />

      <Route path="/">
        <Home />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/moviesid">
        <MoviesId />
      </Route>
      <Redirect from="/admin/auth" to="/admin/auth/login" />
      <Route path="/admin/auth">
        <Auth />
      </Route>
    </Router>
  );
};

export default Routess;
