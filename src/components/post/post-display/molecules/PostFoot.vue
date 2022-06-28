<template>
  <div class="post-foot">
    <PostReaction
        :liked="liked"
        v-on:like-post="$emit('like-post')"
        :likes="likes"
        :dislikes="dislikes"
    />
    <PostComment :number="comments" />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PostReaction from "@/components/post/post-display/atoms/PostReaction.vue";
import PostComment from "@/components/post/post-display/atoms/PostComment.vue";

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
    liked: Boolean
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
