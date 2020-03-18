import {
  BLOG_QUERY_POSTS,
} from '../../../../src/features/blog/redux/constants';

import {
  queryPostsByTag,
  reducer,
} from '../../../../src/features/blog/redux/queryPostsByTag';

describe('blog/redux/queryPostsByTag', () => {
  it('returns correct action by queryPostsByTag', () => {
    expect(queryPostsByTag()).toHaveProperty('type', BLOG_QUERY_POSTS);
  });

  it('handles action type BLOG_QUERY_POSTS correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_QUERY_POSTS },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
