// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  LeaveConfirm,
  UsersManage,
  Blogs,
}
  from './';

export default {
  path: 'common',
  name: 'Common',
  childRoutes: [
    { path: 'leave', name: 'leave', component: LeaveConfirm, isIndex: false },
    { path: 'users', name: 'users', component: UsersManage, isIndex: false },
    { path: 'blogs', name: 'blogs', component: Blogs, isIndex: false },
  ],
};
