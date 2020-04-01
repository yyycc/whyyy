import {
  BLOG_ON_DRAWER_CLOSE,
} from '../../../../src/features/blog/redux/constants';

import {
  onDrawerClose,
  reducer,
} from '../../../../src/features/blog/redux/onDrawerClose';

describe('blog/redux/onDrawerClose', () => {
  it('returns correct action by onDrawerClose', () => {
    expect(onDrawerClose()).toHaveProperty('type', BLOG_ON_DRAWER_CLOSE);
  });

  it('handles action type BLOG_ON_DRAWER_CLOSE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_ON_DRAWER_CLOSE },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
