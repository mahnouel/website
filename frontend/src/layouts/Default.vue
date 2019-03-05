<template>
  <div class="layout">
    <header class="header" v-if="!hideHeader">
      <g-link class="header__title" to="/">{{ $static.metaData.siteName }}</g-link>
      <nav class="nav">
        {{$page}}
        <g-link class="button" to="/">Startseite</g-link>
        <g-link class="button" to="/about">About</g-link>
      </nav>
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


<style>
@import url("/font/inter/inter.css");
html {
  font-family: "Inter", sans-serif;
}
@supports (font-variation-settings: normal) {
  html {
    font-family: "Inter var", sans-serif;
  }
}

body {
  margin: 0;
  padding: 0;
  font-size: 150%;
  line-height: 1.5;
  padding-bottom: 4rem;
}

.layout {
  max-width: 700px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.visually-hidden {
  position: absolute !important;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0 !important;
  border: 0 !important;
  height: 1px !important;
  width: 1px !important;
  overflow: hidden;
}

.header {
  /* padding: 1em; */
  border-radius: 0.75rem;
  /* box-shadow: -0.5rem -0.5rem 0rem rgba(0, 255, 0, 0.5),
    0.5rem -0.5rem 0rem rgba(255, 0, 255, 0.5),
    -0.5rem 0.5rem 0rem rgba(0, 255, 255, 0.5),
    -0.5rem -0.5rem 0rem rgba(255, 255, 0, 0.5),
    0.5rem 0.5rem 0rem rgba(255, 0, 0, 0.5); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.header__title {
  font-size: 1.25em;
  color: inherit;
  text-decoration: none;
  border-radius: 0.75rem;
}

.button {
  text-decoration: none;
  padding: 0 1rem;
  background-color: #ccc;
  color: #000;
  font-weight: bold;
  border-radius: 0.75rem;
  display: inline-block;
}

.button + .button {
  margin-left: 1rem;
}

.button:focus,
.button:hover,
.button.active--exact {
  background-color: lightblue;
}
</style>
