import { createSelector } from 'reselect';

export const getTradePartnersRaw = (state) => state.tradePartners?.list;

export const getTradePartners = createSelector(getTradePartnersRaw, (tradePartners) => {
    const data = (tradePartners?.data || []).map((item) => {
        const billingAddress = item.addresses?.filter(
            (address) => address.type === 'Billing',
        )[0];

        return {
            ...item,
            type: item.type?.name,
            group: item.groups?.[0]?.parent?.name,
            subGroup: item.groups?.[0]?.name,
            billingAddress: billingAddress?.country,
        };
    });
    return { ...tradePartners, data };
});
