// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  Layout, Promote, DockerA, DockerB, Array, WebServiceA, WebServiceB,
} from './';
import HomePage from './Body/Index/HomePage';

export default {
  path: 'blog',
  name: 'Blog',
  component: Layout,
  childRoutes: [
    { path: 'javaScript/2', name: 'promote', component: Promote, isIndex: false },
    { path: 'javaScript/1', name: 'array', component: Array, isIndex: false },

    { path: 'webService/2', name: 'webServiceB', component: WebServiceB, isIndex: false },
    { path: 'webService/1', name: 'webServiceA', component: WebServiceA, isIndex: false },

    // 链接到HomePage的路由 待优化 TODO
    { path: '/', name: 'homePage', component: HomePage, isIndex: true },
    { path: 'server/docker', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'docker', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'javaScript', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'linux', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'database', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'server', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'webService', name: 'homePage', component: HomePage, isIndex: false },

    { path: 'server/docker/dockerA', name: 'dockerA', component: DockerA, isIndex: false, title: 'docker' },
    { path: 'server/docker/dockerB', name: 'dockerB', component: DockerB, isIndex: false, title: 'docker' },
  ],
};
