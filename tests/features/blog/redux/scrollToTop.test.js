import {
  BLOG_SCROLL_TO_TOP,
} from '../../../../src/features/blog/redux/constants';

import {
  scrollToTop,
  reducer,
} from '../../../../src/features/blog/redux/scrollToTop';

describe('blog/redux/scrollToTop', () => {
  it('returns correct action by scrollToTop', () => {
    expect(scrollToTop()).toHaveProperty('type', BLOG_SCROLL_TO_TOP);
  });

  it('handles action type BLOG_SCROLL_TO_TOP correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_SCROLL_TO_TOP }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
