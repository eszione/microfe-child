import { renderRoutes } from 'react-router-config';
import { routes } from '../../core/routes/routes';
import { ExternalWrapper } from '../ExternalWrapper/ExternalWrapper';

export const Home = () => <ExternalWrapper>{renderRoutes(routes[0].routes as any)}</ExternalWrapper>;
