import createHistory from 'history/createMemoryHistory';
import { NOT_FOUND } from 'redux-first-router';
import configureStore from '../client/configureStore';

export default (req, res) => {
  const history = createHistory({ initialEntries: [req.path] });
  const preloadedState = {};

  const store = configureStore(history, preloadedState);

  const { location } = store.getState();

  const status = location.type === NOT_FOUND ? 404 : 200;
  res.status(status);
  return store;
};
