<template>
  <div class="post">
    <PostHead :post-label="postLabel" :post-title="post.title" :post-user="post.author.name" />
    <PostContent :content="post.content" />
    <PostFoot :likes="postLikes" :dislikes="postDislike" :comments="post.comments.length" />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PostLabel from "@/components/post/post-display/atoms/PostLabel.vue";
import PostTitle from "@/components/post/post-display/atoms/PostTitle.vue";
import PostUsername from "@/components/post/post-display/atoms/PostUsername.vue";
import PostContent from "@/components/post/post-display/atoms/PostContent.vue";
import PostComment from "@/components/post/post-display/atoms/PostComment.vue";
import PostReaction from "@/components/post/post-display/atoms/PostReaction.vue";
import PostHead from "@/components/post/post-display/molecules/PostHead.vue";
import PostFoot from "@/components/post/post-display/molecules/PostFoot.vue";
import {Post} from "@/object/Post";

@Options({
  name: "PostVue",
  components: {
    PostFoot,
    PostHead,
    PostReaction,
    PostComment,
    PostContent,
    PostUsername,
    PostTitle,
    PostLabel
  },
  props: {
    post: Post,
  }
})
export default class PostVue extends Vue {
  private postLabel = "Pokemon";
  private postLikes = 19;
  private postDislike = 2;

}
</script>

<style scoped>
.post {
  background: #F0F0F0;
  border-radius: 8px;
}
</style>
