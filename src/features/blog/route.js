// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  Layout,
} from './';

export default {
  path: 'blog',
  name: 'Blog',
  component: Layout,
  childRoutes: [
    // { path: 'default-page', name: 'Default page', component: , isIndex: true },
  ],
};
