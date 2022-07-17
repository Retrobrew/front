<template>
  <div class="comment">
    <CommentAuthor v-bind:author="comment.author.username" />
    <CommentText v-bind:content="comment.content" />
    <button
        v-if="userIsAuthor"
        v-on:click="$emit('delete-comment', comment.uuid)"
        class="btn btn-close btn-sm btn-danger btn-rounded float-sm-end mt-1 me-3 ms-3"></button>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import CommentAuthor from "@/components/comment/comment-list/atoms/CommentAuthor.vue";
import CommentText from "@/components/comment/comment-list/atoms/CommentText.vue";
import {Comment} from "@/object/Comment";
import {User} from "@/object/User";
import {inject} from "vue";

@Options({
  name: "Comment",
  components: {CommentAuthor, CommentText},
  props: {
    comment: Comment,
  }
})
export default class CommentVue extends Vue {
  private user: User | undefined = inject('user');
  private userIsAuthor = false;
  private comment!: Comment;

  mounted() {
    if(!this.user){
      return;
    }

    if(this.user.uuid === this.comment.author.uuid){
      this.userIsAuthor = true;
    }
  }

}
</script>

<style scoped>
.comment {
  display: flex;
  margin-bottom: 12px;
}
</style>
