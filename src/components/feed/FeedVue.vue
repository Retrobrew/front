<template>
  <div class="container">
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

@Options({
  name: "FeedVue",
  components: {
    PostVue
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
})
export default class FeedVue extends Vue {
  deletePost(postUuid: string){
    FeedController.deletePost(postUuid).then(() => {
      this.$emit('deletePost', postUuid);
    })
  }

}
</script>

