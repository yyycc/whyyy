import {
  BLOG_SCROLL_BANNER,
} from '../../../../src/features/blog/redux/constants';

import {
  scrollBanner,
  reducer,
} from '../../../../src/features/blog/redux/scrollBanner';

describe('blog/redux/scrollBanner', () => {
  it('returns correct action by scrollBanner', () => {
    expect(scrollBanner()).toHaveProperty('type', BLOG_SCROLL_BANNER);
  });

  it('handles action type BLOG_SCROLL_BANNER correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_SCROLL_BANNER },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
