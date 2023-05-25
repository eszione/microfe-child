import './Router.css';
import { useRoutes } from "react-router-dom";
import ViewTradePartner from "./components/tradepartner/view/ViewTradePartner";
import AddTradePartner from './components/tradepartner/add/AddTradePartner';
import EditTradePartner from './components/tradepartner/edit/EditTradePartner';

export const Router = () => {
    return useRoutes(
        [
            {
                path: '/', element: <ViewTradePartner />
            },
            {
                path: '/add', element: <AddTradePartner />
            },
            {
                path: '/edit', element: <EditTradePartner />
            },
        ]
    );
};
