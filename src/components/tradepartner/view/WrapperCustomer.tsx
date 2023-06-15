import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mockCustomers } from '../mockCustomers';
import { Customers } from './Customers';
import { IntlProvider } from "react-intl";
import { BrowserRouter } from 'react-router-dom';

export const WrapperCustomer = () => {
    const store = createStore(() => ({
        customers: mockCustomers
    }));
    return (
        <Provider store={store}>
            <IntlProvider locale="en">
                <BrowserRouter>
                    <Customers />
                </BrowserRouter>
            </IntlProvider>
        </Provider>
    );
};
