import { createRouter, createWebHistory } from 'vue-router'

import store from '../store'
import Home from '../views/Home'
import Contact from '../views/Contact'
import About from '../views/About'
import Services from '../views/Services'
import Skills from '../views/Skills'
import Portfolio from '../views/Portfolio'
import Price from '../views/Price'
import Blog from '../views/Blog'
import Post from '../views/Post'
import AddNew from '../views/AddNew'
import VueScrollTo from 'vue-scrollto'
import SkillDetail from '../views/SkillDetail'
import PortfolioDetail from '../views/PortfolioDetail'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'home',
      auth: false
    }
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contact,
    meta: {
      layout: 'main',
      auth: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      layout: 'special',
      auth: false
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
    meta: {
      layout: 'main',
      auth: false
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      layout: 'main',
      auth: false
    }
  },
  {
    path: '/portfolio/:id',
    component: PortfolioDetail,
    props: true,
    meta: {
      layout: 'home',
      auth: false
    }
  },
  {
    path: '/price',
    name: 'Price',
    component: Price,
    meta: {
      layout: 'special',
      auth: true
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/blog/:id',
    name: 'Post',
    component: Post,
    props: true,
    meta: {
      layout: 'home',
      auth: true
    }
  },
  {
    path: '/portfolio/add',
    name: 'AddNew',
    component: AddNew,
    props: true,
    meta: {
      layout: 'home',
      auth: true
    }
  },
  {
    path: '/skills/:id',
    component: SkillDetail,
    props: true,
    meta: {
      layout: 'home',
      auth: false
    }
  },
  {
    path: '/skills/addRub',
    name: 'addRub',
    component: AddNew,
    props: true,
    meta: {
      layout: 'home',
      auth: true
    }
  },
  {
    path: '/skills/addSkill',
    name: 'addSkill',
    component: AddNew,
    props: true,
    meta: {
      layout: 'home',
      auth: true
    }
  },
  {
    path: '/about/addCert',
    name: 'addCert',
    component: AddNew,
    props: true,
    meta: {
      layout: 'home',
      auth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue'),
    meta: {
      layout: 'home',
      auth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
	  console.log(to, from, savedPosition)
	if (savedPosition) {
		return savedPosition
	}
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth
  store.state.isMenu = false

  if (requireAuth && store.getters['auth/isAuthenticated']) {
    next()
  } else if (requireAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth?message=auth')
  } else {
    next()
  }
})

export default router
