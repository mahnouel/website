// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import TextLayout from "~/layouts/Text.vue";
import "~/assets/style/index.styl";

function addPing() {
  const script = document.createElement("script");
  script.setAttribute("src", "https://ping.m-k.io/app.js");
  document.body.appendChild(script);

  const noscript = document.createElement("noscript");
  const img = document.createElement("img");
  img.setAttribute("src", "https://ping.m-k.io/image.gif");
  noscript.appendChild(img);
  document.body.appendChild(noscript);
}

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  router.addRoutes([{ path: "/", redirect: "/de/" }]);
  Vue.component("Layout", DefaultLayout);
  Vue.component("TextLayout", TextLayout);
  addPing();
}
