<template>
  <div class="col-sm-3">
    <a class="link small" v-on:click="addTag">Add tag</a>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
@Options({
  name: "PostCreationTag"
})
export default class PostCreationTag extends Vue {
  addTag(): void {
    console.log("Not doing anything")
  }
}
</script>

<style scoped>

</style>
