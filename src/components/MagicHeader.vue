<template>
  <header class="header">
    <g-link class="header__title" to="/">{{ metaData.siteName }}</g-link>
  </header>
</template>

<script>
export default {
  props: ["metaData"]
};
</script>
