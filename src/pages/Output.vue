<template>
  <Layout>
    <main class="main">
      <h1>Output Archiv 🕵️‍♀️</h1>
      <article class="clickable" v-for="output in $page.output.edges" v-bind:key="output.id">
        <h3>{{ output.node.title }}</h3>
        <small>{{ output.node.date | date }}</small>
        {{output.node.excerpt}}
        <g-link :to="output.node.path">Lesen</g-link>
      </article>
    </main>
  </Layout>
</template>

<page-query>
query OutputPage {
  output: allOutput {
    edges {
      node {
        title
        path
        date
        excerpt
      }
    }
  }
}

</page-query>

<script>
import moment from "moment";

export default {
  metaInfo: {
    title: "🏡👨‍💻"
  },
  filters: {
    date: function(value) {
      if (!value) return "";
      return moment(value).format("DD.MM.YYYY");
    }
  }
};
</script>
