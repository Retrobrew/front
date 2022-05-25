<template>
  <div class="main-vue">
    <div v-if="posts.length > 0">
      <div v-for="post in posts" v-bind:key="post.uuid">
        <PostVue
            v-bind:post="post"
        />
      </div>
    </div>
    <div v-else>
      <p>Ce thread est vide :( <br> Soit le premier à dire quelques choses!</p>
    </div>

  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PostVue from "@/components/post/post-display/PostVue.vue";
import {Post} from "@/object/Post";
import APIController from "@/controller/APIController";

@Options({
  name: "FeedVue",
  components: {
    PostVue
  },
})
export default class FeedVue extends Vue {
  private posts: Array<Post> = [];

  mounted() {
    APIController.getMyFeed()
        .then((posts) => {
          this.posts = posts;
        })
        .catch((reason) => {
          //TODO afficher un message d'erreur;
          console.error(reason);
        });
  }
}
</script>

<style scoped>
#feed div {
  margin: 12px 0;
}
</style>
