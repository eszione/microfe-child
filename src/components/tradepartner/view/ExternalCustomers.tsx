import { Customers } from './Customers';
import { ExternalWrapper } from '../../ExternalWrapper/ExternalWrapper';

export const ExternalCustomers = () => {
    return (
        <ExternalWrapper>
            <Customers />
        </ExternalWrapper>
    );
};
