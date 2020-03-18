// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BLOG_MINUS_FONT_S_IZE,
} from './constants';

export function minusFontSIze() {
  return {
    type: BLOG_MINUS_FONT_S_IZE,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BLOG_MINUS_FONT_S_IZE:
      return {
        ...state,
        fontSize: state.fontSize - 1,
      };

    default:
      return state;
  }
}
