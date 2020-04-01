import {
  BLOG_SHOW_DRAWER,
} from '../../../../src/features/blog/redux/constants';

import {
  showDrawer,
  reducer,
} from '../../../../src/features/blog/redux/showDrawer';

describe('blog/redux/showDrawer', () => {
  it('returns correct action by showDrawer', () => {
    expect(showDrawer()).toHaveProperty('type', BLOG_SHOW_DRAWER);
  });

  it('handles action type BLOG_SHOW_DRAWER correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_SHOW_DRAWER },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
