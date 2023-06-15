import "./App.css";
import { Routes } from "./Routes";
import { CustomFormats, IntlProvider, MessageFormatElement } from "react-intl";
import { Provider } from 'react-redux'
import { mockCustomers } from "./components/tradepartner/mockCustomers";
import { createStore } from 'redux';

function App() {
  const customFormats = {
    number: {
      NZD: {
        style: "currency",
        currency: "NZD",
      },
    },
  };
  interface IntlConfig {
    locale: string;
    formats: CustomFormats;
    messages: Record<string, string> | Record<string, MessageFormatElement[]>;
    defaultLocale: string;
    defaultFormats: CustomFormats;
    onError(err: string): void;
  }
  const values = {};

  const store = createStore(() => ({
    mockCustomers
  }));

  return (
    <Provider store={store}>
      <IntlProvider
        locale="en-NZ"
        formats={customFormats}
        defaultLocale="en-NZ"
        defaultFormats={customFormats}
      >
        <div className="App">
          <header className="header">Trade Partner MicroFE</header>
          <Routes />
        </div>
      </IntlProvider>
    </Provider>
  );
}

export default App;
