<template>
  <div class="layout">
    <magic-header v-if="!hideHeader" :metaData="$static.metaData" />
    <slot />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import MagicHeader from "~/components/MagicHeader.vue";

export default {
  components: {
    MagicHeader
  },
  mounted() {
    (() => {
      const script = document.createElement("script");
      script.setAttribute("src", "https://ping.m-k.io/app.js");
      script.setAttribute("async", true);
      script.setAttribute("defer", true);
      document.body.appendChild(script);
      
      const linkWebmention = document.createElement("link");
      linkWebmention.setAttribute("rel", "webmention");
      linkWebmention.setAttribute("href", "https://webmention.io/m-k.io_de_/webmention");
      document.head.appendChild(linkWebmention);

      const linkPingback = document.createElement("link");
      linkPingback.setAttribute("rel", "pingback");
      linkPingback.setAttribute("href", "https://webmention.io/m-k.io_de_/xmlrpc");
      document.head.appendChild(linkPingback);

      const noscript = document.createElement("noscript");
      const img = document.createElement("img");
      img.setAttribute("src", "https://ping.m-k.io/image.gif");
      noscript.appendChild(img);
      document.body.appendChild(noscript);
    })();
  },
  props: ["hideHeader"]
};
</script>


