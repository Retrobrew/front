<template>
  <div class="comment">
    <div class="comment-content">
      <CommentAuthor v-bind:author="comment.author.username" v-bind:author-picture="comment.author.picture" v-bind:author-flag="authorFlag"/>
      <CommentText v-bind:content="comment.content" />
    </div>
    <button
        v-if="userIsAuthor"
        v-on:click="$emit('delete-comment', comment.uuid)"
        class="btn btn-close btn-sm btn-danger btn-rounded"></button>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import CommentAuthor from "@/components/comment/comment-list/atoms/CommentAuthor.vue";
import CommentText from "@/components/comment/comment-list/atoms/CommentText.vue";
import {Comment} from "@/object/Comment";
import {User} from "@/object/User";
import {inject} from "vue";
import countries from "@/utils/countries.json";

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
  private authorFlag = "";

  mounted() {
    if(!this.user){
      return;
    }

    if (this.comment.author.picture == null) {
      this.comment.author.picture = "https://cdn-icons-png.flaticon.com/512/1077/1077063.png";
    }

    if(this.user.uuid === this.comment.author.uuid){
      this.userIsAuthor = true;
    }

    this.authorFlag = countries.find(country => country.name === this.comment.author.country)?.image ?? "";
  }

}
</script>

<style scoped>
.comment {
  display: flex;
  margin-bottom: 12px;
}
.comment-content {
  width: 90%;
}
</style>
