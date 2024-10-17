import api from "@/config/api";
import * as types from "./ActionTypes";

export const getAssetById =
  ({ assetId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: types.GET_ASSET_REQUEST });
    try {
      const response = await api.get(`/api/assets/${assetId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({
        type: types.GET_ASSET_SUCCESS,
        payload: response.data,
      });
      console.log("get asset by id---", response.data);
    } catch (error) {
      console.log(error);
      dispatch({
        type: types.GET_ASSET_FAILURE,
        payload: error.message,
      });
    }
  };

export const getAssetDetails =
  ({ coinId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: types.GET_ASSET_DETAILS_REQUEST });
    try {
      const response = await api.get(`/api/assets/coin/${coinId}/user`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: types.GET_ASSET_DETAILS_SUCCESS,
        payload: response.data,
      });
      console.log("get asset details---", response.data);
    } catch (error) {
      console.log(error);
      dispatch({
        type: types.GET_ASSET_DETAILS_FAILURE,
        payload: error.message,
      });
    }
  };

export const getUserAssets = (jwt) => async (dispatch) => {
  dispatch({ type: types.GET_USER_ASSET_REQUEST });
  try {
    const response = await api.get(`/api/assets/allAsset`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    dispatch({
      type: types.GET_USER_ASSET_SUCCESS,
      payload: response.data,
    });
    console.log("get user Aset----", response.data);
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.GET_USER_ASSET_FAILURE,
      payload: error.message,
    });
  }
};
