import {
  START_LOADING,
  UPDATE_USER_DATA,
  UPDATE_USER_ERROR,
} from "../constants/constants";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_USER_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
