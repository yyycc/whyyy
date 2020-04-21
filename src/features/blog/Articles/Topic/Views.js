// Initial state is the place you define all initial values for the Redux store of the feature.
// In the 'standard' way, initialState is defined in reducers: http://redux.js.org/docs/basics/Reducers.html
// But when application grows, there will be multiple reducers files, it's not intuitive what data is managed by the whole store.
// So Rekit extracts the initial state definition into a separate module so that you can have
// a quick view about what data is used for the feature, at any time.

// NOTE: initialState constant is necessary so that Rekit could auto add initial state when creating async actions.


const views = {
  posts: [
    {
      title: 'git(1): git的三种级别配置以及常用配置',
      date: '2019-10-18', tag: ['git'], route: '/blog/articles/git/config',
      summary: 'git status git status git status git status git status。。。',
      recommended: true,
      key: 3,
    },
    {
      title: 'oracle(1): 数据导入导出以及一些常用指令',
      date: '2019-10-17', tag: ['database', 'oracle'],
      route: '/blog/articles/database/oracle',
      summary: 'oracle 那些我记不住的东西。。。',
      recommended: true,
      key: 2,
    },
    {
      title: '面试题收集(1)',
      date: '2020-04-20', tag: ['interview'], route: '/blog/articles/interview/one',
      summary: '面试题',
      recommended: false,
      key: 1,
    },
  ],
};

export default views;
