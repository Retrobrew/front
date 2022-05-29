<template>
  <div class="container">
    <PostCreationVue
        v-if="user"
        v-on:postCreated="updateFeed($event)"
    />
    <div v-if="posts.length > 0">
      <div v-for="post in posts" v-bind:key="post.uuid">
        <PostVue
            v-on:delete-post="deletePost($event)"
            v-bind:post="post"
        />
      </div>
    </div>
    <div v-else>
      <p class="text-center p-2">Ce thread est vide :( <br> Soit le premier à dire quelques chose!</p>
    </div>
  </div>
</template>
<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PostVue from "@/components/post/post-display/PostVue.vue";
import {FeedController} from "@/controller/FeedController";
import {User} from "@/object/User";
import {inject} from "vue";
import {Post} from "@/object/Post";
import PostCreationVue from "@/components/post/post-creation/PostCreationVue.vue";

@Options({
  name: "FeedVue",
  components: {
    PostVue,
    PostCreationVue,
  },
})
export default class FeedVue extends Vue {
  private user: User | undefined = inject('user');
  private posts: Array<Post> = [];

  mounted() {
    if(this.$route.fullPath.includes('group')){
      return;
    }
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
    FeedController.deletePost(postUuid).then(() => {
      const post = this.posts.find(post => post.uuid === postUuid);
      if(post){
        this.posts.splice(this.posts.indexOf(post), 1)
      }
    })

  }

}
</script>

