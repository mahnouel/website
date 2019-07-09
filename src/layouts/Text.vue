<template>
  <div class="layout">
    <magic-header v-if="!hideHeader" :metaData="$static.metaData" />
    <slot />
    <aside class="aside aside--prefer-above">
      <article v-if="jumpmarks">
        <h2>Schnellzugriff</h2>
        <a
          v-for="jumpmark in jumpmarks"
          :href="jumpmark.href"
          v-bind:key="jumpmark.name"
        >⬇️ {{jumpmark.name}}</a>
      </article>
    </aside>
    <magic-footer />
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
import MagicFooter from "~/components/MagicFooter.vue";

export default {
  components: {
    MagicHeader,
    MagicFooter
  },
  mounted() {
    (() => {
      const script = document.createElement("script");
      script.setAttribute("src", "https://ping.m-k.io/app.js");
      script.setAttribute("async", true);
      script.setAttribute("defer", true);
      script.setAttribute("data-mode", "hash");
      document.body.appendChild(script);

      const noscript = document.createElement("noscript");
      const img = document.createElement("img");
      img.setAttribute("src", "https://ping.m-k.io/image.gif");
      noscript.appendChild(img);
      document.body.appendChild(noscript);
    })();
  },
  props: ["hideHeader", "jumpmarks"]
};
</script>