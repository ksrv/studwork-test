import meta from './meta';

import Layout from '@/layout/base';
import Error404 from '@/views/Error404';
import Home from '@/views/Home';
import Item from '@/views/Item';


export default [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: { name: 'Home' },
    children: [
      {
        path: 'starships/:page?',
        name: 'Home',
        component: Home,
        props: true,
        meta: meta.Home,
      },
      {
        path: 'starship/:id',
        name: 'Item',
        component: Item,
        props: true,
        meta: meta.Item,
      },
    ],
  },
  {
    path: '*',
    name: 'Error404',
    component: Error404,
  },
];
