// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  Layout, Promote, DockerA, DockerB
} from './';
import HomePage from './Body/Index/HomePage';

export default {
  path: 'blog',
  name: 'Blog',
  component: Layout,
  childRoutes: [
    { path: 'javaScript/promote', name: 'promote', component: Promote, isIndex: false },
    { path: '/', name: 'homePage', component: HomePage, isIndex: true },
    { path: 'server/dockerA', name: 'dockerA', component: DockerA, isIndex: false },
    { path: 'server/dockerB', name: 'dockerB', component: DockerB, isIndex: false },
  ],
};
