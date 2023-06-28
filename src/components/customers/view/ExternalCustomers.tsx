import { Customers } from './Customers';
import { ExternalWrapper } from '../../../externals/external-wrapper/ExternalWrapper';

export const ExternalCustomers = () => {
    return (
        <ExternalWrapper>
            <Customers />
        </ExternalWrapper>
    );
};
