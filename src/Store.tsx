import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ReactNode } from 'react';
import { mockCustomers } from './components/tradepartner/mockCustomers';
import { mockCustomersReal } from './components/tradepartner/mockCustomersReal';

export const Store = ({ children }: { children: ReactNode }) => {
    const store = createStore(() => ({
        customers: mockCustomersReal
    }));
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
