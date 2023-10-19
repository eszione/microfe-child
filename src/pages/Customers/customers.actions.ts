import { customerActionsConstants } from "./customers.constants";

export const customerActions = {
    TYPE: customerActionsConstants,
    triggered: () => ({ type: customerActionsConstants.triggered}),
    loaded: (payload = {}) => ({ type: customerActionsConstants.loaded, payload}),
};
