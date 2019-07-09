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
      document.body.appendChild(script);

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


