import {
  BLOG_CHANGE_TABS_MARGIN_TOP,
} from '../../../../src/features/blog/redux/constants';

import {
  changeTabsPosition,
  reducer,
} from '../../../../src/features/blog/redux/changeTabsPosition';

describe('blog/redux/changeTabsPosition', () => {
  it('returns correct action by changeTabsPosition', () => {
    expect(changeTabsPosition()).toHaveProperty('type', BLOG_CHANGE_TABS_MARGIN_TOP);
  });

  it('handles action type BLOG_CHANGE_TABS_MARGIN_TOP correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_CHANGE_TABS_MARGIN_TOP },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
