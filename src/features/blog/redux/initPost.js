// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BLOG_INIT_POST,
} from './constants';

export function initPost(posts) {
  posts.forEach(function(ele) {
    if (!!ele.tag) {
      ele.tag = ele.tag.split(',');
    }
  });
  return {
    type: BLOG_INIT_POST,
    posts: posts,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BLOG_INIT_POST:
      return {
        ...state,
        posts: action.posts,
      };

    default:
      return state;
  }
}
