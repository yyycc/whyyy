import {
  BLOG_DEFAULT_FONT_SIZE,
} from '../../../../src/features/blog/redux/constants';

import {
  defaultFontSize,
  reducer,
} from '../../../../src/features/blog/redux/defaultFontSize';

describe('blog/redux/defaultFontSize', () => {
  it('returns correct action by defaultFontSize', () => {
    expect(defaultFontSize()).toHaveProperty('type', BLOG_DEFAULT_FONT_SIZE);
  });

  it('handles action type BLOG_DEFAULT_FONT_SIZE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_DEFAULT_FONT_SIZE },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = { fontSize: 14 };
    expect(state).toEqual(expectedState);
  });
});
