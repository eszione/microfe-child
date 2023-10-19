import { TradePartners } from './TradePartners';
import { ExternalWrapper } from '../../../externals/external-wrapper/ExternalWrapper';
import { FC } from 'react';
import { RouteConfig } from 'react-router-config';

export const ExternalTradePartners: FC<{ location: RouteConfig['location'] }> = ({
    location,
}) => {
    return (
        <ExternalWrapper>
            <TradePartners location={location}/>
        </ExternalWrapper>
    );
};
