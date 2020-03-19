import {
  BLOG_MINUS_FONT_S_IZE,
} from '../../../../src/features/blog/redux/constants';

import {
  minusFontSize,
  reducer,
} from '../../../../src/features/blog/redux/minusFontSize';

describe('blog/redux/minusFontSize', () => {
  it('returns correct action by minusFontSize', () => {
    expect(minusFontSize()).toHaveProperty('type', BLOG_MINUS_FONT_S_IZE);
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
