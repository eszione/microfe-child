import { composeHandlers, createActions, handleActions } from "astro-actions";

export default function listReducer(name, extraState = {}) {
  const actions = createActions(
    [
      { name: "LIST_REQUEST", exts: ["SUCCESS", "FAIL"] },
      { name: "DELETE", exts: ["SUCCESS", "FAIL"] },
      { name: "CLEAN" },
    ],
    name
  );

  const initialState = {
    loading: false,
    data: [],
    facets: null,
    totalCount: 0,
    error: null,
    ...extraState,
  };

  const bulkHandler = (scope, actionIndicator = "loading") => ({
    [actions[scope]]: (state, { payload }) => ({
      ...state,
      [actionIndicator]: true,
    }),

    [actions[scope].success]: (
      state,
      { payload: { data = [], facets = null, totalCount = null } }
    ) => ({
      ...state,
      data,
      facets,
      totalCount,
      error: null,
      loading: false,
    }),

    [actions[scope].fail]: (state, { payload }) => ({
      ...state,
      [actionIndicator]: false,
      error: payload.message,
    }),
  });

  const requestReducer = handleActions(bulkHandler("listRequest"));
  const deleteReducer = handleActions(bulkHandler("delete", "progressing"));

  const cleanReducer = handleActions({
    [actions.clean]: (state) => ({
      ...state,
      data: [],
      totalCount: 0,
    }),
  });

  const composed = composeHandlers(requestReducer, deleteReducer, cleanReducer);

  return {
    actions,
    reducer: (state = initialState, action?) => composed(state, action),
  };
}
