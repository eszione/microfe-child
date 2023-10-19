import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { customerReducer } from '../../pages/Customers/customers.reducer';

const store = configureStore({
    devTools: { name: 'microFE' }, // Update name
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    reducer: combineReducers({ customers: customerReducer}), // add reducers
    preloadedState: {}
});

export { store as microFEStore };
