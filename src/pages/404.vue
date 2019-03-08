<template>
  <Layout :hideHeader="true">
    <main class="main">
      <h1 class="visually-hidden">Manuel</h1>
      <h2>404</h2>
      <p>
        This route is empty.
        Teleport back
        <strong>
          <g-link to="/">Home 🏡</g-link>
        </strong>
      </p>
      <p>
        If you think this is an error, I'd love if you submit an issue at
        <a
          href="https://github.com/mahnouel/Website/issues/new?assignees=&labels=404&template=unexpected-empty-route.md&title=Unexpected+empty+route"
          target="_blank"
        >Github</a>
      </p>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "404"
  }
};
</script>
