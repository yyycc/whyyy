// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BLOG_QUERY_POSTS_BY_DATE,
} from './constants';

export function queryPostsByDate(date) {
  debugger
  return {
    type: BLOG_QUERY_POSTS_BY_DATE,
    date: date,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BLOG_QUERY_POSTS_BY_DATE:
      return {
        ...state,
        current: 1,
        postsQueried: state.posts.filter((ele) => {
          return ele.date.slice(0, 7).indexOf(action.date) > -1;
        }),
        postsToDisplay: state.posts.filter((ele) => {
          return ele.date.slice(0, 7).indexOf(action.date) > -1;
        }).slice(0, 10),
      };

    default:
      return state;
  }
}
