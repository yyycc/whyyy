// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  COMMON_ADD_USERS,
} from './constants';

export function addUsers(newData) {
  return {
    type: COMMON_ADD_USERS,
    newData: newData,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case COMMON_ADD_USERS:
      return {
        ...state,
        users: [...state.users, action.newData],
      };

    default:
      return state;
  }
}
