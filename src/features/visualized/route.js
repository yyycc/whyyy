// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  Chart,
} from './';

export default {
  path: 'vs',
  name: 'Visualized',
  childRoutes: [
    { path: '/', name: 'Default page', component: DefaultPage, isIndex: true },

    { path: 'chart', name: 'chart', component: Chart, isIndex: false },
  ],
};
