<template>
  <div class="post-head">
    <PostLabel :label="postedIn.name" :group-uuid="postedIn.uuid" />
    <PostTitle :title="postTitle" class="m-1"/>
    <a v-on:click="showProfile(postAuthor.uuid)" class="link float-end m-1">
      <PostUsername :username="postAuthor.username" :user-flag="postAuthor.country" />
    </a>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PostLabel from "@/components/post/post-display/atoms/PostLabel.vue";
import PostTitle from "@/components/post/post-display/atoms/PostTitle.vue";
import PostUsername from "@/components/post/post-display/atoms/PostUsername.vue";
import {User} from "@/object/User";
import {inject} from "vue";
import {Group} from "@/object/Group";

@Options({
  name: "PostHead",
  components: {
    PostLabel,
    PostTitle,
    PostUsername
  },
  props: {
    postedIn: Group,
    postTitle: String,
    postUuid: String,
    postAuthor: User,
  }
})
export default class PostHead extends Vue {
  private user: User | undefined = inject('user');

  showProfile(userUuid: string) {
    if(this.user?.uuid === userUuid){
      this.$router.push('/profile');
      return;
    }
    this.$router.push(`/user/${userUuid}`);
  }
}
</script>

<style scoped>
.post-head {
  display: flex;
  margin: 8px;
  justify-content: space-between;
}
</style>
