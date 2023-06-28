import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import customerReducer from '../../components/customers/reducers/customers.reducer';

const store = configureStore({
    devTools: { name: 'microFE' },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    reducer: combineReducers({ customers: customerReducer}),
    preloadedState: {}
});

export { store as microFEStore };
