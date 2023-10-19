import { customerActionsConstants } from './customers.constants';

const intialState = {
  loading: false,
  data: null,  
};

const customerReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case customerActionsConstants.triggered:
            return { ...intialState, loading: true };
        case customerActionsConstants.loaded: {
            return { ...intialState, ...payload };
        }
        default: {
            return state;
        }
    }
};

export { customerReducer };
