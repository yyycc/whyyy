import {
  BLOG_CHANGE_TABS_MARGIN_TOP,
} from '../../../../src/features/blog/redux/constants';

import {
  changeTabsMarginTop,
  reducer,
} from '../../../../src/features/blog/redux/changeTabsMarginTop';

describe('blog/redux/changeTabsMarginTop', () => {
  it('returns correct action by changeTabsMarginTop', () => {
    expect(changeTabsMarginTop()).toHaveProperty('type', BLOG_CHANGE_TABS_MARGIN_TOP);
  });

  it('handles action type BLOG_CHANGE_TABS_MARGIN_TOP correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_CHANGE_TABS_MARGIN_TOP }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
