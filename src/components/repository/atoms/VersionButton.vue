<template>
  <button class="btn btn-primary">{{label}}</button>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "VersionButton",
})
export default class VersionButton extends Vue {
  private label = "Open";
}
</script>

<style scoped>

</style>
