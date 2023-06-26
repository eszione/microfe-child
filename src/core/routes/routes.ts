import { Home } from "../../components/home/Home";
import AddTradePartner from "../../components/tradepartner/add/AddTradePartner";
import EditTradePartner from "../../components/tradepartner/edit/EditTradePartner";
import { Customers } from "../../components/tradepartner/view/Customers";
import { ExternalCustomers } from "../../components/tradepartner/view/ExternalCustomers";
import { RouterComponent } from "../routerComponent/RouterComponent";

export const routes = [
  {
    component: Customers,
  }
];

/*export const routes = [
    {
      path: '/customers-microfe',
      exact: true,
      component: Home,
      routes: [
        {
          path: '/customers-microfe',
          exact: true,
          component: ExternalCustomers
        },
        {
          path: '/customers-microfe/new',
          exact: true,
          component: EditTradePartner
        }
      ]
    }
];*/
