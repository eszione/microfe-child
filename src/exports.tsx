import { BrowserRouter } from 'react-router-dom';
import AddTradePartnerComponent from './components/tradepartner/add/AddTradePartner';
import EditTradePartnerComponent from './components/tradepartner/edit/EditTradePartner';
import ViewTradePartnerComponent from './components/tradepartner/view/ViewTradePartner';

const ViewTradePartner = () => (<BrowserRouter><ViewTradePartnerComponent /></BrowserRouter>);

export {
    AddTradePartnerComponent,
    EditTradePartnerComponent,
    ViewTradePartnerComponent,
    ViewTradePartner
};
