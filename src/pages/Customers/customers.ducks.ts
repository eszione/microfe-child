import { listDuck } from "../../core/ducks/list-duck";

const { actions: acts, reducer } = listDuck("customers");

export const actions = acts;
export default reducer;
