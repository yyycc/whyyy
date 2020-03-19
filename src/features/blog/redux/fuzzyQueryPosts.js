// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BLOG_FUZZY_QUERY_POSTS,
} from './constants';

function fuzzyQuery(posts, value) {
  return posts.filter((ele) => {
    return ele.title.indexOf(value) > -1;
  });
}

export function fuzzyQueryPosts(value) {
  return {
    type: BLOG_FUZZY_QUERY_POSTS,
    value: value,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BLOG_FUZZY_QUERY_POSTS:
      return {
        ...state,
        current: 1,
        postsQueried: fuzzyQuery(state.posts, action.value),
        postsToDisplay: fuzzyQuery(state.posts, action.value).slice(0, 10),
      };

    default:
      return state;
  }
}
