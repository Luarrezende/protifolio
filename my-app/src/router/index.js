import { Route, Switch } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import NotFound from '../pages/NotFound';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ MainPage } />
      <Route exact path="*" component={ NotFound } />
    </Switch>
  );
}

export default Router;