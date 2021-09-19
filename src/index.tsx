import { StrictMode } from 'react';
import { render } from 'react-dom';

import App from './App';
import './assets/styles/index.css';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
