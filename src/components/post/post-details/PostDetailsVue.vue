<template>
  <HeaderVue />
  <div class="main-vue">
    <PostVue v-bind:post="post" v-if="!loading"/>
    <CommentCreationVue class="post-details-comment-creation"/>
    <CommentListVue v-bind:comments="comments" v-if="!loading"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PostVue from "@/components/post/post-display/PostVue.vue";
import {PostController} from "@/controller/PostController";
import {Post} from "@/object/Post";
import {Comment} from "@/object/Comment";
import HeaderVue from "@/components/header/HeaderVue.vue";
import CommentListVue from "@/components/comment/comment-list/CommentListVue.vue";
import CommentCreationVue from "@/components/comment/comment-creation/CommentCreationVue.vue";
import {useRoute} from "vue-router";

@Options({
  name: "PostDetailsVue",
  components: {CommentCreationVue, CommentListVue, HeaderVue, PostVue},
})
export default class PostDetailsVue extends Vue {
  private postUuid: string = "";
  private loading = true;
  private post: Post = Post.emptyPost();
  private comments: Array<Comment> = [];
  private route = useRoute();

  mounted() {
    this.postUuid = this.route.params.uuid as string
    PostController.getPost(this.postUuid)
        .then((res) => {
          console.log(res);
          this.post = res;
        })
        .catch((err) => {
          console.error(err);
        })

    PostController.getComments(this.postUuid)
        .then((res) => {
          this.comments.push(...res);
          this.post.comments = this.comments.length;
          this.loading = false;
        })
        .catch((err) => {
          console.error(err);
        })
  }
}
</script>

<style scoped>
.post-details-comment-creation {
  margin-top: 16px;
  margin-bottom: 20px;
}
</style>
