// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  CssA, CssC, Triangle, Float,
  Layout,
} from './';

export default {
  path: 'css',
  name: 'Css',
  component: Layout,
  childRoutes: [
    { path: '/', name: 'Default page', component: DefaultPage, isIndex: true },

    { path: 'center', name: 'center', component: CssA, isIndex: false },
    { path: 'half', name: 'half', component: CssC, isIndex: false },
    { path: 'triangle', name: 'triangle', component: Triangle, isIndex: false },
    { path: 'float', name: 'float', component: Float, isIndex: false },
  ],
};
