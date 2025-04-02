/** @format */

import Frame from '@pages/partials/Frame'
import NotFound from '@pages/partials/NotFound'
import Main from '@pages/Main'
import About from '@pages/About'

export default [
  {
    path: '/',
    meta: {
      title: window.$appTitle
    },
    component: Main
  },
  {
    path: '/about-arya',
    meta: {
      title: `关于 | ${window.$appTitle}`
    },
    component: Frame,
    children: [
      {
        path: '',
        meta: {
          title: `关于 | ${window.$appTitle}`
        },
        component: About
      }
    ]
  },
  {
    path: '/index',
    redirect: '/'
  },
  {
    path: '/:pathMatch(.*)*',
    meta: {
      title: 'Page Not Found'
    },
    component: NotFound
  }
]
