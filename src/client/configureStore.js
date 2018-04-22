import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRoutes } from 'redux-first-router';
import { createLogger } from 'redux-logger';
import { routesMap } from './routes';
import { appReducers } from './app/reducer';

export default (history, preloadedState) => {
  const { reducer, middleware, enhancer } = connectRoutes(history, routesMap);

  const rootReducer = combineReducers({ ...appReducers, location: reducer });

  const loggerMiddleware = createLogger({ collapsed: true });
  const middlewares = [middleware, loggerMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const composedEnhancers = compose(enhancer, middlewareEnhancer);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
};
