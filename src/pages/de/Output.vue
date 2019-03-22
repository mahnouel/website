<template>
  <Layout>
    <main class="main">
      <h1>Output Archiv 🕵️‍♀️</h1>
      <article class="clickable" v-for="blogPost in $page.blogPost.edges" v-bind:key="blogPost.id">
        <h3>{{ blogPost.node.title }}</h3>
        <small>{{ blogPost.node.date | date }}</small>
        {{blogPost.node.excerpt}}
        <g-link :to="blogPost.node.path">Lesen</g-link>
      </article>
    </main>
  </Layout>
</template>

<page-query>
query OutputPage {
  blogPost: allBlogPost {
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
