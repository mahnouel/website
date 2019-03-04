<template>
  <Layout>
    <main>
      <h1 class="visually-hidden">Manuel K. | Startseite</h1>
      <p>
        Ich freue mich Sie an dieser Stelle herzlich zu begrüßen. Diese Seite soll Ihnen ermöglichen sich ein Bild von mir zu machen.
        Außerdem möchte ich dies als Plattform nutzen, um neu Erlerntes zu dokumentieren und Ihnen
        interessante Inhalte im Bereich des Webdevelopments anzubieten.
      </p>
      <article class="card">
        <h2>Writing</h2>
        <p>Blabla</p>
        <ul v-for="post in $page.posts.edges" v-bind:key="post.id">
          <li>
            <g-link :to="post.node.path">{{ post.node.title }}</g-link>
          </li>
        </ul>
      </article>
      <article
        class="card"
        v-for="content in $page.contents.edges"
        v-bind:key="content.id"
        v-html="content.node.content"
      ></article>
    </main>

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
query Content {
  contents: allContent {
    edges {
      node {
        title
        path
        content
      }
    }
  }
  posts: allPost {
    edges {
      node {
        title
        path
      }
    }
  }
}

</page-query>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
h2 {
  margin-top: 1rem;
  font-size: 1.75rem;
}
.card {
}
.card + .card {
  margin-top: 2rem;
}
p,
ul,
h2 {
  margin-bottom: 0;
}
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0.5rem;
}
p {
  margin-top: 0.5rem;
}
a {
  text-decoration: none;
}
</style>
