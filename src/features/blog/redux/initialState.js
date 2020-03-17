// Initial state is the place you define all initial values for the Redux store of the feature.
// In the 'standard' way, initialState is defined in reducers: http://redux.js.org/docs/basics/Reducers.html
// But when application grows, there will be multiple reducers files, it's not intuitive what data is managed by the whole store.
// So Rekit extracts the initial state definition into a separate module so that you can have
// a quick view about what data is used for the feature, at any time.

// NOTE: initialState constant is necessary so that Rekit could auto add initial state when creating async actions.
// import Luffy from '../../../images/index.png';
// import javaScript from '../../../images/index-js.png';
import javaScript from '../../../images/index.png';
import Luffy from '../../../images/index-js.png';
import linux from '../../../images/index-linux.jpg';

const initialState = {
  titles: [{ title: 'javaScript', name: 'javaScript', menu: [] },
    { title: 'database', name: '数据库', menu: [] },
    { title: 'webService', name: 'webService', menu: [] },
    { title: 'linux', name: 'linux', menu: [] },
    { title: 'server', name: '服务端', menu: [] }],
  top: 40,
  tags: ['javaScript', 'linux', 'webService', 'database', 'spring', 'service', '版本控制', '前端', 'docker'],
  posts: [{
    title: 'javaScript(1): 变量、函数的声明提升', date: '2020-03-09', tag: ['javaScript'], route: '/blog/javaScript/promote',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  }, {
    title: 'docker(1): 其实就为了装oracle数据库',
    date: '2019-11-08',
    tag: ['server', 'docker'],
    route: '/blog/server/docker/dockerA',
    summary: '现在做个项目，哪儿哪儿都是oracle数据库，都在服务器上，服务器还仅限内网访问，你高兴就好，我不搭个本地数据库就太难了呀。。。',
  }, {
    title: 'docker(2): 又想装一个tomcat了',
    date: '2019-11-11',
    tag: ['server', 'docker'],
    route: '/blog/server/docker/dockerB',
    summary: '我想在里面装一个tomcat，把我的axis服务部署在上面。。。',
  }, {
    title: 'javaScript(2): 数组', date: '2020-03-09', tag: ['javaScript', 'Array'], route: '/blog/javaScript/array',
    summary: 'js的文档也看了好多遍了，怎么每次碰到数组的操作，还是要bd。。。',
  }, {
    title: 'javaScript —————— 变量、函数的声明提升', date: '2020-03-09', tag: ['javaScript'], route: '/blog/javaScript/promote',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  }, {
    title: 'javaScript —————— 变量、函数的声明提升', date: '2020-03-09', tag: ['javaScript'], route: '/blog/javaScript/promote',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  }, {
    title: 'javaScript —————— 变量、函数的声明提升', date: '2020-03-09', tag: ['javaScript'], route: '/blog/javaScript/promote',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  }, {
    title: 'javaScript —————— 变量、函数的声明提升', date: '2020-03-09', tag: ['javaScript'], route: '/blog/javaScript/promote',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  }, {
    title: 'javaScript —————— 变量、函数的声明提升', date: '2020-03-09', tag: ['javaScript'], route: '/blog/javaScript/promote',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  }, {
    title: '10', date: '2020-03-09', tag: ['javaScript'], route: '/blog/javaScript/promote',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  }, {
    title: 'cyy', date: '2020-03-09', tag: ['javaScript'], route: '/blog/javaScript/promote',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  }, {
    title: 'test', date: '2020-03-09', tag: ['javaScript'], route: '/blog/javaScript/promote',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  }, {
    title: 'oracle', date: '2020-03-09', tag: ['database', 'oracle'], route: '/blog/javaScript/promote',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  }, {
    title: 'linux2', date: '2020-03-09', tag: ['linux'], route: '/blog/javaScript/promote',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  }, {
    title: 'webService', date: '2020-03-09', tag: ['webService'], route: '/blog/javaScript/promote',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  }, {
    title: 'database', date: '2020-03-09', tag: ['database'], route: '/blog/javaScript/promote',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  }, {
    title: 'linux', date: '2020-03-09', tag: ['linux'], route: '/blog/javaScript/promote',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  }],
  postsToDisplay: [],
  postsQueried: [],
  current: 1,
  images: [Luffy, linux, javaScript],
  imageRoutes: ['luffy', 'linux', 'javaScript'],
  index: 0, // 当前图片序号
  breadCrumb: {
    'blog': '首页',
    'javaScript': 'javaScript',
    'database': '数据库',
    'linux': 'linux',
    'promote': '声明提升',
    'server': '服务端'
  },
};

export default initialState;
