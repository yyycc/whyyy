// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BLOG_CHANGE_TABS_MARGIN_TOP,
} from './constants';

export function changeTabsMarginTop() {
  let top = 40;
  if (document.documentElement.scrollTop > 0) {
    top = 0;
  }
  return {
    type: BLOG_CHANGE_TABS_MARGIN_TOP,
    top: top
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BLOG_CHANGE_TABS_MARGIN_TOP:
      return {
        ...state,
        top: action.top
      };

    default:
      return state;
  }
}
