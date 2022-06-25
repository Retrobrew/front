<template>
  <div class="main-vue comment-list">
    <Comment v-for="comment in comments" :comment="comment" v-bind:key="comment" />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Comment from "@/components/comment/comment-list/molecules/Comment.vue";

@Options({
  name: "CommentListVue",
  components: {Comment},
  props: {
    comments: Number,
  }
})
export default class CommentListVue extends Vue {
}
</script>

<style scoped>
.comment-list {
  background-color: #F0F0F0;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.07),0 4px 6px -2px rgba(0,0,0,.05);
}
</style>
