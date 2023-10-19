import { Router } from 'react-router-dom';
import { ReactNode } from 'react';
import { Store } from '../../core/store/Store';
import { getHistory } from "../../helpers/window.helper";
import { Internationalization } from '../../components/internationalization/Internationalization';
import { CosmosTheme, defaultTheme } from 'cosmos-components/dist/theme';

export const ExternalWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <Internationalization>
            <Router history={getHistory() }>
                <CosmosTheme theme={defaultTheme}>
                    <Store>
                        {children}
                    </Store>
                </CosmosTheme>
            </Router>
        </Internationalization>
    );
};
