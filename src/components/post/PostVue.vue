<template>
  <div class="post">
    <PostHead :post-label="postLabel" :post-title="postTitle" :post-user="postUser" />
    <PostContent :content="postContent" />
    <PostFoot :likes="postLikes" :dislikes="postDislike" :comments="postComments" />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PostLabel from "@/components/post/atoms/PostLabel.vue";
import PostTitle from "@/components/post/atoms/PostTitle.vue";
import PostUsername from "@/components/post/atoms/PostUsername.vue";
import PostContent from "@/components/post/atoms/PostContent.vue";
import PostComment from "@/components/post/atoms/PostComment.vue";
import PostReaction from "@/components/post/atoms/PostReaction.vue";
import PostHead from "@/components/post/molecules/PostHead.vue";
import PostFoot from "@/components/post/molecules/PostFoot.vue";

@Options({
  name: "PostVue",
  components: {PostFoot, PostHead, PostReaction, PostComment, PostContent, PostUsername, PostTitle, PostLabel},
})
export default class PostVue extends Vue {
  private postLabel = "Pokemon";
  private postTitle = "First post !?";
  private postUser = "@Quentin🇫🇷";
  private postContent = "This is the first post :D ! (well technically it isn't because it's hardcoded :,< )";
  private postLikes = 19;
  private postDislike = 2;
  private postComments = 3;
}
</script>

<style scoped>
.post {
  background: #F0F0F0;
  border-radius: 8px;
}
</style>
