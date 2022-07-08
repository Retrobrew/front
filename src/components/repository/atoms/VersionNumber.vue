<template>
  <div class="link-dark link" v-on:click="$emit('browse-version', version)">{{version}}</div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "VersionNumber",
  props: {
    version: String,
  }
})
export default class VersionNumber extends Vue{
}
</script>

<!--<style scoped>-->
<!--.version-card-body-version {-->
<!--  font-size: 1.5em;-->
<!--  font-weight: 800;-->
<!--  padding: 0;-->
<!--  margin: 0;-->
<!--}-->
<!--</style>-->
