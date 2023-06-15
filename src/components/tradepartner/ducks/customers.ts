import listDuck from "../../../helpers/listDuck";

const { actions: acts, reducer } = listDuck("customers");

export const actions = acts;
export default reducer;
