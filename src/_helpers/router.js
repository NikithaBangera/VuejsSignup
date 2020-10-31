import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage'
import LoginPage from '../login/LoginPage'
import ForgotPassword from '../login/ForgotPassword'
import RegisterPage from '../register/RegisterPage'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { 
      path: '/',
      name: 'homePage', 
      component: HomePage
    },
    { 
      path: '/login',
      name: 'login', 
      component: LoginPage
    },
    { 
      path: '/register', 
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword
    },

    // otherwise redirect to home
    { 
      path: '*', 
      redirect: '/'
    }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register', '/forgot-password'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})