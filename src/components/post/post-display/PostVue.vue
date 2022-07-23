<template>
    <MDBCard class="mt-3 mb-3 post">
      <MDBCardHeader>
        <PostHead
            :posted-in="post.postedIn"
            :post-title="post.title"
            :post-author="post.author"
            :post-uuid="post.uuid"
        />
      </MDBCardHeader>
      <MDBCardBody class="p-2 post-body-content">
        <img v-if="post.media" :src="getPicture(post.uuid)" class="card-img"/>
        <PostContent :content="post.content" />
      </MDBCardBody>
      <MDBCardFooter>
        <button
            v-on:click="$emit('deletePost', post.uuid)"
            v-if="showDelete"
            class="btn btn-close btn-sm btn-danger btn-rounded float-sm-end me-3 ms-3"></button>
        <PostFoot
          v-on:like-post="likePost"
          :liked="liked"
          :likes="postLikes"
          :dislikes="postDislikes"
          :comments="post.comments"
          :post-uuid="post.uuid"
        />
      </MDBCardFooter>
    </MDBCard>
</template>

<script setup lang="ts">
import PostContent from "@/components/post/post-display/atoms/PostContent.vue";
import PostHead from "@/components/post/post-display/molecules/PostHead.vue";
import PostFoot from "@/components/post/post-display/molecules/PostFoot.vue";
import {Post} from "@/object/Post";
import {User} from "@/object/User";
import {inject, ref} from "vue";
import {
  MDBCard,
  MDBCardBody,
} from 'mdb-vue-ui-kit';
import {PostController} from "@/controller/PostController";

const postDislikes = 2;
// eslint-disable-next-line no-undef
const props = defineProps( {
  post: {
    type: Post,
    required: true
  },
})

const user: User | undefined = inject('user');
const showDelete = user?.uuid == props.post?.author?.uuid;
const getPicture = (uuid: string) => {
  return `${process.env.VUE_APP_AUTH_API_URL}/posts/${uuid}/media`
}
let liked = ref<boolean>(props.post.likedByUser);
let postLikes = ref<number>(props.post.likesNb);

const likePost = () => {
  if(user == undefined){
    return;
  }

  if(liked.value){
    PostController
      .unlikePost(props.post.uuid)
      .then((res) => {
        if(res){
          liked.value = false;
          --postLikes.value;
        }
      })
    return;
  }
  PostController
    .likePost(props.post.uuid)
    .then((res) => {
      if(res){
        liked.value = true;
        ++postLikes.value;
      }
    })
}

</script>

<style scoped>
.post {
  background: #F0F0F0;
}
.post-body-content{
  display: flex;
  flex-direction: column;
}
.post-body-content img {
  height: auto;
  width: auto;
  max-height: 50vh;
  max-width: 90%;
  margin: auto;
}
</style>
