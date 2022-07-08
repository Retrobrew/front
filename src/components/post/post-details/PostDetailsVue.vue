<template>
  <HeaderVue />
  <div class="main-vue">
    <PostVue v-bind:post="post" v-if="!loading"/>
    <CommentCreationVue />
    <CommentListVue v-bind:comments="post.comments" />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PostVue from "@/components/post/post-display/PostVue.vue";
import {PostController} from "@/controller/PostController";
import {Post} from "@/object/Post";
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
  private route = useRoute();

  mounted() {
    this.postUuid = this.route.params.uuid as string
    PostController.getPost(this.postUuid)
        .then((res) => {
          this.post = res;
          this.loading = false;
          console.log(this.post);
        })
        .catch((err) => {
          console.error(err);
        })
  }
}
</script>

<style scoped>

</style>
