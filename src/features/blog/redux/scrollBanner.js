// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BLOG_SCROLL_BANNER,
} from './constants';

export function scrollBanner(arg1, blog) {
  let anim;
  let texts;
  if (arg1 === 'animate') {
    anim = true;
  } else {
    texts = blog.texts;
    texts.push(blog.texts[0]);
    texts.shift();
    anim = false;
  }
  return {
    type: BLOG_SCROLL_BANNER,
    anim: anim,
    texts: texts,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BLOG_SCROLL_BANNER:
      return {
        ...state,
        animate: action.anim,
        texts: action.texts ? action.texts : state.texts,

      };

    default:
      return state;
  }
}
