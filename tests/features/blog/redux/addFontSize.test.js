import {
  BLOG_ADD_FONT_SIZE,
} from '../../../../src/features/blog/redux/constants';

import {
  addFontSize,
  reducer,
} from '../../../../src/features/blog/redux/addFontSize';

describe('blog/redux/addFontSize', () => {
  it('returns correct action by addFontSize', () => {
    expect(addFontSize()).toHaveProperty('type', BLOG_ADD_FONT_SIZE);
  });

  it('handles action type BLOG_ADD_FONT_SIZE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_ADD_FONT_SIZE },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
