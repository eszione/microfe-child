import './Routes.css';
import { Navigate, useRoutes } from "react-router-dom";
import ViewTradePartner from "./components/tradepartner/view/ViewTradePartner";
import AddTradePartner from './components/tradepartner/add/AddTradePartner';
import EditTradePartner from './components/tradepartner/edit/EditTradePartner';

const Routes = () => {
    return useRoutes(
        routes
    );
};

const routes = [
    {
        path: '', element: <ViewTradePartner />
    },
    {
        path: 'add', element: <AddTradePartner />
    },
    {
        path: 'edit', element: <EditTradePartner />
    },
    {
        path: '*', element: <Navigate to='/' />
    }
];

export { Routes, routes };
