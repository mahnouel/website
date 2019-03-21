<template>
  <TextLayout :jumpmarks="$page.about.edges[0].node.jumpmarks">
    <main class="main">
      <div v-html="$page.about.edges[0].node.content" class="text"></div>
    </main>
  </TextLayout>
</template>

<page-query>
query About {
  about: allInformation(filter:{type: {eq: "about"}}) {
    edges {
      node {
        title
        path
        content
        jumpmarks {
          name
          href
        }
      }
    }
  }
}

</page-query>

<script>
import moment from "moment";

export default {
  metaInfo: {
    title: "Entwickler"
  },
  filters: {
    date: function(value) {
      if (!value) return "";
      return moment(value).format("DD.MM.YYYY");
    }
  }
};
</script>

<style lang="stylus">
.text {
  hyphens: auto;

  p {
    margin-top: 0.5em;
  }
}

a[href^='#'] {
  background: transparent;
  border-radius: 0;

  sup {
    line-height: 1;
  }

  &:not([id]) {
    padding: 0;
  }

  &[id] {
    background-color: lightblue;
    font-variant-numeric: tabular-nums;
  }
}
</style>
