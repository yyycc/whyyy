import {
  BLOG_CHANGE_MODAL,
} from '../../../../src/features/blog/redux/constants';

import {
  changeModal,
  reducer,
} from '../../../../src/features/blog/redux/changeModal';

describe('blog/redux/changeModal', () => {
  it('returns correct action by changeModal', () => {
    expect(changeModal()).toHaveProperty('type', BLOG_CHANGE_MODAL);
  });

  it('handles action type BLOG_CHANGE_MODAL correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_CHANGE_MODAL },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
