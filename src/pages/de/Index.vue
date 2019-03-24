<template>
  <Layout :hideHeader="true">
    <main class="main">
      <div v-html="$page.intro.edges[0].node.content"></div>
      <magic-contact/>
      <section v-if="$page.blogPost.edges.length">
        <h2>Blog</h2>
        <article class="clickable" v-for="post in $page.blogPost.edges" v-bind:key="post.id">
          <h3>{{ post.node.title }}</h3>
          <small>{{ post.node.date | date }}</small>
          {{post.node.excerpt}}
          <g-link :to="post.node.path">Lesen</g-link>
        </article>
        <p v-if="$page.blogPost.edges.length >= 3">Zum
          <g-link to="/de/blog/">Archiv</g-link>
        </p>
      </section>
      <!--section v-if="$page.learning.edges.length">
        <h2>TIL</h2>
        <ul>
          <li class="clickable" v-for="learning in $page.learning.edges" v-bind:key="learning.id">
            <g-link
              :to="learning.node.path"
              v-if="!learning.node.url"
            >{{ learning.node.date | date }}</g-link>
            <a
              :href="learning.node.url"
              v-if="learning.node.url"
              target="_blank"
            >{{ learning.node.date | date }}</a>
            {{ learning.node.title }}
          </li>
        </ul>
      </section-->
    </main>

    <aside class="aside">
      <article v-for="aside in $page.aside.edges" v-bind:key="aside.id" v-html="aside.node.content"></article>
    </aside>

    <!--     
     Learn how to use images here: https://gridsome.org/docs/images 
    <g-image alt="Example image" src="~/favicon.png" width="135"/>

    <h1>Hello, world!</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>-->
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
