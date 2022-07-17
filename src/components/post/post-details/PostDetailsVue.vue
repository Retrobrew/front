<template>
  <HeaderVue />
  <div class="main-vue">
    <PostVue v-bind:post="post" v-if="!loading"/>
    <CommentCreationVue
        v-on:new-comment="addComment($event)"
        class="post-details-comment-creation"/>
    <CommentListVue
        :key="comments"
        v-on:delete-comment="deleteComment($event)"
        v-bind:comments="comments" v-if="!loading"
    />
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

  deleteComment(commentUuid: string){
    PostController.deleteComment(this.postUuid, commentUuid)
        .then(success => {
          if(success) {
            const comment = this.comments.find(comment => comment.uuid === commentUuid);
            if(comment){
              this.comments.splice(this.comments.indexOf(comment), 1)
            }
          }
          else {
            alert("Error while trying to delete comment. Please try again later.")
          }
        }).catch(error => {
          console.error(error);
    })
  }

  addComment(comment: Comment) {
    this.comments.unshift(comment)
  }
}
</script>

<style scoped>
.post-details-comment-creation {
  margin-top: 16px;
  margin-bottom: 20px;
}
</style>
