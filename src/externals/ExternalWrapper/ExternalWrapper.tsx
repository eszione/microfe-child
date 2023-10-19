import { Router } from 'react-router-dom';
import { ReactNode } from 'react';
import { Store } from '../../core/Store/Store';
import { getHistory } from "../../core/window/window.utils";
import { ExternalInternationalization } from '../ExternalInternationalization/ExternalInternationalization';
import { CosmosTheme, defaultTheme } from 'cosmos-components/dist/theme';

export const ExternalWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <ExternalInternationalization>
            <Router history={getHistory() }>
                <CosmosTheme theme={defaultTheme}>
                    <Store>
                        {children}
                    </Store>
                </CosmosTheme>
            </Router>
        </ExternalInternationalization>
    );
};
