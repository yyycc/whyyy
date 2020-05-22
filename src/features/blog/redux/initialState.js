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
  posts: [],
  queryAllBlogs: 'http://localhost:8888/blog/queryAll',
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
  searchVisible: false, //搜索框是否可见
  dayNightColor: {},
  drawer: false,
  mode: 'day',
};

export default initialState;
