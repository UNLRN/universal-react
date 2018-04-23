import React from 'react';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import configureStore from './configureStore';
import App from './features/app/app';

window.main = () => {
  Loadable.preloadReady().then(() => {
    const history = createHistory();
    const preloadedState = window.__PRELOADED_STATE__;

    const store = configureStore(history, preloadedState);

    // Allow the passed state to be garbage-collected
    delete window.__PRELOADED_STATE__;

    hydrate(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  });
};

if (module.hot) {
  module.hot.accept();
}
