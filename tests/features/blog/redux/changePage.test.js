import {
  BLOG_CHANGE_PAGE,
} from '../../../../src/features/blog/redux/constants';

import {
  changePage,
  reducer,
} from '../../../../src/features/blog/redux/changePage';

describe('blog/redux/changePage', () => {
  it('returns correct action by changePage', () => {
    expect(changePage()).toHaveProperty('type', BLOG_CHANGE_PAGE);
  });

  it('handles action type BLOG_CHANGE_PAGE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_CHANGE_PAGE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
