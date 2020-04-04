// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BLOG_CHANGE_IMAGE,
} from './constants';

export function changeImage(index) {
  return {
    type: BLOG_CHANGE_IMAGE,
    index: index,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BLOG_CHANGE_IMAGE:
      return {
        ...state,
        imageIndex: action.index,
      };

    default:
      return state;
  }
}
