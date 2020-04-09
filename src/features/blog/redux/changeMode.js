// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BLOG_CHANGE_MODE,
} from './constants';

export function changeMode(mode) {
  return {
    type: BLOG_CHANGE_MODE,
    mode: mode,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BLOG_CHANGE_MODE:
      return {
        ...state,
        mode: action.mode,
      };

    default:
      return state;
  }
}
