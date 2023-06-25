import { IntlProvider } from "react-intl";
import { BrowserRouter } from 'react-router-dom';
import { ReactNode } from 'react';
import { Store } from '../../Store';

export const ExternalWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <Store>
                {children}
        </Store>
    );
};
