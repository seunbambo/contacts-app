import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "./../../constants/actionTypes/index";

const auth = (state, { payload, type }) => {
  switch (type) {
    case REGISTER_LOADING:
      return {
        ...state,
        auth: {
          ...state.auth,
          error: false,
          loading: true,
        },
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          data: payload,
        },
      };

    case REGISTER_ERROR:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};

export default auth;
