import {
  BLOG_FUZZY_QUERY_POSTS,
} from '../../../../src/features/blog/redux/constants';

import {
  fuzzyQueryPosts,
  reducer,
} from '../../../../src/features/blog/redux/fuzzyQueryPosts';

describe('blog/redux/fuzzyQueryPosts', () => {
  it('returns correct action by fuzzyQueryPosts', () => {
    expect(fuzzyQueryPosts()).toHaveProperty('type', BLOG_FUZZY_QUERY_POSTS);
  });

  it('handles action type BLOG_FUZZY_QUERY_POSTS correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_FUZZY_QUERY_POSTS },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
