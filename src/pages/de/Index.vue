<template>
  <Layout :hideHeader="true">
    <main class="main">
      <div v-html="$page.intro.edges[0].node.content"></div>
      <magic-contact />
      <section v-if="$page.blogPost.edges.length">
        <h2>Blog</h2>
        <article class="clickable" v-for="post in $page.blogPost.edges" v-bind:key="post.id">
          <h3>{{ post.node.title }}</h3>
          <!-- <small>{{ post.node.date | date }}</small> -->
          {{post.node.excerpt}}
          <g-link :to="post.node.path">Lesen</g-link>
        </article>
        <p v-if="$page.blogPost.edges.length >= 3">
          Zum
          <g-link to="/de/blog/">Archiv</g-link>
        </p>
      </section>
    </main>

    <aside class="aside">
      <article v-for="aside in $page.aside.edges" v-bind:key="aside.id" v-html="aside.node.content"></article>
      <div class="h-card" style="display:none">
        <a class="p-name u-url" href="https://m-k.io">Manuel K</a>
        <span class="p-locality">Berlin</span>
        <span class="p-country-name">Germany</span>
      </div>
    </aside>
  </Layout>
</template>

<page-query>
query Homepage {
  intro: allInformation(filter:{type: {eq: "intro"}}) {
    edges {
      node {
        title
        path
        content
      }
    }
  }
  aside: allInformation(filter:{type: {eq: "aside"}}) {
    edges {
      node {
        title
        path
        content
      }
    }
  }

  blogPost: allBlogPost(perPage: 3) {
    edges {
      node {
        title
        path
        date
        excerpt
      }
    }
  }
  learning: allLearning {
    edges {
      node {
        title
        date
        path
        url
      }
    }
  }
}

</page-query>

<script>
import moment from "moment";
import MagicContact from "~/components/MagicContact.vue";

export default {
  components: {
    MagicContact
  },
  metaInfo: {
    title: "Startseite"
  },
  filters: {
    date: function(value) {
      if (!value) return "";
      return moment(value).format("DD.MM.YYYY");
    }
  }
};
</script>
