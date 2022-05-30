<template>
  <div class="container">
    <PostCreationVue
        v-bind:group-uuid="groupUuid"
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
<script setup lang="ts">
import PostCreationVue from "@/components/post/post-creation/PostCreationVue.vue";
import PostVue from "@/components/post/post-display/PostVue.vue"
import {inject, onMounted, ref} from "vue";
import {User} from "@/object/User";
import {Post} from "@/object/Post";
import {FeedController} from "@/controller/FeedController";
import {useRoute} from "vue-router";

// eslint-disable-next-line no-undef
const props = defineProps({
  groupUuid: {
    type: String,
  },
});

const route = useRoute();
const user: User | undefined = inject('user');
let posts = ref<Array<Post>>([]);

onMounted(() => {
  //Si on est sur la page d'un groupe
  if(props.groupUuid){
    console.log("Working")
    FeedController
        .getGroupFeed(props.groupUuid)
        .then(res => {
          posts.value = res;
        }).catch(reason => console.error(reason))

    return;
  }

  if(route.fullPath.includes('group')){
    return;
  }
  if(!user){
    FeedController.getHomeFeed()
        .then((feed) => {
          posts.value = feed;
        })
        .catch((reason) => {
          //TODO afficher un message d'erreur;
          console.error(reason);
        });
    return
  }
  FeedController.getMyFeed()
      .then((feed) => {
        posts.value = feed;
      })
      .catch((reason) => {
        //TODO afficher un message d'erreur;
        console.error(reason);
      });
});

const updateFeed = (post: Post) => {
  posts.value.unshift(post)
}

const deletePost = (postUuid: string) => {
  FeedController.deletePost(postUuid).then(() => {
    const post = posts.value.find(post => post.uuid === postUuid);
    if(post){
      posts.value.splice(posts.value.indexOf(post), 1)
    }
  })

}

</script>

