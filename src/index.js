import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/app.scss';

import App from './components/App';

ReactDOM.render(
  <App initialData={window.initialData} />,
  document.getElementById('root')
);
