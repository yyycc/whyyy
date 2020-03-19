// Initial state is the place you define all initial values for the Redux store of the feature.
// In the 'standard' way, initialState is defined in reducers: http://redux.js.org/docs/basics/Reducers.html
// But when application grows, there will be multiple reducers files, it's not intuitive what data is managed by the whole store.
// So Rekit extracts the initial state definition into a separate module so that you can have
// a quick view about what data is used for the feature, at any time.

// NOTE: initialState constant is necessary so that Rekit could auto add initial state when creating async actions.
// import Luffy from '../../../images/index.png';
// import javaScript from '../../../images/index-js.png';
import Luffy from '../../../images/index.png';
import javaScript from '../../../images/index-js.png';
import linux from '../../../images/index-linux.jpg';

const initialState = {
  h2: {
    javaScript: [
      ['1. 初始化', '2. 实例方法'],
      ['1. 运行结果', '2. 提升'],
    ],
    docker: [
      ['1. ', '2. '],
      ['1. ', '2. '],
    ],
  },
  title: 'whyyy his blog',
  titles: [{ title: 'javaScript', name: 'javaScript', menu: [] },
    { title: 'database', name: '数据库', menu: [] },
    { title: 'webService', name: 'webService', menu: [] },
    { title: 'linux', name: 'linux', menu: [] },
    { title: 'server', name: '服务端', menu: [] }],
  tabFixed: false,
  top: 0, // 面包屑的margin-top
  tags: ['javaScript', 'linux', 'webService', 'database', 'spring', 'service', 'docker', 'git'],
  posts: [
    {
      title: 'font-awesome',
      date: '2020-03-19', tag: ['frontEnd', 'css'], route: '/blog/css',
      summary: '一个非常好用的icon库。。。',
      order: 2,
    },
    {
      title: '如何让img居中显示',
      date: '2020-03-18', tag: ['frontEnd', 'css'], route: '/blog/css',
      summary: '今天画blog的时候遇见了一个小问题，记录一下。。。',
      order: 1,
    },
    {
      title: 'Paragon NTFS For Mac',
      date: '2020-03-17', tag: ['mac'], route: '/blog/mac/ntfs',
      summary: 'MacBook连移动硬盘发现文件复制不进去，拖也拖不进去。。。',
    },
    {
      title: 'javaScript(2): 变量、函数的声明提升',
      date: '2020-03-09', tag: ['frontEnd', 'javaScript'], route: '/blog/javaScript',
      summary: '搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。',
      order: 2,
    },
    {
      title: 'javaScript(1): 数组',
      date: '2020-03-02', tag: ['frontEnd', 'javaScript', 'array'], route: '/blog/javaScript',
      summary: 'js的文档也看了好多遍了，怎么每次碰到数组的操作，还是要bd。。。',
      order: 1,
    },
    {
      title: 'linux 指令 -- 常用指令',
      date: '2020-01-13', tag: ['linux'], route: '/blog/linux/command',
      summary: '记录一下linux中常用的指令',
    },
    {
      title: 'linux 指令 -- 常用指令扩展(vi、cp、tail)',
      date: '2020-01-07', tag: ['linux'], route: '/blog/linux/command',
      summary: 'linux指令万万千，用一个百度一个，百度一个忘一个。。。',
    },
    {
      title: 'spring 事务配置',
      date: '2020-01-07', tag: ['java', 'spring'], route: '/blog/java/spring',
      summary: 'service中存在众多业务逻辑，往往一个方法中就涉及多个增删改，当一个ddl报错，我们肯定希望之前执行的回滚，之后的不再执行，\n' +
        '这样才能保证事务的一致性。不然我只记录账上少了100，没有记录这个100的去处，账就崩了',
    },
    {
      title: 'web service -- spring + cxf 发布web service(2)',
      date: '2020-01-03',
      tag: ['webService', 'cxf'],
      route: '/blog/webService/cxf',
      summary: '这个项目的接口，断断续续做了3个月了，从一开始的一脸懵逼，到现在的一知半解。。。',
    },
    {
      title: 'react',
      date: '2019-12-31', tag: ['react'], route: '/blog/frontEnd/react',
      summary: '2019年的最后一天。\n' +
        '好久没写博客了，真的是从善如流，从恶如崩。\n' +
        '今年最大的收获应该是学习了react吧，虽然才入了个门，不记录一下，可能过完年就忘光了。。。',
    },
    {
      title: 'web service -- spring + cxf 发布web service(1)',
      date: '2019-11-13',
      tag: ['webService', 'cxf'],
      route: '/blog/webService/cxf',
      summary: '今天又差点被web service搞崩溃，起因是在跟客户联调的时候报错：',
    },
    {
      title: 'docker(2): 又想装一个tomcat了',
      date: '2019-11-11',
      tag: ['server', 'docker'],
      route: '/blog/server/docker',
      summary: '我想在里面装一个tomcat，把我的axis服务部署在上面。。。',
      order: 2,
    },
    {
      title: 'docker(1): 其实就为了装oracle数据库',
      date: '2019-11-08',
      tag: ['server', 'docker'],
      route: '/blog/server/docker',
      summary: '现在做个项目，哪儿哪儿都是oracle数据库，都在服务器上，服务器还仅限内网访问，你高兴就好，我不搭个本地数据库就太难了呀。。。',
      order: 1,
    },
    {
      title: 'mysql安装',
      date: '2019-10-22', tag: ['database', 'mysql'], route: '/blog/database/mysql',
      summary: '好久都没用mysql了，赶紧肥来看看。。。',
    },
    {
      title: 'ssh免密钥登录',
      date: '2019-10-21', tag: ['linux', 'ssh'], route: '/blog/linux/ssh',
      summary: '大清早，先偷会儿懒，把昨天弄好的ssh免密钥登录记录一哈，免得过两天忘记了。。。。',
    },
    {
      title: 'git',
      date: '2019-10-18', tag: ['git'], route: '/blog/git/git',
      summary: 'git status git status git status git status git status。。。',
    },
    {
      title: 'oracle',
      date: '2019-10-17', tag: ['database', 'oracle'], route: '/blog/database/oracle',
      summary: 'oracle 那些我记不住的东西。。。',
    },
    {
      title: 'nginx',
      date: '2019-10-17', tag: ['nginx', 'server'], route: '/blog/server/nginx',
      summary: '那些年我用nginx做过的事。。。',
    },
  ],
  postsToDisplay: [],
  postsQueried: [],
  current: 1,
  images: [Luffy, linux, javaScript],
  imageRoutes: ['luffy', 'linux', 'javaScript'],
  index: 0, // 当前图片序号
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
  },
  fontSize: 14,
};

export default initialState;
