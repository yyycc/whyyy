// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BLOG_ADD_FONT_SIZE,
} from './constants';

export function addFontSize() {
  return {
    type: BLOG_ADD_FONT_SIZE,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BLOG_ADD_FONT_SIZE:
      return {
        ...state,
        fontSize: state.fontSize + 1,
      };

    default:
      return state;
  }
}
