// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  Layout, Promote, DockerA, DockerB, Array,
} from './';
import HomePage from './Body/Index/HomePage';

export default {
  path: 'blog',
  name: 'Blog',
  component: Layout,
  childRoutes: [
    { path: 'javaScript/promote', name: 'promote', component: Promote, isIndex: false },
    { path: 'javaScript/array', name: 'array', component: Array, isIndex: false },

    // 链接到HomePage的路由 待优化 TODO
    { path: '/', name: 'homePage', component: HomePage, isIndex: true },
    { path: 'server/docker', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'docker', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'javaScript', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'linux', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'database', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'server', name: 'homePage', component: HomePage, isIndex: false },
    { path: 'webService', name: 'homePage', component: HomePage, isIndex: false },

    { path: 'server/docker/dockerA', name: 'dockerA', component: DockerA, isIndex: false },
    { path: 'server/docker/dockerB', name: 'dockerB', component: DockerB, isIndex: false },
  ],
};
