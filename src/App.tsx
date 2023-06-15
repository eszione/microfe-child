import "./App.css";
import { Routes } from "./Routes";
import { CustomFormats, IntlProvider, MessageFormatElement } from "react-intl";
import { Fragment } from "react";

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
  return (
    <IntlProvider
      locale="en-NZ"
      formats={customFormats}
      messages={}
      defaultLocale="en-NZ"
      defaultFormats={customFormats}
    >
      <div className="App">
        <header className="header">Trade Partner MicroFE</header>
        <Routes />
      </div>
    </IntlProvider>
  );
}

export default App;
