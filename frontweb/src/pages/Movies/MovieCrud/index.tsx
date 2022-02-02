import { Route, Switch } from 'react-router-dom';
import List from './List';

const MovieCrud = () => {
  return (
    <Switch>
      <Route path="/movies" exact>
        <List />
      </Route>
    </Switch>
  );
};

export default MovieCrud;
