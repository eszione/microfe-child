import React, { FC } from "react";
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

export const ExternalInternationalization: FC<Props> = ({ children }) => (
  <IntlProvider
    locale={navigator.language}
    defaultLocale={CURRENTLY_HARDCODED_LOCALE}
    defaultFormats={customFormats}
  >
    {children}
  </IntlProvider>
);
