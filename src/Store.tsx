import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ReactNode } from 'react';
import { mockCustomers } from './components/tradepartner/mockCustomers';

export const Store = ({ children }: { children: ReactNode }) => {
    const store = createStore(() => ({
        customers: mockCustomers
    }));
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
