import { Router } from 'react-router-dom';
import { ReactNode } from 'react';
import { Store } from '../../Store';
import { getHistory } from "../../helpers/window.helper";
import { Internationalization } from '../../utils/Internationalization';

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
