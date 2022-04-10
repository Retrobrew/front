<template>
  <div class="post">
    <div class="post-head">
      <PostLabel :label="postLabel" />
      <PostTitle :title="postTitle" />
      <PostUsername :username="postUser" />
    </div>
    <PostContent :content="postContent" />
    <div class="post-foot">
      <PostReaction :like="19" :dislike="2" />
      <PostComment :number="1" />
    </div>
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

@Options({
  name: "PostVue",
  components: {PostReaction, PostComment, PostContent, PostUsername, PostTitle, PostLabel},
})
export default class PostVue extends Vue {
  private postLabel = "Pokemon";
  private postTitle = "First post !?";
  private postUser = "@Quentin🇫🇷"
  private postContent = "This is the first post :D ! (well technically it isn't because it's hardcoded :,< )";
}
</script>

<style scoped>
.post {
  background: #F0F0F0;
  border-radius: 8px;
}
.post-head {
  display: flex;
  margin: 8px;
  justify-content: space-between;
}
.post-foot {
  display: flex;
  justify-content: space-between;
  margin: auto 16px;
}
</style>
