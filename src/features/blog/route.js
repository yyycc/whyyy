// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  Layout, JavaScript
} from './';
import HomePage from './Body/Index/HomePage';

export default {
  path: 'blog',
  name: 'Blog',
  component: Layout,
  childRoutes: [
    { path: 'js/javaScript', name: 'javaScript', component: JavaScript, isIndex: false },
    { path: 'homePage', name: 'homePage', component: HomePage, isIndex: true },
  ],
};
