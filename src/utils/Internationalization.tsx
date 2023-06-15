import React, { FC, Fragment } from "react";
import { IntlProvider } from "react-intl";

export const CURRENTLY_HARDCODED_LOCALE = "en-NZ";

// Format intl message with currency format: $1,000.00
const customFormats = {
  number: {
    NZD: {
      style: "currency",
      currency: "NZD",
    },
  },
};

type Props = {
  children?: React.ReactNode;
};

export const Internationalization: FC<Props> = ({ children }) => (
  <IntlProvider
    locale={CURRENTLY_HARDCODED_LOCALE}
    defaultLocale={CURRENTLY_HARDCODED_LOCALE}
    textComponent={Fragment} // TODO: This should not be needed as react-intl default is Fragment. For some reason it doesn't work. Investigation is required.
    defaultFormats={customFormats}
  >
    {children}
  </IntlProvider>
);
