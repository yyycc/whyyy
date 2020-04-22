// Initial state is the place you define all initial values for the Redux store of the feature.
// In the 'standard' way, initialState is defined in reducers: http://redux.js.org/docs/basics/Reducers.html
// But when application grows, there will be multiple reducers files, it's not intuitive what data is managed by the whole store.
// So Rekit extracts the initial state definition into a separate module so that you can have
// a quick view about what data is used for the feature, at any time.

// NOTE: initialState constant is necessary so that Rekit could auto add initial state when creating async actions.


const views = {
  posts: [
    {
      title: '面试题收集(1)',
      date: '2020-04-20', tag: ['interview'], route: '/blog/articles/interview/one',
      summary: '面试题',
      recommended: false,
      key: 1,
    },
    {
      title: '面试题收集(2)',
      date: '2020-04-22', tag: ['interview'],
      route: '/blog/articles/interview/two',
      summary: '面试题',
      recommended: true,
      key: 2,
    },
  ],
};

export default views;
