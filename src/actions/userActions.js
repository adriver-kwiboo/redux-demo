import * as userApi from "../api/userApi";
import actionTypes from "./actionTypes";

export function getUsers() {
  return function (dispatch) {
    return userApi.get().then((users) => {
      dispatch({
        type: actionTypes.LOAD_USERS,
        users,
      });
    });
  };
}
