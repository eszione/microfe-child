import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { combineReducers } from 'redux';
import customerReducer from './components/tradepartner/reducers/customers.reducer';

export const Store = ({ children }: { children: ReactNode }) => {
    const store = configureStore({
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
        reducer: combineReducers({ customers: customerReducer}),
        preloadedState: {}
    });
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
