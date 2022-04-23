<template>
  <p>{{groupName}}</p>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "GroupListName",
  props: {
    groupName: String,
  }
})
export default class GroupListName extends Vue {
}
</script>

<style scoped>
.group-list-card p {
  margin: auto 0;
}
</style>
