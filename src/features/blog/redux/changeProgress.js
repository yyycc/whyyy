// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BLOG_CHANGE_PROGRESS,
} from './constants';

export function changeProgress(width) {
  return {
    type: BLOG_CHANGE_PROGRESS,
    width: width,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BLOG_CHANGE_PROGRESS:
      return {
        ...state,
        width: action.width,
      };

    default:
      return state;
  }
}
