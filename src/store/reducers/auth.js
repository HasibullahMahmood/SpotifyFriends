import {LOGIN, LOGOUT} from '../actions/auth';

const initialState = {
  accessToken: null,
  refreshToken: null,
  expirationDate: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        expirationDate: action.expirationDate,
      };
    case LOGOUT:
      return {accessToken: null, refreshToken: null, expirationDate: null};
    default:
      return state;
  }
};
