import React from 'react';
import Loadable from 'react-loadable';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';
import App from '../common/App';
import reducers from '../common/reducer';

window.main = () => {
  // Grab the state from a global variable injected into the server-generated HTML
  const preloadedState = window.__PRELOADED_STATE__;

  // Allow the passed state to be garbage-collected
  delete window.__PRELOADED_STATE__;
 
  // Create Redux store with initial state
  const store = createStore(reducers, preloadedState);

  Loadable.preloadReady().then(() => {
    hydrate(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root'));
  });
};

if (module.hot) {
  module.hot.accept();
}
