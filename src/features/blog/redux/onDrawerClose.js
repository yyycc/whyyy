// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BLOG_ON_DRAWER_CLOSE,
} from './constants';

export function onDrawerClose() {
  return {
    type: BLOG_ON_DRAWER_CLOSE,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BLOG_ON_DRAWER_CLOSE:
      return {
        ...state,
        visible: false,
      };

    default:
      return state;
  }
}
