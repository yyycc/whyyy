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

  it('handles action type BLOG_QUERY_POSTS_BY_DATE correctly', (date) => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_QUERY_POSTS_BY_DATE, date: date },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {
      ...state,
      current: 1,
      postsQueried: state.posts.filter((ele) => {
        return ele.date.slice(0, 7).indexOf(date) > -1;
      }),
      postsToDisplay: state.posts.filter((ele) => {
        return ele.date.slice(0, 7).indexOf(date) > -1;
      }).slice(0, 10),
    };
    expect(state).toEqual(expectedState);
  });
});
