// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BLOG_AUTO_CHANGE_IMAGES,
} from './constants';

export function autoChangeImages(max) {
  return {
    type: BLOG_AUTO_CHANGE_IMAGES,
    max: max - 1,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BLOG_AUTO_CHANGE_IMAGES:
      return {
        ...state,
        imageIndex: state.imageIndex === action.max ? 0 : ++state.imageIndex,
      };

    default:
      return state;
  }
}
