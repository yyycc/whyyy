// Initial state is the place you define all initial values for the Redux store of the feature.
// In the 'standard' way, initialState is defined in reducers: http://redux.js.org/docs/basics/Reducers.html
// But when application grows, there will be multiple reducers files, it's not intuitive what data is managed by the whole store.
// So Rekit extracts the initial state definition into a separate module so that you can have
// a quick view about what data is used for the feature, at any time.

// NOTE: initialState constant is necessary so that Rekit could auto add initial state when creating async actions.

import scroll from '../Components/ScrollText/scroll';
import carousel from '../Components/CarouselIndex/carousel';
import sentencesList from '../Notice/Sentences/sentencesList';

const { texts, animate } = scroll;
const { sentences, sentencesCurrent, sentencesToDisplay, sentencesSize } = sentencesList;
const { imageIndex, images, imageRoutes } = carousel;
const initialState = {
  title: 'whyyy his blog',
  posts: [
    {
      title: 'oracle(2): 如何用oracle请求web service',
      date: '2020-04-10', tag: ['database', 'oracle'], route: '/blog/articles/database/oracle-service',
      summary: '用oracle(sql developer)请求web service',
      key: 23,
    },
    {
      title: 'css(5): 如何画出一条0.5px的线',
      date: '2020-04-10', tag: ['frontEnd', 'css'], route: '/blog/articles/css/css',
      summary: '0.5px的线以及边框的实现方法',
      key: 22,
    },
    {
      title: 'css(4): div滚动到一定程度后固定',
      date: '2020-04-10', tag: ['frontEnd', 'css'], route: '/blog/articles/css/div-fix',
      summary: '实现div滚动到一定程度后在页面上固定',
      key: 21,
    },
    {
      title: 'git(2): git的基本指令',
      date: '2020-04-09', tag: ['git'], route: '/blog/articles/git/commands',
      summary: 'git多种指令及其功能介绍',
      recommended: true,
      key: 20,
    },
    {
      title: 'css(3): 文字公告滚动轮播',
      date: '2020-04-01', tag: ['frontEnd', 'javascript', 'css', 'react'], route: '/blog/articles/css/scroll',
      summary: '如何在react中实现滚动轮播',
      key: 19,
    },
    {
      title: 'css(2): 如何使用font-awesome',
      date: '2020-03-19', tag: ['frontEnd', 'css'], route: '/blog/articles/css/fontAwesome',
      summary: '一个非常好用的icon库。。。',
      key: 18,
    },
    {
      title: 'css(1): 如何让img居中显示',
      date: '2020-03-18', tag: ['frontEnd', 'css'], route: '/blog/articles/css/img-center',
      summary: '今天画blog的时候遇见了一个小问题，记录一下。。。',
      key: 17,
    },
    {
      title: 'mac(1): 如何读写移动硬盘',
      date: '2020-03-17', tag: ['mac', 'ntfs'], route: '/blog/articles/mac/ntfs',
      summary: 'MacBook连移动硬盘发现文件复制不进去，拖也拖不进去。。。',
      key: 16,
    },
    {
      title: 'javaScript(2): 变量、函数的声明提升',
      date: '2020-03-09', tag: ['frontEnd', 'javaScript'], route: '/blog/articles/javaScript/promote',
      summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
      key: 15,
    },
    {
      title: 'javaScript(1): 数组及其实例方法介绍',
      date: '2020-03-02', tag: ['frontEnd', 'javaScript', 'array'], route: '/blog/articles/javaScript/array',
      summary: 'js的文档也看了好多遍了，怎么每次碰到数组的操作，还是要bd。。。',
      recommended: true,
      key: 14,
    },
    {
      title: 'linux 指令(2): 常用指令介绍',
      date: '2020-01-13', tag: ['linux'], route: '/blog/articles/linux/commands',
      summary: '记录一下linux中常用的指令',
      recommended: true,
      key: 13,
    },
    {
      title: 'linux指令(1): vi、cp、tail指令扩展',
      date: '2020-01-07', tag: ['linux'], route: '/blog/articles/linux/vi',
      summary: 'linux指令vi、cp、tail介绍',
      recommended: true,
      key: 12,
    },
    {
      title: 'spring 事务配置',
      date: '2020-01-07', tag: ['java', 'spring'], route: '/blog/articles/java/spring/propagation',
      summary: 'service中存在众多业务逻辑，往往一个方法中就涉及多个增删改，当一个ddl报错，我们肯定希望之前执行的回滚，之后的不再执行，\n' +
        '这样才能保证事务的一致性。不然我只记录账上少了100，没有记录这个100的去处，账就崩了',
      key: 11,
    },
    {
      title: 'web service(2): spring + cxf 发布web service相关问题解决',
      date: '2020-01-03', lastUpdatedDate: '2020-04-24',
      tag: ['webService', 'cxf'],
      route: '/blog/articles/webService/interceptor',
      summary: '这个项目的接口，断断续续做了3个月了，从一开始的一脸懵逼，到现在的一知半解。。。',
      key: 10,
    },
    {
      title: 'react(1): 利用rekit脚手架搭建react项目',
      date: '2019-12-31', tag: ['frontEnd', 'react'], route: '/blog/articles/react/rekit',
      summary: '2019年的最后一天。\n' +
        '好久没写博客了，真的是从善如流，从恶如崩。今年最大的收获应该是学习了react吧，虽然才入了个门，不记录一下，可能过完年就忘光了。。。',
      key: 9,
    },
    {
      title: 'web service: spring + cxf 发布web service',
      date: '2019-11-13',
      tag: ['webService', 'cxf'],
      route: '/blog/articles/webService/cxf',
      summary: '今天又差点被web service搞崩溃，起因是在跟客户联调的时候报错：',
      key: 8,
    },
    {
      title: 'docker(2): 又想装一个tomcat了',
      date: '2019-11-11',
      tag: ['server', 'docker'],
      route: '/blog/articles/docker/tomcat',
      summary: '我想在里面装一个tomcat，把我的axis服务部署在上面。。。',
      key: 7,
    },
    {
      title: 'docker(1): 其实就为了装oracle数据库',
      date: '2019-11-08',
      tag: ['server', 'docker'],
      route: '/blog/articles/docker/oracle',
      summary: '现在做个项目，哪儿哪儿都是oracle数据库，都在服务器上，服务器还仅限内网访问，你高兴就好，我不搭个本地数据库就太难了呀。。。',
      key: 6,
    },
    {
      title: 'mysql(1): centos 7的服务器下安装mysql',
      date: '2019-10-22', tag: ['database', 'mysql'], route: '/blog/articles/database/mysql',
      summary: '好久都没用mysql了，赶紧肥来看看。。。',
      key: 5,
    },
    {
      title: 'ssh免密登录',
      date: '2019-10-21', tag: ['linux', 'ssh'], route: '/blog/articles/linux/ssh',
      summary: '大清早，先偷会儿懒，把昨天弄好的ssh免密钥登录记录一哈，免得过两天忘记了。。。。',
      key: 4,
    },
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
      title: 'nginx(1): 搭建以及项目部署和转发',
      date: '2019-10-17', tag: ['nginx', 'server'], route: '/blog/articles/nginx',
      summary: '那些年我用nginx做过的事。。。',
      recommended: false,
      key: 1,
    },
  ],
  postsToDisplay: [],
  postsQueried: [],
  current: 1,

  sentencesCurrent: sentencesCurrent,
  sentencesToDisplay: sentencesToDisplay,
  sentences: sentences,
  sentencesSize: sentencesSize,

  images: images,
  imageRoutes: imageRoutes,
  imageIndex: imageIndex,

  international: {
    'blog': '首页',
    'javaScript': 'javaScript',
    'database': '数据库',
    'linux': 'linux',
    'promote': '声明提升',
    'server': '服务端',
    'array': '数组',
    'about': '关于',
    'fLinks': '友链',
    'articles': '文章',
    'frontEnd': '前端',
    'java': 'java',
    'git': '版本管理',
    'interview': '面试',
  },

  fontSize: 14,
  texts: texts,
  animate: animate,
  visible: false, // 抽屉是否可见
  dayNightColor: {},
  drawer: false,
  mode: 'day',
};

export default initialState;
