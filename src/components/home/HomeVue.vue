<template>
  <HeaderVue />
  <PostCreationVue
      v-if="user"
      v-on:postCreated="updateFeed($event)"
  />
  <FeedVue
      v-on:deletePost="deletePost($event)"
      v-bind:posts="posts"
      class="mb-3"
  />
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import HeaderVue from "@/components/header/HeaderVue.vue";
import FeedVue from "@/components/feed/FeedVue.vue";
import {inject} from "vue";
import {User} from "@/object/User";
import PostCreationVue from "@/components/post/post-creation/PostCreationVue.vue";
import {Post} from "@/object/Post";
import {FeedController} from "@/controller/FeedController";

@Options({
  name: "Home",
  components: {
    FeedVue,
    HeaderVue,
    PostCreationVue
  }
})
export default class Home extends Vue {
  private user: User | undefined = inject('user');
  private posts: Array<Post> = [];

  mounted() {
    if(!this.user){
      FeedController.getHomeFeed()
          .then((posts) => {
            this.posts = posts;
          })
          .catch((reason) => {
            //TODO afficher un message d'erreur;
            console.error(reason);
          });
      return
    }
    FeedController.getMyFeed()
        .then((posts) => {
          this.posts = posts;
        })
        .catch((reason) => {
          //TODO afficher un message d'erreur;
          console.error(reason);
        });
  }

  updateFeed(post: Post){
    this.posts.push(post)
  }
  deletePost(postUuid: string) {
    const post = this.posts.find(post => post.uuid === postUuid);
    if(post){
      this.posts.splice(this.posts.indexOf(post), 1)
    }
  }
}
</script>
