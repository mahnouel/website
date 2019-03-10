<template>
  <Layout :hideHeader="true">
    <main class="main">
      <h1>Manuel K</h1>
      <p>Um ganz trocken zu beginnen: Ich freue mich sehr Sie an dieser Stelle herzlichst zu begrüßen.</p>
      <p>Mit dieser Seite möchte ich Sie über mich informieren, von mir überzeugen, und gleichzeitig Erlerntes dokumentieren.
        <br>Zusätzlich werden Sie hier interessante Inhalte und Meinungen zu dem Bereich der Webentwicklung finden.
      </p>
      <section v-if="$page.output.edges.length">
        <h2>📝 Output</h2>
        <article class="clickable" v-for="output in $page.output.edges" v-bind:key="output.id">
          <h3>{{ output.node.title }}</h3>
          <small>{{ output.node.date | date }}</small>
          {{output.node.excerpt}}
          <g-link :to="output.node.path">Lesen</g-link>
        </article>
        <p v-if="$page.output.edges.length >= 3">Zum
          <g-link to="/de/output/">Archiv</g-link>
        </p>
      </section>

      <section v-if="$page.learning.edges.length">
        <h2>📚 Today I Learned</h2>
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
      </section>
    </main>

    <aside class="aside">
      <article
        v-for="information in $page.information.edges"
        v-bind:key="information.id"
        v-html="information.node.content"
      ></article>
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
  information: allInformation {
    edges {
      node {
        title
        path
        content
      }
    }
  }
  output: allOutput(perPage: 3) {
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
