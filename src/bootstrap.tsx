import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom';
import { Store } from './core/store/Store';
import { Internationalization } from './components/internationalization/Internationalization';
import { getHistory } from './helpers/window.helper';
import { CosmosTheme, defaultTheme } from 'cosmos-components/dist/theme';

const mount = (el: HTMLElement) => {
  render(
    <React.StrictMode>
      <Internationalization>
        <Router history={getHistory()}>
          <CosmosTheme theme={defaultTheme}>
            <Store>
              <App />
            </Store>
          </CosmosTheme>
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
