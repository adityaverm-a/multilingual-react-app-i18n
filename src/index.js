import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import './i18n';

const loader = (
  <div class="flex justify-center items-center">
    <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
)

ReactDOM.render(
  <Suspense fallback={loader}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

