import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'assets/css/styles.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

import App from './App';

library.add(faDollarSign)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
