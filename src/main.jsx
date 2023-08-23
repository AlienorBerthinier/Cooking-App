import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';

import './styles/index.scss';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
