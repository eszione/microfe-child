import { tradePartnerActionsConstants } from "../../tradepartners/actions/trade-partners.action";

const intialState = {
  list: {
    loading: false,
    data: null
  },
};

export default (state = intialState, { type, payload }) => {
    switch (type) {
        case tradePartnerActionsConstants.triggered:
            return { 
                ...intialState, 
                list: {
                    ...intialState.list,
                    loading: true
                }
            };
        case tradePartnerActionsConstants.loaded: {
            return { 
                ...intialState, 
                list: {
                    ...intialState.list,
                    ...payload,
                    data: payload.data
                }
            };
        }
        default:
            return state;
    }
};
