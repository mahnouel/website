<template>
  <div class="layout">
    <magic-header v-if="!hideHeader" :metaData="$static.metaData"/>
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
import MagicHeader from "~/components/MagicHeader.vue";

export default {
  components: {
    MagicHeader
  },
  props: ["hideHeader"]
};
</script>


<style lang="stylus">
@import '../style/index.styl';
</style>
