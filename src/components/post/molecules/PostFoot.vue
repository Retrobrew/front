<template>
  <div class="post-foot">
    <PostReaction :like="likes" :dislike="dislikes" />
    <PostComment :number="comments" />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PostReaction from "@/components/post/atoms/PostReaction.vue";
import PostComment from "@/components/post/atoms/PostComment.vue";

@Options({
  name: "PostFoot",
  components: {
    PostReaction,
    PostComment
  },
  props: {
    likes: Number,
    dislikes: Number,
    comments: Number,
  }
})
export default class PostFoot extends Vue {
}
</script>

<style scoped>
.post-foot {
  display: flex;
  justify-content: space-between;
  margin: auto 16px;
}
</style>
