<template>
  <p class="mt-3">{{name}}</p>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    name: String
  },
})
export default class GroupName extends Vue {
}
</script>

<style scoped>
p {
  margin: auto 0;
  padding: 0;
  font-size: 1.5em;
  font-weight: bold;
}
</style>
