import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from "../components/NotFound";
import WhatIs from "../views/WhatIs";
import ChatBot from "../views/ChatBot";
import QCM from "../views/QCM";
import Admin from "../views/Admin";







Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'STOP Cyber Harcèlement',
    }
  },
  {
    path: '/cyber-harcelement-definition',
    name: 'WhatIs',
    component: WhatIs,
    meta: {
      title: "Qu'est-ce que le Cyber Harcèlement",
    }
  },
  {
    path: '/Ouuka',
    name: 'Ouuka',
    component: ChatBot,
    meta: {
      title: "Discutons-ensembles",
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {
      title: "Administration",
    }
  },

  {
    path: '/QCM',
    name: 'QCM',
    component: QCM,
    meta: {
      title: "Jouons-ensembles",
    }
  },

  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '404 - Erreur',
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
// ...

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  }).forEach(tag => document.head.appendChild(tag));

  if (!to.matched.length) {
    next('/NotFound');
  } else {
    next();
  }

});

// ...