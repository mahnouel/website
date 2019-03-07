// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component

  // [todo] Do something about XY
  const foobar = ({ foo, bar }) => {
    return foo + bar;
  };

  router.addRoutes([{ path: "/", redirect: "/de/" }]);
  Vue.component("Layout", DefaultLayout);
}
