<template>
  <div class="container">
    <PostCreationVue
        v-bind:group="group"
        v-if="user && isMember"
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
      <p class="text-center p-2">This thread is empty :( <br> Be the first to tell something!</p>
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
import {Group} from "@/object/Group";
import countries from "@/utils/countries.json";

// eslint-disable-next-line no-undef
const props = defineProps({
  group: {
    type: Group,
    required: true
  },
  isMember: {
    type: Boolean,
    default: true
  },
  loadHomeFeed: {
    type: Boolean
  }

});

const route = useRoute();
const user: User | undefined = inject('user');
let posts = ref<Array<Post>>([]);

onMounted(() => {
  //Si on est sur la page d'un groupe
  if(props.group.uuid !== "home"){
    FeedController
        .getGroupFeed(props.group.uuid)
        .then(res => {
          posts.value = res;
          posts.value.forEach(post => {
            post.author!.country = countries.find(country => country.name === post.author?.country)?.image ?? "";
          });
        }).catch(_ => {
      // console.error(reason)
    })

    return;
  }

  if(route.fullPath.includes('group')){
    return;
  }

  if(!user || props.loadHomeFeed){
    FeedController.getHomeFeed()
        .then((feed) => {
          posts.value = feed;
          posts.value.forEach(post => {
            post.author!.country = countries.find(country => country.name === post.author?.country)?.image ?? "";
          });
        })
        .catch((reason) => {
          //TODO afficher un message d'erreur;
          // console.error(reason);
        });
    return
  }

  FeedController.getMyFeed()
      .then((feed) => {
        posts.value = feed;
        posts.value.forEach(post => {
          post.author!.country = countries.find(country => country.name === post.author?.country)?.image ?? "";
        });
      })
      .catch((reason) => {
        //TODO afficher un message d'erreur;
        // console.error(reason);
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

