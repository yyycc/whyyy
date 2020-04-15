import {
  BLOG_CHANGE_SENTENCES,
} from '../../../../src/features/blog/redux/constants';

import {
  changeSentences,
  reducer,
} from '../../../../src/features/blog/redux/changeSentences';

describe('blog/redux/changeSentences', () => {
  it('returns correct action by changeSentences', () => {
    expect(changeSentences()).toHaveProperty('type', BLOG_CHANGE_SENTENCES);
  });

  it('handles action type BLOG_CHANGE_SENTENCES correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_CHANGE_SENTENCES },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
