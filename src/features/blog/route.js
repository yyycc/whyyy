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
  ScrollBanner,
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
      path: 'articles', name: 'homePage', component: Articles, isIndex: false,
      childRoutes: [
        { path: 'javaScript/2', name: 'promote', component: Promote, isIndex: false },
        { path: 'javaScript/1', name: 'array', component: Array, isIndex: false },

        { path: 'css/2', name: 'css', component: CssB, isIndex: false },
        { path: 'css/1', name: 'css', component: CssA, isIndex: false },

        { path: 'linux/1', name: 'linux', component: LinuxA, isIndex: false },
        { path: 'linux/2', name: 'linux', component: LinuxB, isIndex: false },

        { path: 'docker/2', name: 'docker', component: DockerB, isIndex: false },
        { path: 'docker/1', name: 'docker', component: DockerA, isIndex: false },

        { path: 'react/1', name: 'react', component: ReactA, isIndex: false },

        { path: 'git/1', name: 'git', component: GitA, isIndex: false },

        { path: 'webService/2', name: 'webService', component: WebServiceB, isIndex: false },
        { path: 'webService/1', name: 'webService', component: WebServiceA, isIndex: false },

        { path: 'java/spring/1', name: 'spring', component: SpringA, isIndex: false },

        { path: 'scroll/1', name: 'scroll', component: ScrollBanner, isIndex: false },

        { path: 'mac/ntfs/1', name: 'ntfs', component: Ntfs, isIndex: false },

        { path: 'database/mysql/1', name: 'mysql', component: MysqlA, isIndex: false },
        { path: 'nginx/1', name: 'nginx', component: NginxA, isIndex: false },
        { path: 'database/oracle/1', name: 'oracle', component: OracleA, isIndex: false },
        { path: 'linux/ssh/1', name: 'ssh', component: SecureShellA, isIndex: false },
      ],
    },
    { path: 'about', name: 'about', component: About, isIndex: false },
    { path: 'fLinks', name: 'links', component: FLinks, isIndex: false },
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
