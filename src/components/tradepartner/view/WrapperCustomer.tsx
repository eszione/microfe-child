import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mockCustomers } from '../mockCustomers';
import { Customers } from './Customers';

export const WrapperCustomer = () => {
    const store = createStore(() => ({
        customers: mockCustomers
    }));
    return (
        <Provider store={store}>
            <Customers />
        </Provider>
    );
};
