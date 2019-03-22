<template>
  <TextLayout>
    <main class="main">
      <article v-html="$page.blogPost.content"></article>
    </main>
  </TextLayout>
</template>

<page-query>
query BlogPost ($path: String!) {
  blogPost: blogPost (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.blogPost.title
    };
  }
};
</script>