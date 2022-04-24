<template>
  <p class="version-card-body-language">{{language}}</p>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "VersionLanguage",
  props: {
    language: String
  }
})
export default class VersionLanguage extends Vue{
}
</script>

<style scoped>
.version-card-body-language {
  font-size: 1.5em;
  padding: 0;
  margin: 0;
}
</style>
