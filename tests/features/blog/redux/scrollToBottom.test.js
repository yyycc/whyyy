import {
  BLOG_SCROLL_TO_BOTTOM,
} from '../../../../src/features/blog/redux/constants';

import {
  scrollToBottom,
  reducer,
} from '../../../../src/features/blog/redux/scrollToBottom';

describe('blog/redux/scrollToBottom', () => {
  it('returns correct action by scrollToBottom', () => {
    expect(scrollToBottom()).toHaveProperty('type', BLOG_SCROLL_TO_BOTTOM);
  });

  it('handles action type BLOG_SCROLL_TO_BOTTOM correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_SCROLL_TO_BOTTOM }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
