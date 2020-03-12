// Initial state is the place you define all initial values for the Redux store of the feature.
// In the 'standard' way, initialState is defined in reducers: http://redux.js.org/docs/basics/Reducers.html
// But when application grows, there will be multiple reducers files, it's not intuitive what data is managed by the whole store.
// So Rekit extracts the initial state definition into a separate module so that you can have
// a quick view about what data is used for the feature, at any time.

// NOTE: initialState constant is necessary so that Rekit could auto add initial state when creating async actions.
import Luffy from '../../../images/index.png';
import js from '../../../images/index-js.png';
import linux from '../../../images/index-linux.jpg';
const initialState = {
  titles: [{ title: 'javaScript', menu: [] },
    { title: 'database', menu: [] },
    { title: 'webService', menu: [] },
    { title: 'linux', menu: [] }],
  tags: ['javaScript'],
  posts: [{
    title: 'javaScript —————— 变量、函数的声明提升', date: '2020-03-09', tag: 'javaScript', route: '/blog/js/javaScript',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  },{
    title: 'javaScript —————— 变量、函数的声明提升', date: '2020-03-09', tag: 'javaScript', route: '/blog/js/javaScript',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  },{
    title: 'javaScript —————— 变量、函数的声明提升', date: '2020-03-09', tag: 'javaScript', route: '/blog/js/javaScript',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  },{
    title: 'javaScript —————— 变量、函数的声明提升', date: '2020-03-09', tag: 'javaScript', route: '/blog/js/javaScript',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  },{
    title: 'javaScript —————— 变量、函数的声明提升', date: '2020-03-09', tag: 'javaScript', route: '/blog/js/javaScript',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  },{
    title: 'javaScript —————— 变量、函数的声明提升', date: '2020-03-09', tag: 'javaScript', route: '/blog/js/javaScript',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  },{
    title: 'javaScript —————— 变量、函数的声明提升', date: '2020-03-09', tag: 'javaScript', route: '/blog/js/javaScript',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  },{
    title: 'javaScript —————— 变量、函数的声明提升', date: '2020-03-09', tag: 'javaScript', route: '/blog/js/javaScript',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  },{
    title: 'javaScript —————— 变量、函数的声明提升', date: '2020-03-09', tag: 'javaScript', route: '/blog/js/javaScript',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  },{
    title: '10', date: '2020-03-09', tag: 'javaScript', route: '/blog/js/javaScript',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  },{
    title: 'cyy', date: '2020-03-09', tag: 'javaScript', route: '/blog/js/javaScript',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  },{
    title: 'test', date: '2020-03-09', tag: 'javaScript', route: '/blog/js/javaScript',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  },{
    title: 'test', date: '2020-03-09', tag: 'javaScript', route: '/blog/js/javaScript',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  },{
    title: 'test', date: '2020-03-09', tag: 'javaScript', route: '/blog/js/javaScript',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  },{
    title: 'test', date: '2020-03-09', tag: 'javaScript', route: '/blog/js/javaScript',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  },{
    title: 'test', date: '2020-03-09', tag: 'javaScript', route: '/blog/js/javaScript',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  },{
    title: 'test', date: '2020-03-09', tag: 'javaScript', route: '/blog/js/javaScript',
    summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
  }],
  current: 1,
  start: 0,
  end: 10,
  src: Luffy,
  alt: 'Luffy',
  images: [Luffy, linux, js],
};

export default initialState;
