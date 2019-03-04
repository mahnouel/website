<template>
  <div class="layout">
    <header class="header">
      <g-link class="header__title" to="/">{{ $static.metaData.siteName }}</g-link>
      <nav class="nav">
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

<style>
@import url("https://rsms.me/inter/inter.css");
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
}

.layout {
  max-width: 760px;
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
  padding: 1em;
  border-radius: 0.75rem;
  box-shadow: -0.5rem -0.5rem 0rem rgba(0, 255, 0, 0.5),
    0.5rem -0.5rem 0rem rgba(255, 0, 255, 0.5),
    -0.5rem 0.5rem 0rem rgba(0, 255, 255, 0.5),
    -0.5rem -0.5rem 0rem rgba(255, 255, 0, 0.5),
    0.5rem 0.5rem 0rem rgba(255, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.header__title {
  color: inherit;
  text-decoration: none;
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
