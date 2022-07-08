<template>
  <div class="comment">
    <CommentAuthor v-bind:author="comment.author.username" />
    <CommentText v-bind:content="comment.content" />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import CommentAuthor from "@/components/comment/comment-list/atoms/CommentAuthor.vue";
import CommentText from "@/components/comment/comment-list/atoms/CommentText.vue";
import {Comment} from "@/object/Comment";

@Options({
  name: "Comment",
  components: {CommentAuthor, CommentText},
  props: {
    comment: Comment,
  }
})
export default class CommentVue extends Vue {
}
</script>

<style scoped>
.comment {
  display: flex;
  margin-bottom: 12px;
}
</style>
