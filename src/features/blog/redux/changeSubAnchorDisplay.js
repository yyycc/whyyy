// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BLOG_CHANGE_SUB_ANCHOR_DISPLAY,
} from './constants';

export function changeSubAnchorDisplay(index, name, order, h2) {
  h2[name][order][index][2] = !h2[name][order][index][2];
  return {
    type: BLOG_CHANGE_SUB_ANCHOR_DISPLAY,
    h2: h2,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BLOG_CHANGE_SUB_ANCHOR_DISPLAY:
      return {
        ...state,
        h2: action.h2,
      };

    default:
      return state;
  }
}
