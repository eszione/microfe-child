import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { microFEStore } from './configureStore';

export const Store = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={microFEStore}>
            {children}
        </Provider>
    );
};
