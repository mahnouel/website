<template>
  <Layout>
    <main class="main">
      <article v-html="$page.learning.content"></article>
    </main>
  </Layout>
</template>

<page-query>
query learning ($path: String!) {
  learning: learning (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.learning.title
    };
  }
};
</script>