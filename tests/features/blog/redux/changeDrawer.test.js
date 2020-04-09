import {
  BLOG_CHANGE_DRAWER,
} from '../../../../src/features/blog/redux/constants';

import {
  changeDrawer,
  reducer,
} from '../../../../src/features/blog/redux/changeDrawer';

describe('blog/redux/changeDrawer', () => {
  it('returns correct action by changeDrawer', () => {
    expect(changeDrawer()).toHaveProperty('type', BLOG_CHANGE_DRAWER);
  });

  it('handles action type BLOG_CHANGE_DRAWER correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_CHANGE_DRAWER },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
