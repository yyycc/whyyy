import {
  BLOG_MINUS_FONT_S_IZE,
} from '../../../../src/features/blog/redux/constants';

import {
  minusFontSIze,
  reducer,
} from '../../../../src/features/blog/redux/minusFontSIze';

describe('blog/redux/minusFontSIze', () => {
  it('returns correct action by minusFontSIze', () => {
    expect(minusFontSIze()).toHaveProperty('type', BLOG_MINUS_FONT_S_IZE);
  });

  it('handles action type BLOG_MINUS_FONT_S_IZE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_MINUS_FONT_S_IZE },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
