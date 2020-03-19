// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BLOG_CHANGE_TABS_MARGIN_TOP,
} from './constants';

// 当tab条滚至顶部，就固定
// 给面包屑增加32px的margin-top不然，他会直接往上闪现一段具体，估计是tab被fix的原因
export function changeTabsPosition() {
  let tabFixed = false;
  let top = 0;
  if (document.documentElement.scrollTop > 40) {
    tabFixed = true;
    top = 32;
  }
  return {
    type: BLOG_CHANGE_TABS_MARGIN_TOP,
    tabFixed: tabFixed,
    top: top,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BLOG_CHANGE_TABS_MARGIN_TOP:
      return {
        ...state,
        tabFixed: action.tabFixed,
        top: action.top,
      };

    default:
      return state;
  }
}
