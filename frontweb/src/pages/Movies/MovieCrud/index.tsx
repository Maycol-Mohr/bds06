import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

const MovieCrud = () => {
  return (
    <Switch>
      <Route path="/movies" exact>
        <List />
      </Route>
      <Route path="/movies/:movieId">
        <Form />
      </Route>
    </Switch>
  );
};

export default MovieCrud;
