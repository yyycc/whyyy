// This is the root reducer of the feature. It is used for:
//   1. Load reducers from each action in the feature and process them one by one.
//      Note that this part of code is mainly maintained by Rekit, you usually don't need to edit them.
//   2. Write cross-topic reducers. If a reducer is not bound to some specific action.
//      Then it could be written here.
// Learn more from the introduction of this approach:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da.

import initialState from './initialState';
import { reducer as changePageReducer } from './changePage';
import { reducer as changeImageReducer } from './changeImage';
import { reducer as queryPostsByTagReducer } from './queryPostsByTag';
import { reducer as queryPostsByDateReducer } from './queryPostsByDate';
import { reducer as addFontSizeReducer } from './addFontSize';
import { reducer as minusFontSizeReducer } from './minusFontSize';
import { reducer as defaultFontSizeReducer } from './defaultFontSize';
import { reducer as fuzzyQueryPostsReducer } from './fuzzyQueryPosts';
import { reducer as autoChangeImagesReducer } from './autoChangeImages';
import { reducer as scrollBannerReducer } from './scrollBanner';
import { reducer as onDrawerCloseReducer } from './onDrawerClose';
import { reducer as changeDrawerReducer } from './changeDrawer';
import { reducer as changeModeReducer } from './changeMode';
import { reducer as changeSentencesReducer } from './changeSentences';
import { reducer as changeModalReducer } from './changeModal';
import { reducer as initPostReducer } from './initPost';
import { reducer as changeProgressReducer } from './changeProgress';

const reducers = [
  changePageReducer,
  changeImageReducer,
  queryPostsByTagReducer,
  queryPostsByDateReducer,
  addFontSizeReducer,
  minusFontSizeReducer,
  defaultFontSizeReducer,
  fuzzyQueryPostsReducer,
  autoChangeImagesReducer,
  scrollBannerReducer,
  onDrawerCloseReducer,
  changeDrawerReducer,
  changeModeReducer,
  changeSentencesReducer,
  changeModalReducer,
  initPostReducer,
  changeProgressReducer,
];

export default function reducer(state = initialState, action) {
  // 读浏览器缓存
  if (state.posts.length === 0 && !!window.sessionStorage.getItem('posts')) {
    state.posts = JSON.parse(window.sessionStorage.getItem('posts'));
  }
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
