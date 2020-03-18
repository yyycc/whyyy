import {
  BLOG_QUERY_POSTS_BY_DATE,
} from '../../../../src/features/blog/redux/constants';

import {
  queryPostsByDate,
  reducer,
} from '../../../../src/features/blog/redux/queryPostsByDate';

describe('blog/redux/queryPostsByDate', () => {
  it('returns correct action by queryPostsByDate', () => {
    expect(queryPostsByDate()).toHaveProperty('type', BLOG_QUERY_POSTS_BY_DATE);
  });

  it('handles action type BLOG_QUERY_POSTS_BY_DATE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_QUERY_POSTS_BY_DATE },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
