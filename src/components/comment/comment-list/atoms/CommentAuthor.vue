<template>
  <div class="comment-author">
    <img :src="url" @error="loadDefault">
    <div>
      <p>{{author}}</p>
      <img v-bind:src="authorFlag">
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "CommentAuthor",
  props: {
    author: String,
    authorUuid: String,
    authorFlag: String,
  }
})
export default class CommentAuthor extends Vue {
  private authorUuid!:string;
  private url = "";

  mounted(){
    this.url = `${process.env.VUE_APP_AUTH_API_URL}/users/${this.authorUuid}/avatar`
  }

  loadDefault(){
    this.url = "/assets/avatar-placeholder.png"
  }
}
</script>

<style scoped>
.comment-author {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
}
.comment-author img {
  border-radius: 24px;
  height: 48px;
  width: 48px;
  margin: 0 8px;
}
.comment-author div {
  background-color: seagreen;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  margin: 4px;
  padding: 4px;
}
.comment-author div p {
  color: #FFFFFF;
  margin: 0;
  padding: 0;
}
.comment-author div img {
  height: 24px;
  width: 24px;
  margin: 0 4px;
}
</style>
