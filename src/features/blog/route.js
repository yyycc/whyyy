// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  Layout,
  HomePage,
  Articles,
  ArticlesList,
  Topic,
  DockerA, DockerB, DockerC,
  Array, Color, Promote, RegExp, Number, AsyncSugar, Proxy, Scope,
  WebServiceA, WebServiceB,
  NginxA,
  OracleA, OracleB,
  SecureShellA,
  MysqlA,
  SpringA,
  Css, CssA, CssB, CssC, FixDiv,
  ReactA, ReactB, PropTypes,
  Ntfs,
  LinuxA, LinuxB, LinuxC,
  GitA, GitB, GitC,
  About, FLinks, Maintain, Sentences, Online, CollectionsDetail,
  ScrollBanner,
  Canvas,
  Interview, ViewOne, ViewTwo, ViewFour, InterviewFive, InterviewSix, ViewThree, ViewAll,
  NodeA, Pm2, File,
  FileManage,
} from './';
import { PageNotFound } from '../common';

export default {
  path: 'blog',
  name: 'Blog',
  component: Layout,
  childRoutes: [
    { path: '/', name: 'homePage', component: HomePage, isIndex: true },
    { path: 'canvas', name: 'canvas', component: Canvas },
    { path: 'file', name: 'file', component: FileManage },
    {
      path: 'articles', name: 'articles', component: Articles, isIndex: false,
      childRoutes: [
        { path: '/', name: 'article', component: ArticlesList, isIndex: true },

        { path: 'javaScript/promote', name: 'promote', component: Promote, isIndex: false },
        { path: 'javaScript/array', name: 'array', component: Array, isIndex: false },
        { path: 'javaScript/color', name: 'color', component: Color, isIndex: false },
        { path: 'javaScript/regExp', name: 'regExp', component: RegExp, isIndex: false },
        { path: 'javaScript/number', name: 'number', component: Number, isIndex: false },
        { path: 'javaScript/async', name: 'async', component: AsyncSugar, isIndex: false },
        { path: 'javaScript/proxy', name: 'proxy', component: Proxy, isIndex: false },
        { path: 'javaScript/scope', name: 'scope', component: Scope, isIndex: false },

        { path: 'node/A', name: 'node', component: NodeA, isIndex: false },
        { path: 'node/pm2', name: 'pm2', component: Pm2, isIndex: false },
        { path: 'node/file', name: 'file', component: File, isIndex: false },

        { path: 'interview', name: 'interview', component: Interview, isIndex: false },
        { path: 'interview/one', name: 'interview', component: ViewOne, isIndex: false },
        { path: 'interview/two', name: 'interview', component: ViewTwo, isIndex: false },
        { path: 'interview/three', name: 'interview', component: ViewThree, isIndex: false },
        { path: 'interview/four', name: 'interview', component: ViewFour, isIndex: false },
        { path: 'interview/five', name: 'interview', component: InterviewFive, isIndex: false },
        { path: 'interview/six', name: 'interview', component: InterviewSix, isIndex: false },
        { path: 'interview/all', name: 'interview', component: ViewAll, isIndex: false },

        { path: 'css', name: 'css', component: Css, isIndex: false },
        { path: 'css/fontAwesome', name: 'css', component: CssB, isIndex: false },
        { path: 'css/img-center', name: 'css', component: CssA, isIndex: false },
        { path: 'css/div-fix', name: 'css', component: FixDiv, isIndex: false },
        { path: 'css/css', name: 'css', component: CssC, isIndex: false },
        { path: 'css/scroll', name: 'scroll', component: ScrollBanner, isIndex: false },

        { path: 'linux/commands', name: 'linux', component: LinuxB, isIndex: false },
        { path: 'linux/vi', name: 'linux', component: LinuxA, isIndex: false },
        { path: 'linux/file', name: 'linux', component: LinuxC, isIndex: false },
        { path: 'linux/ssh', name: 'ssh', component: SecureShellA, isIndex: false },

        { path: 'docker/tomcat', name: 'docker', component: DockerB, isIndex: false },
        { path: 'docker/oracle', name: 'docker', component: DockerA, isIndex: false },
        { path: 'docker/off', name: 'docker', component: DockerC, isIndex: false },

        { path: 'react/rekit', name: 'react', component: ReactA, isIndex: false },
        { path: 'react/redux', name: 'react', component: ReactB, isIndex: false },
        { path: 'react/propTypes', name: 'react', component: PropTypes, isIndex: false },

        { path: 'git/config', name: 'git', component: GitA, isIndex: false },
        { path: 'git/commands', name: 'git', component: GitB, isIndex: false },
        { path: 'git/commands_more', name: 'git', component: GitC, isIndex: false },

        { path: 'webService/interceptor', name: 'webService', component: WebServiceB, isIndex: false },
        { path: 'webService/cxf', name: 'webService', component: WebServiceA, isIndex: false },

        { path: 'java/spring/propagation', name: 'spring', component: SpringA, isIndex: false },

        { path: 'mac/ntfs', name: 'ntfs', component: Ntfs, isIndex: false },

        { path: 'nginx/A', name: 'nginx', component: NginxA, isIndex: false },

        { path: 'database/mysql', name: 'mysql', component: MysqlA, isIndex: false },
        { path: 'database/oracle', name: 'oracle', component: OracleA, isIndex: false },
        { path: 'database/oracle-service', name: 'oracle', component: OracleB, isIndex: false },

        { path: '*', name: 'other topics', component: Topic },

      ],
    },
    { path: 'about', name: 'about', component: About, isIndex: false },
    { path: 'collections', name: 'collections', component: CollectionsDetail, isIndex: false },
    { path: 'fLinks', name: 'links', component: FLinks, isIndex: false },
    { path: 'maintain', name: 'maintain', component: Maintain, isIndex: false },
    { path: 'online', name: 'online', component: Online, isIndex: false },
    { path: 'sentences', name: 'sentences', component: Sentences, isIndex: false },
    // 链接到HomePage的路由 待优化 TODO
    { path: 'server/docker', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'docker', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'javaScript', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'linux', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'database', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'server', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'webService', name: 'homePage', component: HomePage, isIndex: false },

    { path: '*', name: 'Page not found', component: PageNotFound }, //blog/*
  ],
};
