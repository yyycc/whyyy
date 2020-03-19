import {
  BLOG_DEFAULT_FONT_S_IZE,
} from '../../../../src/features/blog/redux/constants';

import {
  defaultFontSize,
  reducer,
} from '../../../../src/features/blog/redux/defaultFontSize';

describe('blog/redux/defaultFontSize', () => {
  it('returns correct action by defaultFontSize', () => {
    expect(defaultFontSize()).toHaveProperty('type', BLOG_DEFAULT_FONT_S_IZE);
  });

  it('handles action type BLOG_DEFAULT_FONT_S_IZE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_DEFAULT_FONT_S_IZE },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
