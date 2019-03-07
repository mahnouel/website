<template>
  <Layout>
    <main class="main">
      <article v-html="$page.output.content"></article>
    </main>
  </Layout>
</template>

<page-query>
query Output ($path: String!) {
  output: output (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.output.title
    };
  }
};
</script>