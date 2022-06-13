<template>
    <MDBCard class="mt-3 mb-3 post">
      <MDBCardHeader>
        <PostHead
            :post-label="post.postedIn"
            :post-title="post.title"
            :post-author="post.author"
            :post-uuid="post.uuid"
        />
      </MDBCardHeader>
      <MDBCardBody class="p-2">
        <img v-if="post.media" :src="getPicture(post.media)" class="card-img"/>
        <PostContent :content="post.content" />
      </MDBCardBody>
      <MDBCardFooter>
        <button
            v-on:click="$emit('deletePost', post.uuid)"
            v-if="showDelete"
            class="btn btn-close btn-sm btn-danger btn-rounded float-sm-end me-3 ms-3"></button>
        <PostFoot :likes="postLikes" :dislikes="postDislike" :comments="post.comments" />
      </MDBCardFooter>
    </MDBCard>
</template>

<script setup lang="ts">
import PostContent from "@/components/post/post-display/atoms/PostContent.vue";
import PostHead from "@/components/post/post-display/molecules/PostHead.vue";
import PostFoot from "@/components/post/post-display/molecules/PostFoot.vue";
import {Post} from "@/object/Post";
import {User} from "@/object/User";
import {inject} from "vue";
import {
  MDBCard,
  MDBCardBody,
} from 'mdb-vue-ui-kit';

const postLikes = 19;
const postDislike = 2;
// eslint-disable-next-line no-undef
const props = defineProps( {
  post: {
    type: Post,
    required: true
  },
})

const user: User | undefined = inject('user');
const showDelete = user?.uuid == props.post?.author?.uuid;
const getPicture = (media: any) => {
  return URL.createObjectURL(new Blob(media.data))
}

</script>

<style scoped>
.post {
  background: #F0F0F0;
}
</style>
