import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  <BrowserRouter>
    {/* на всякий случай если не приходят пропы */}
    <Route component={App} />
    {/* <App/> */}
  </BrowserRouter>,
  document.getElementById('root')
);
