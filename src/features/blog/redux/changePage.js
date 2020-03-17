// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BLOG_CHANGE_PAGE,
} from './constants';

export function changePage(page, pageSize) {
  const start = pageSize * (page - 1);
  const end = start + pageSize;
  const current = page;
  return {
    type: BLOG_CHANGE_PAGE,
    start: start,
    end: end,
    current: current,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BLOG_CHANGE_PAGE:
      return {
        ...state,
        current: action.current,
        postsToDisplay: state.posts.slice(action.start, action.end),
      };

    default:
      return state;
  }
}
