import api from "@/config/api";
import * as types from "./ActionType";

export const payOrder =
  ({ jwt, orderData, amount }) =>
  async (dispatch) => {
    dispatch({ type: types.PAY_ORDER_REQUEST });
    try {
      const response = await api.post(`/api/orders/pay`, orderData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({
        type: types.PAY_ORDER_SUCCESS,
        payload: response.data,
        amount,
      });
      console.log("order sccess", response.data);
    } catch (error) {
      console.log(error);
      dispatch({
        type: types.PAY_ORDER_FAILURE,
        payload: error.message,
      });
    }
  };

export const getOrderById = (jwt, orderId) => async (dispatch) => {
  dispatch({ type: types.GET_ORDER_REQUEST });
  try {
    const response = await api.get(`/api/orders/${orderId}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    dispatch({
      type: types.GET_ORDER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.GET_ORDER_FAILURE,
      payload: error.message,
    });
  }
};

export const getAllOrdersForUser =
  ({ jwt, orderType, assetSymbol }) =>
  async (dispatch) => {
    dispatch({ type: types.GET_ALL_ORDER_REQUEST });
    try {
      const response = await api.get(`/api/orders`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        params: {
          order_Type: orderType,
          asset_Symbol: assetSymbol,
        },
      });
      dispatch({
        type: types.GET_ALL_ORDER_SUCCESS,
        payload: response.data,
      });
      console.log("order success ", response.data);
    } catch (error) {
      console.log(error);
      dispatch({
        type: types.GET_ALL_ORDER_FAILURE,
        payload: error.message,
      });
    }
  };