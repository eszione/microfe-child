import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom';
import { Store } from './core/store/Store';
import { Internationalization } from './components/internationalization/Internationalization';
import { getHistory } from './helpers/window.helper';

const mount = (el: HTMLElement) => {
  render(
    <React.StrictMode>
      <Internationalization>
        <Router history={getHistory()}>
          <Store>
            <App />
          </Store>
        </Router>
      </Internationalization>
    </React.StrictMode>,
    el
  );
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('root') as HTMLElement;
  if (devRoot) {
      mount(devRoot)
  }
}

export { mount };
