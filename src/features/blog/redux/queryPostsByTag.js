// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BLOG_QUERY_POSTS,
} from './constants';

export function queryPostsByTag(e) {
  debugger
  let tag = 'all';
  if (e && e.target) {
    tag = e.target.text;
  } else if (e) {
    tag = e;
  }
  return {
    type: BLOG_QUERY_POSTS,
    tag: tag,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BLOG_QUERY_POSTS:
      return {
        ...state,
        current: 1,
        postsQueried: state.posts.filter((ele) => {
          return ele.tag.indexOf(action.tag) > -1 || action.tag === 'all';
        }),
        postsToDisplay: state.posts.filter((ele) => {
          return ele.tag.indexOf(action.tag) > -1 || action.tag === 'all';
        }).slice(0, 10),
      };

    default:
      return state;
  }
}
