<template>
  <Layout>
    <main class="main">
      <div v-html="$page.about.edges[0].node.content"></div>
    </main>
  </Layout>
</template>

<page-query>
query About {
  about: allInformation(filter:{type: {eq: "about"}}) {
    edges {
      node {
        title
        path
        content
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
