<template>
  <button class="btn btn-sm btn-success" v-on:click="createPost">Create</button>
</template>

<script>
import {Options, Vue} from "vue-class-component";

@Options({
  name: "PostCreationSubmitButton"

})
export default class PostCreationSubmitButton extends Vue {
  createPost() {
    //TODO
  }
}
</script>

<style scoped>

</style>