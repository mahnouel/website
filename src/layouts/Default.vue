<template>
  <div class="layout">
    <header class="header" v-if="!hideHeader">
      <g-link class="header__title" to="/">{{ $static.metaData.siteName }}</g-link>
      <!-- <nav class="nav">
        {{$page}}
        <g-link class="button" to="/">Startseite</g-link>
        <g-link class="button" to="/about">About</g-link>
      </nav>-->
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  props: ["hideHeader"]
};
</script>


<style lang="stylus">
@import '../style/index.styl';
</style>
