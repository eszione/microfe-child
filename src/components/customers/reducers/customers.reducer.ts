import { customerActionsConstants } from "../actions/customers.action";

const intialState = {
  loading: false,
  data: null,  
};

export default (state = intialState, { type, payload }) => {
    switch (type) {
        case customerActionsConstants.triggered:
            return { ...intialState, loading: true };
        case customerActionsConstants.loaded: {
            return { ...intialState, ...payload };
        }
        default:
            return state;
    }
};
