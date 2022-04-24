<template>
  <button class="btn btn-primary">{{label}}</button>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "ProjectHomeButton",
})
export default class ProjectHomeButton extends Vue {
  private label = "Open";
}
</script>

<style scoped>

</style>
