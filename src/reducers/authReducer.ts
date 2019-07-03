/**
 * @file authReducer
 * @description redux reducer for login
 * @author tm
 */

import authConstants from '../constants/authConstants';

interface user {
  name: string
}

interface action {
  data: {
    [key: string]: user
  };
  type: string;
}

interface state {
  user: string;
}

const initialState: state = {
  user: '',
};

const authReducer = (state: state = initialState, action: action) => {
  switch(action.type) {
    case authConstants.LOGIN:
      return Object.assign({}, state, {
        user: action.data.user,
      });
    case authConstants.LOGOUT:
      return Object.assign({}, state, {
        user: '',
      })
    default:
      return state;
  }
};

export default authReducer;