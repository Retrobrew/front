<template>
  <p class="group-list-title">{{title}}</p>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "GroupListTitle",
  props: {
    title: String,
  }
})
export default class GroupListTitle extends Vue {
}
</script>

<style scoped>
.group-list-title {
  font-size: 1.8em;
  text-align: center;
  padding: 12px;
}
</style>
