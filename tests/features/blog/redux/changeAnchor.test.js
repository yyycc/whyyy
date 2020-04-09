import {
  BLOG_CHANGE_ANCHOR,
} from '../../../../src/features/blog/redux/constants';

import {
  changeAnchor,
  reducer,
} from '../../../../src/features/blog/redux/changeAnchor';

describe('blog/redux/changeAnchor', () => {
  it('returns correct action by changeAnchor', () => {
    expect(changeAnchor()).toHaveProperty('type', BLOG_CHANGE_ANCHOR);
  });

  it('handles action type BLOG_CHANGE_ANCHOR correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_CHANGE_ANCHOR },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
