import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/views/layouts/App';
import configureStore from './app/state/store';

const reduxStore = configureStore();

const RootHtml = () => (
  <Provider store={reduxStore}>
    <App />
  </Provider>
);

render(<RootHtml />, document.getElementById('root'));
