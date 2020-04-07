// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  Layout,
  Articles,
  Promote,
  DockerA,
  DockerB,
  Array,
  WebServiceA,
  WebServiceB,
  NginxA,
  OracleA,
  SecureShellA,
  MysqlA,
  SpringA,
  CssA,
  CssB,
  ReactA,
  Ntfs,
  LinuxA,
  LinuxB,
  GitA,
  About,
  FLinks,
  Maintain,
  ScrollBanner,
  ArticlesList,
} from './';
import HomePage from './HomePage/HomePage';
import { PageNotFound } from '../common';

export default {
  path: 'blog',
  name: 'Blog',
  component: Layout,
  childRoutes: [
    { path: '/', name: 'homePage', component: HomePage, isIndex: true },
    {
      path: 'articles', name: 'articles', component: Articles, isIndex: false,
      childRoutes: [
        { path: '/', name: 'article', component: ArticlesList, isIndex: true },

        { path: 'javaScript/promote', name: 'promote', component: Promote, isIndex: false },
        { path: 'javaScript/array', name: 'array', component: Array, isIndex: false },

        { path: 'css/fontAwesome', name: 'css', component: CssB, isIndex: false },
        { path: 'css/img-center', name: 'css', component: CssA, isIndex: false },

        { path: 'linux/commands', name: 'linux', component: LinuxB, isIndex: false },
        { path: 'linux/vi', name: 'linux', component: LinuxA, isIndex: false },

        { path: 'docker/tomcat', name: 'docker', component: DockerB, isIndex: false },
        { path: 'docker/oracle', name: 'docker', component: DockerA, isIndex: false },

        { path: 'react/rekit', name: 'react', component: ReactA, isIndex: false },

        { path: 'git', name: 'git', component: GitA, isIndex: false },

        { path: 'webService/interceptor', name: 'webService', component: WebServiceB, isIndex: false },
        { path: 'webService/cxf', name: 'webService', component: WebServiceA, isIndex: false },

        { path: 'java/spring/propagation', name: 'spring', component: SpringA, isIndex: false },

        { path: 'scroll', name: 'scroll', component: ScrollBanner, isIndex: false },

        { path: 'mac/ntfs', name: 'ntfs', component: Ntfs, isIndex: false },

        { path: 'database/mysql', name: 'mysql', component: MysqlA, isIndex: false },
        { path: 'nginx', name: 'nginx', component: NginxA, isIndex: false },
        { path: 'database/oracle', name: 'oracle', component: OracleA, isIndex: false },
        { path: 'linux/ssh', name: 'ssh', component: SecureShellA, isIndex: false },
        { path: '*', name: 'Page not found', component: PageNotFound },
      ],
    },
    { path: 'about', name: 'about', component: About, isIndex: false },
    { path: 'fLinks', name: 'links', component: FLinks, isIndex: false },
    { path: 'maintain', name: 'maintain', component: Maintain, isIndex: false },
    // 链接到HomePage的路由 待优化 TODO
    { path: 'server/docker', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'docker', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'javaScript', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'linux', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'database', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'server', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'webService', name: 'homePage', component: HomePage, isIndex: false },

    { path: '*', name: 'Page not found', component: PageNotFound },
  ],
};
