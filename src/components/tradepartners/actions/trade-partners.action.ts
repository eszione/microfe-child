export const tradePartnerActionsConstants = {
    loaded: 'TRADE_PARTNER/LOADED',
    triggered: 'TRADE_PARTNER/TRIGGERED',
};

export const tradePartnerActions = {
    TYPE: tradePartnerActionsConstants,
    triggered: () => ({ type: tradePartnerActionsConstants.triggered}),
    loaded: (payload = {}) => ({ type: tradePartnerActionsConstants.loaded, payload}),
};
