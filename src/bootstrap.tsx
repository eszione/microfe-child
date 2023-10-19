import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { ExternalWrapper } from './externals/external-wrapper/ExternalWrapper';

const mount = (el: HTMLElement) => {
  render(
    <React.StrictMode>
      <ExternalWrapper>
        <App />
      </ExternalWrapper>
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
