import { exitInWatchList } from "@/util/ExistInWatchList";
import * as types from "./ActionType";

const initialState = {
  watchList: null,
  loading: false,
  error: null,
  items: [],
};

const watchListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_WATCHLIST_REQUEST:
    case types.ADD_COIN_TO_WATCHLIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case types.GET_USER_WATCHLIST_SUCCESS:
      return {
        ...state,
        watchList: action.payload,
        items: action.payload.coins,
        loading: false,
        error: null,
      };

    case types.ADD_COIN_TO_WATCHLIST_SUCCESS:
      let updatedItems = exitInWatchList(state.items, action.payload)
        ? state.items.filter((item) => item.id !== action.payload.id)
        : [action.payload, ...state.items];
      return {
        ...state,
        items: updatedItems,
        loading: false,
        error: null,
      };

    case types.GET_USER_WATCHLIST_FAILURE:
    case types.ADD_COIN_TO_WATCHLIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default watchListReducer;
