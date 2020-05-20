// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  CSS_CHANGE_COLOR,
} from './constants';

export function changeColor(color) {
  return {
    type: CSS_CHANGE_COLOR,
    color: color,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case CSS_CHANGE_COLOR:
      return {
        ...state,
        color: action.color,
      };

    default:
      return state;
  }
}
