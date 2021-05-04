import actionTypes from "../actions/actionTypes";

export default function userReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.UPDATE_USER:
      return state.map((user) =>
        user.id === action.user.id ? action.user : user
      );
    case actionTypes.LOAD_USERS:
      return action.users;
    default:
      return state;
  }
}
