import { lazy } from 'react';
import Layout from '../../components/Essentials/Layout';
const DefaultRoute= '/'

const ExistingRoutes = [
  {
    exact: true,
    path: '/login',
    component: lazy(() => import('../../pages/Login')),
  },
  {
    exact: true, 
    path: '/',
    component: lazy(() => import('../../pages/Home')),
    layout: Layout,
    hasSidebar: true, 
    private: true,
  },
  {
    exact: true, 
    path: '/test',
    component: lazy(() => import('../../pages/Login')),
    layout: Layout,
    hasSidebar: true,
    private: true,
  },
  {
    path: '*',
    component: lazy(() => import('../../components/Essentials/NotFound')),
  },

]
export { ExistingRoutes, DefaultRoute}