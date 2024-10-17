import api from "@/config/api";
import * as types from "./ActionType";

export const getUserWatchList = (jwt) => async (dispatch) => {
  dispatch({ type: types.GET_USER_WATCHLIST_REQUEST });
  try {
    const response = await api.get(`/api/watchList/user`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    dispatch({
      type: types.GET_USER_WATCHLIST_SUCCESS,
      payload: response.data,
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.GET_USER_WATCHLIST_FAILURE,
      error: error.message,
    });
  }
};

export const addItemToWatchList =
  ({ coinId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: types.ADD_COIN_TO_WATCHLIST_REQUEST });
    try {
      const response = await api.patch(
        `/api/watchList/add/coin/${coinId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: types.ADD_COIN_TO_WATCHLIST_SUCCESS,
        payload: response.data,
      });
      console.log("add item to watch list ----", response.data);
    } catch (error) {
      console.log("error---", error.response.data);
      dispatch({
        type: types.ADD_COIN_TO_WATCHLIST_FAILURE,
        payload: error.message,
      });
    }
  };
