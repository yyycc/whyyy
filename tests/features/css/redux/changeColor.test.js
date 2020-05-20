import {
  CSS_CHANGE_COLOR,
} from '../../../../src/features/css/redux/constants';

import {
  changeColor,
  reducer,
} from '../../../../src/features/css/redux/changeColor';

describe('css/redux/changeColor', () => {
  it('returns correct action by changeColor', () => {
    expect(changeColor()).toHaveProperty('type', CSS_CHANGE_COLOR);
  });

  it('handles action type CSS_CHANGE_COLOR correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: CSS_CHANGE_COLOR },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
