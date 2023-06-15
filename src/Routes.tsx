import "./Routes.css";
import { Navigate, useRoutes } from "react-router-dom";
import AddTradePartner from "./components/tradepartner/add/AddTradePartner";
import EditTradePartner from "./components/tradepartner/edit/EditTradePartner";
import { WrapperCustomer } from "./components/tradepartner/view/WrapperCustomer";

const Routes = () => {
  return useRoutes(routes);
};

const routes = [
  {
    path: "",
    element: <WrapperCustomer />,
  },
  {
    path: "add",
    element: <AddTradePartner />,
  },
  {
    path: "edit",
    element: <EditTradePartner />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export { Routes, routes };
