<template>
  <div class="post-head">
    <PostLabel :label="postLabel" />
    <PostTitle :title="postTitle" />
    <PostUsername :username="postUser" />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PostLabel from "@/components/post/post-display/atoms/PostLabel.vue";
import PostTitle from "@/components/post/post-display/atoms/PostTitle.vue";
import PostUsername from "@/components/post/post-display/atoms/PostUsername.vue";

@Options({
  name: "PostHead",
  components: {
    PostLabel,
    PostTitle,
    PostUsername
  },
  props: {
    postLabel: String,
    postTitle: String,
    postUser: String,
  }
})
export default class PostHead extends Vue {
}
</script>

<style scoped>
.post-head {
  display: flex;
  margin: 8px;
  justify-content: space-between;
}
</style>
