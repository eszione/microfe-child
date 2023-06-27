import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import { IntlProvider } from "react-intl";
import { Store } from './Store';
import history from './core/history/history';

const customFormats = {
  number: {
    NZD: {
      style: "currency",
      currency: "NZD",
    },
  },
};

const mount = (el: HTMLElement) => {
  render(
    <React.StrictMode>
      <Store>
        <IntlProvider
          locale={navigator.language}
          formats={customFormats}
          defaultLocale="en-NZ"
          defaultFormats={customFormats}
        >
          <Router history={history}>
            <App />
          </Router>
        </IntlProvider>
      </Store>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { mount };
