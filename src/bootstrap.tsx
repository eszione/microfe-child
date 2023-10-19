import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ExternalWrapper } from './externals/ExternalWrapper/ExternalWrapper';

// Only import these during standalone development
if (process.env.NODE_ENV === 'development') {
  import ('./styles/colors-deprecated.css');
  import ('cosmos-components/dist/index.css');
  import ('one-renderer-modules/dist/styles.css');
  import ('./bootstrap.sass');
}

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
// Only show this during standalone development
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('root') as HTMLElement;
  if (devRoot) {
      mount(devRoot)
  }
}
