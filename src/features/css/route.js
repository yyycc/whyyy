// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  CssA,
  Layout,
} from './';

export default {
  path: 'css',
  name: 'Css',
  component: Layout,
  childRoutes: [
    { path: '/', name: 'Default page', component: DefaultPage, isIndex: true },

    { path: 'center', name: 'center', component: CssA, isIndex: false },
  ],
};
