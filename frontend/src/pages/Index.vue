<template>
  <Layout :hideHeader="true">
    <main>
      <h1>Ich bin Manuel.</h1>
      <p>Um ganz trocken zu beginnen: Ich freue mich sehr Sie an dieser Stelle herzlichst zu begrüßen.</p>
      <p>Mit dieser Seite möchte ich Sie über mich informieren, von mir überzeugen, und gleichzeitig Erlerntes dokumentieren.
        <br>Zusätzlich werden Sie hier interessante Inhalte und Meinungen zu dem Bereich der Webentwicklung finden.
      </p>
      <article class="card" v-if="$page.posts.length">
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
      <a href="/en">You're not speaking German? Visit this site in English -></a>
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
}
p,
ul {
  margin-top: 0.5rem;
}
a {
  text-decoration: none;
  background-color: #dda;
  color: black;
  padding: 0 0.25em;
  border-radius: 0.25em;
  position: relative;
  transition: border-radius 0.8s, background-color 0.4s;
}
a:visited {
  background-color: #eee;
}
a:hover {
  background-color: #ccc;
  color: black;
  border-radius: 1em;
}
[target="_blank"]:before {
  content: " ↗️ ";
  vertical-align: text-top;
  font-weight: bold;
}
/* [target="_blank"]:after {
  opacity: 0;
  content: attr(href);
  font-size: 0.8em;
  position: absolute;
  white-space: nowrap;
  max-width: 10em;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #ff0;
  border-radius: 1em;
  left: 0;
  top: 100%;
  padding: 0 0.25em;
  margin-left: 0.5em;
  pointer-events: none;
  z-index: 1;
}
[target="_blank"]:hover:after {
  transition: opacity 0s 0.5s;
  opacity: 1;
} */
/* [target="_blank"][href*="instagram"]:before,
[target="_blank"][href*="facebook"]:before {
  color: #3b5998;
}
[target="_blank"][href*="spotify"]:before {
  color: #19b954;
}
[target="_blank"][href*="youtube"]:before {
  color: #19b954;
} */
[aria-hidden="true"] {
  display: none;
}
</style>
