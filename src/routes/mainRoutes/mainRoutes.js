import { lazy } from 'react';


export const guestRoutes = [
  {
    exact: true,
    path: '/',
    name: 'home',
    component: lazy(() => import('../../views/home/Home')),
  },
  {
    redirectRoute: true,
    name: 'home',
    path: '/'
  }
];
