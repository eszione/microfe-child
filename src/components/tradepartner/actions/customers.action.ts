export const customerActionsConstants = {
    loaded: 'CUSTOMER/LOADED',
    triggered: 'CUSTOMER/TRIGGERED',
};

export const customerActions = {
    TYPE: customerActionsConstants,
    triggered: () => ({ type: customerActionsConstants.triggered}),
    loaded: (payload = {}) => ({ type: customerActionsConstants.loaded, payload}),
};
