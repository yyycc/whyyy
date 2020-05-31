// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  COMMON_QUERY_USERS,
} from './constants';

export function setUsers(users) {
  return {
    type: COMMON_QUERY_USERS,
    users: users,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case COMMON_QUERY_USERS:
      return {
        ...state,
        users: action.users,
      };

    default:
      return state;
  }
}
