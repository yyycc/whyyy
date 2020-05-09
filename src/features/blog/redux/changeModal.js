// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  BLOG_CHANGE_MODAL,
} from './constants';

export function changeModal(searchVisible) {
  return {
    type: BLOG_CHANGE_MODAL,
    searchVisible: searchVisible,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case BLOG_CHANGE_MODAL:
      return {
        ...state,
        searchVisible: action.searchVisible,
      };

    default:
      return state;
  }
}
