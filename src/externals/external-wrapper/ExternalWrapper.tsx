import { Router } from 'react-router-dom';
import { ReactNode } from 'react';
import { Store } from '../../core/store/Store';
import { getHistory } from "../../helpers/window.helper";
import { Internationalization } from '../../components/internationalization/Internationalization';

export const ExternalWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <Internationalization>
            <Router history={getHistory() }>
                <Store>
                    {children}
                </Store>
            </Router>
        </Internationalization>
    );
};
