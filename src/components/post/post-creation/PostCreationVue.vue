<template>
  <div class="container mt-3">
    <PostCreationForm/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PostCreationForm from "@/components/post/post-creation/molecules/PostCreationForm.vue";
@Options({
  name: "PostCreationVue",
  components: {
    PostCreationForm
  }

})
export default class PostCreationVue extends Vue {
  private post = null;

}
</script>

<style scoped>

</style>