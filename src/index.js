import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/app.scss';

import App from './components/App';

ReactDOM.render(
  <App initialContests={window.initialData.contests} />,
  document.getElementById('root')
);
