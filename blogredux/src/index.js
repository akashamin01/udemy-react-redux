import React from 'react';
import ReactDOM from 'react-dom';
import {provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <provider>
    <App/>
  </provider>,
  document.querySelector('#root')
);
