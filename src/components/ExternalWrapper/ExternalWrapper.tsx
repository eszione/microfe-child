import { IntlProvider } from "react-intl";
import { Router } from 'react-router-dom';
import { ReactNode } from 'react';
import { Store } from '../../Store';
import history from "../../core/history/history";

export const ExternalWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <IntlProvider locale="en">
            <Router history={window['Motek_history'] ?? history}>
                <Store>
                    {children}
                </Store>
            </Router>
        </IntlProvider>
    );
};
