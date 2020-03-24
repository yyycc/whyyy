// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import { LeaveConfirm }
  from './';

export default {
  path: 'common',
  name: 'Common',
  childRoutes: [
    { path: 'leave', name: 'leave', component: LeaveConfirm, isIndex: false },
  ],
};
