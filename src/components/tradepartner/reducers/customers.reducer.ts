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
            const data = payload?.data;
            return { ...intialState, data };
        }
        default:
            return state;
    }
};
