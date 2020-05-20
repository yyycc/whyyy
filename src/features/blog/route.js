// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  Layout,
  Articles,
  DockerA, DockerB,
  Array, Color, Promote,
  WebServiceA, WebServiceB,
  NginxA,
  OracleA, OracleB,
  SecureShellA,
  MysqlA,
  SpringA,
  Css, CssA, CssB, CssC, FixDiv,
  ReactA,
  Ntfs,
  LinuxA, LinuxB,
  GitA, GitB,
  About, FLinks, Maintain, Sentences, Online,
  ScrollBanner,
  ArticlesList,
  HomePage,
  Interview, ViewOne, ViewTwo, ViewFour, ViewThree, ViewAll,
  Canvas,
} from './';
import { PageNotFound } from '../common';

export default {
  path: 'blog',
  name: 'Blog',
  component: Layout,
  childRoutes: [
    { path: '/', name: 'homePage', component: HomePage, isIndex: true },
    { path: 'canvas', name: 'canvas', component: Canvas },
    {
      path: 'articles', name: 'articles', component: Articles, isIndex: false,
      childRoutes: [
        { path: '/', name: 'article', component: ArticlesList, isIndex: true },

        { path: 'javaScript/promote', name: 'promote', component: Promote, isIndex: false },
        { path: 'javaScript/array', name: 'array', component: Array, isIndex: false },
        { path: 'javaScript/color', name: 'color', component: Color, isIndex: false },

        { path: 'interview', name: 'interview', component: Interview, isIndex: false },
        { path: 'interview/one', name: 'interview', component: ViewOne, isIndex: false },
        { path: 'interview/two', name: 'interview', component: ViewTwo, isIndex: false },
        { path: 'interview/three', name: 'interview', component: ViewThree, isIndex: false },
        { path: 'interview/four', name: 'interview', component: ViewFour, isIndex: false },
        { path: 'interview/all', name: 'interview', component: ViewAll, isIndex: false },

        { path: 'css', name: 'css', component: Css, isIndex: false },
        { path: 'css/fontAwesome', name: 'css', component: CssB, isIndex: false },
        { path: 'css/img-center', name: 'css', component: CssA, isIndex: false },
        { path: 'css/div-fix', name: 'css', component: FixDiv, isIndex: false },
        { path: 'css/css', name: 'css', component: CssC, isIndex: false },
        { path: 'css/scroll', name: 'scroll', component: ScrollBanner, isIndex: false },

        { path: 'linux/commands', name: 'linux', component: LinuxB, isIndex: false },
        { path: 'linux/vi', name: 'linux', component: LinuxA, isIndex: false },

        { path: 'docker/tomcat', name: 'docker', component: DockerB, isIndex: false },
        { path: 'docker/oracle', name: 'docker', component: DockerA, isIndex: false },

        { path: 'react/rekit', name: 'react', component: ReactA, isIndex: false },

        { path: 'git/config', name: 'git', component: GitA, isIndex: false },
        { path: 'git/commands', name: 'git', component: GitB, isIndex: false },

        { path: 'webService/interceptor', name: 'webService', component: WebServiceB, isIndex: false },
        { path: 'webService/cxf', name: 'webService', component: WebServiceA, isIndex: false },

        { path: 'java/spring/propagation', name: 'spring', component: SpringA, isIndex: false },

        { path: 'mac/ntfs', name: 'ntfs', component: Ntfs, isIndex: false },

        { path: 'database/mysql', name: 'mysql', component: MysqlA, isIndex: false },
        { path: 'nginx', name: 'nginx', component: NginxA, isIndex: false },
        { path: 'database/oracle', name: 'oracle', component: OracleA, isIndex: false },
        { path: 'database/oracle-service', name: 'oracle', component: OracleB, isIndex: false },
        { path: 'linux/ssh', name: 'ssh', component: SecureShellA, isIndex: false },
        { path: '*', name: 'Page not found', component: ArticlesList },
      ],
    },
    { path: 'about', name: 'about', component: About, isIndex: false },
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
