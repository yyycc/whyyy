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
import { reducer as changeTabsPositionReducer } from './changeTabsPosition';
import { reducer as queryPostsByTagReducer } from './queryPostsByTag';
import { reducer as queryPostsByDateReducer } from './queryPostsByDate';
import { reducer as addFontSizeReducer } from './addFontSize';
import { reducer as minusFontSizeReducer } from './minusFontSize';
import { reducer as defaultFontSizeReducer } from './defaultFontSize';
import { reducer as fuzzyQueryPostsReducer } from './fuzzyQueryPosts';
import { reducer as changeSubAnchorDisplayReducer } from './changeSubAnchorDisplay';

const reducers = [
  changePageReducer,
  changeImageReducer,
  changeTabsPositionReducer,
  queryPostsByTagReducer,
  queryPostsByDateReducer,
  addFontSizeReducer,
  minusFontSizeReducer,
  defaultFontSizeReducer,
  fuzzyQueryPostsReducer,
  changeSubAnchorDisplayReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
