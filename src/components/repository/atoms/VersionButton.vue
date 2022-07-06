<template>
  <button
      v-on:click="navigateToEditor(projectId)"
      class="btn btn-primary"
  >
    {{label}}
  </button>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "VersionButton",
  props: {
    projectId: {
      type: String,
      required: true
    }
  }
})
export default class VersionButton extends Vue {
  private label = "Open IDE";

  private navigateToEditor(projectId: string): void {
    this.$router.push(`/ide/${projectId}`)
  }
}
</script>

<style scoped>

</style>
